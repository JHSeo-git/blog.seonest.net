https://app.planetscale.com/

## planetscale + prisma + next.js

> prisma, nextjs 셋팅은 여기서 다루진 않겠습니다.

사전에 Next.js 프로젝트가 설정되어 있고 prisma가 설치되어 있어야 합니다.

### planetscale 셋팅

> - https://www.prisma.io/docs/guides/database/using-prisma-with-planetscale#how-to-make-schema-changes-with-db-push
> - https://planetscale.com/docs/tutorials/deploy-to-vercel
> - https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database
> - https://github.com/prisma/prisma/issues/7292
> - https://planetscale.com/blog/how-to-setup-next-js-with-prisma-and-planetscale

https://app.planetscale.com 에 접속하여 계정을 생성합니다.

프로젝트를 생성합니다.

git처럼 branch를 가진 프로젝트가 생성되는데 기본적으로 main branch가 생성됩니다.

저는 preview, dev에서 사용할 preview branch를 하나 더 생성합니다.

planetscale branch는 git과 마찬가지로 pr을 통해 승인을 획득한 뒤 merge가 되는 구조입니다.

생성이 확인되면 connect 버튼을 클릭하여 연결 정보를 가져옵니다.

2개 branch 연결 정보를 가져옵니다. (2개 database 라고 생각하면 됩니다.)

```bash
# main branch 연결 정보
mysql://....

# preview branch 연결 정보
mysql://....
```

위 2개 정보를 로컬 사용을 위해 .env에 저장해두고 사용합니다. 로컬에서는 preview 브랜치 db를 사용할 것이기 때문에 preview branch 연결 정보를 저장합니다.

앱 배포 후에는 main 브랜치 db를 연결해야 하기 때문에 vercel env setting에서 main branch 연결 정보를 저장합니다.

- production에는 vercel env setting에서 main branch 연결 정보를 저장합니다.
- preview, dev에는 vercel env setting에서 preview branch 연결 정보를 저장합니다.

> next.js 앱을 배포하기 위해 vercel 사용한다는 것을 전제로 작성되었습니다. 그 외 배포 방법은 비슷하게 env 설정하면 될 것 같습니다.

### migrate

PlanetScale은 외래키 제약조건을 지원하지 않고 Prisma는 기본적으로 관계 표현 시 외래키를 사용하기 때문에 PlanetScale과 Prisma를 함께 사용할 때 'relationMode' 속성에 대해 설정을 해야 합니다. 또한 외래키 제약조건을 지원하지 않기 때문에 인덱스도 같이 추가합니다.

```prisma
datasource db {
  provider     = "mysql"
  url          = env("DATABASE_URL")
  relationMode = "prisma"
}

model PostView {
  id        Int      @id @default(autoincrement())
  slug      String
  viewer    User     @relation(fields: [viewerId], references: [id])
  viewerId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([slug])
  @@index([viewerId])
}
```

preview에 prisma를 통해 `npx prisma db push`를 하면 preview branch에 table schema가 적용됩니다. 적용이 잘 되었다는 로그가 찍히고 결과를 확인하기 위해 prisma studio를 실행합니다.

```bash
npx prisma studio
```

> https://github.com/prisma/prisma/issues/7292  
> 위 issue를 확인해보면 planetscale에서 migrate 기능을 사용에 제한이 있다는 것과 해결할 수 있는 방법이 있습니다.  
> 그러나 planetscale에서는 free tier에서는 최대 2개 브랜치만 제공하는데, 위 migrate 기능을 위해 shadow database를 사용하기 때문에 free tier에서는 브랜치를 더 생성할 수 없습니다.  
> 그래서 migrate 기능을 사용하지 않고 prisma db push를 사용하였습니다.

### deploy

> CD 프로세스에 planetscale preview branch 스키마를 main branch로 merge하는 프로세스를 추가할 방법을 알지 못해 수동으로 진행하였습니다. 이 경우 스키마가 크게 변경되는 경우 downtime이 발생할 수 밖에 없는 구조입니다.

Vercel 배포를 할 시점에 main branch로 pr을 통해 merge를 합니다.
