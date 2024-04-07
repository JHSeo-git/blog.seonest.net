# supabase + prisma

supbase + prisma를 사용하여 데이터베이스를 사용하는 방법입니다.

## notice

기존 planetscale(mysql)을 사용하던 것을 supabase(postgres)로 변경하였습니다.
따라서 여기 문서 주요 내용은 supabase로 migration 하는 방법에 대한 내용입니다.

## migration

supabase를 생성하고 prisma migration을 정상진행하면 문제없이 사용할 수 있습니다.

### 0. prerequisites

저는 migration 데이터가 존재했기 때문에 기존 planetscale에서 데이터를 백업받아 supabase로 import하는 과정이 필요했습니다.

여러 방법이 있겠지만 저는 데이터 수가 적었기 때문에 단순하게 insert query를 생성하여 수동으로 데이터를 옮겼습니다.

```sql
INSERT INTO "Post" ("slug", "viewCount", "createdAt", "updatedAt") VALUES('react/planetscale-prisma-next-js', 143, '2023-02-22 13:55:22.246000000', '2024-03-06 11:24:32.099000000');
...
```

### 1. supabase 생성

supabase에 가입하고 새로운 프로젝트를 생성합니다.

### 2. prisma schema 수정

prisma schema를 수정합니다.

```prisma
// prisma/schema.prisma
datasource db {
  provider     = "postgresql"
  url          = env("SUPABASE_DATABASE_URL")
  directUrl    = env("DIRECT_URL")
}
```

### 3. .env 파일 수정

```env
SUPABASE_DATABASE_URL=postgres://<supabase_user>:<supabase_password>@<supabase_url>:<supabase_port>/<supabase_db>?schema=...&pgbouncer=true&connection_limit=1"
DIRECT_URL=postgres://<supabase_user>:<supabase_password>@<supabase_url>:<supabase_port>/<supabase_db>?schema=...&pgbouncer=true&connection_limit=1"
```

#### pgbouncer, connection_limit

> https://supabase.com/partners/integrations/prisma

To do this, set the connection mode to `Transaction` in the database settings page and copy the connection string
and append `?pgbouncer=true&connection_limit=1`. `pgbouncer=true` disables Prisma from generating prepared statements.
This is required since our connection pooler does not support prepared statements in transaction mode yet. The
`connection_limit=1` parameter is only required if you are using Prisma from a serverless environment. For more
information on these parameters, refer to the Troubleshooting section below. If your database is Postgres 14 and above,
the Transaction connection pooler string will look like this

### 4. npx prisma db push

스키마 migration을 위해 `npx prisma db push`를 실행합니다.

```bash
❯ npx prisma db push
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "postgres", schema "..." at "..."

The database is already in sync with the Prisma schema.

✔ Generated Prisma Client (v5.11.0) to ./node_modules/.pnpm/@prisma+client@5.11.0_prisma@5.11.0/node_modules/@prisma/client in 93ms
```

### 5. 데이터 migration

기존 데이터를 supabase로 migration합니다.

저는 위에도 적었다 싶이 supabase SQL Editor를 통해 insert query를 실행했습니다.

![A screen shot image for SQL Editor](./docs/sql-editor.png)
