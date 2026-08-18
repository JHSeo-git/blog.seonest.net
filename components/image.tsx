import NextImage, { type ImageProps as NextImageProps } from "next/image"

import { cn } from "@/lib/utils"

type ImageProps = NextImageProps & {
  caption?: string
  wide?: boolean
}

// 포스트 폴더에 함께 둔 파일을 MDX에서 import해 src로 넘기면 크기를 빌드타임에 알 수 있다.
// 문자열 src(원격/공개 경로)를 쓸 때는 next/image 규칙대로 width/height가 필요하다.
export function Image({ caption, wide = false, className, alt, ...props }: ImageProps) {
  return (
    <figure className={cn("my-6", wide && "relative left-1/2 w-screen max-w-275 -translate-x-1/2")}>
      <NextImage
        alt={alt}
        className={cn("border-divider h-auto w-full rounded-lg border", className)}
        {...props}
      />
      {caption ? (
        <figcaption className="text-body-secondary mt-2 text-center text-sm">{caption}</figcaption>
      ) : null}
    </figure>
  )
}
