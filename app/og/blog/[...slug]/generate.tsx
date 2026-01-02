import { readFile } from "node:fs/promises"
import type { ReactNode } from "react"
import type { ImageResponseOptions } from "@takumi-rs/image-response"

export interface GenerateProps {
  title: ReactNode
  description?: ReactNode
}

const font = readFile("./lib/og/NanumGothicCoding-Regular.ttf").then((data) => ({
  name: "Mono",
  data,
  weight: 400,
}))
const fontBold = readFile("./lib/og/NanumGothicCoding-Bold.ttf").then((data) => ({
  name: "Mono",
  data,
  weight: 600,
}))

export async function getImageResponseOptions(): Promise<ImageResponseOptions> {
  return {
    width: 1200,
    height: 630,
    format: "webp",
    fonts: await Promise.all([font, fontBold]),
  }
}

export function generate({ title, description }: GenerateProps) {
  const siteName = "Seonest"
  const primaryTextColor = "rgb(240,240,240)"
  const logo = (
    <svg width="50" height="50" viewBox="0 0 100 100">
      <rect width="100" height="100" rx="16" fill="white" />
      <path
        d="M47.8242 82.3863C41.0746 82.3863 35.5684 80.9148 31.3055 77.972C27.1018 74.9691 25 70.735 25 65.2697C25 64.7292 25.0592 63.9184 25.1776 62.8373H40.9858C40.8082 65.1195 41.341 66.9213 42.5844 68.2426C43.8277 69.5638 45.7223 70.2245 48.2682 70.2245C50.5773 70.2245 52.3831 69.714 53.6856 68.693C55.0474 67.672 55.7282 66.2306 55.7282 64.3688C55.7282 62.4469 54.8697 60.8854 53.1528 59.6843C51.495 58.4831 48.8899 57.1318 45.3375 55.6303C41.9035 54.1889 39.0912 52.8376 36.9005 51.5764C34.7691 50.2551 32.9041 48.4834 31.3055 46.2613C29.7069 44.0391 28.9076 41.2464 28.9076 37.8832C28.8484 33.7391 29.8549 30.1356 31.9272 27.0727C33.9994 24.0097 36.8709 21.6674 40.5417 20.0459C44.2126 18.4243 48.4162 17.6135 53.1528 17.6135C57.4156 17.6135 61.2049 18.3042 64.5204 19.6855C67.836 21.0068 70.4115 22.9587 72.2469 25.5412C74.0823 28.0636 75 31.0666 75 34.5499C75 35.4508 74.9704 36.1114 74.9112 36.5318H58.7478C58.807 36.2916 58.8366 35.9313 58.8366 35.4508C58.8366 33.7692 58.2445 32.4179 57.0604 31.3969C55.9355 30.3158 54.3665 29.7753 52.3535 29.7753C50.222 29.7753 48.4754 30.3158 47.1137 31.3969C45.8111 32.4179 45.1599 33.8292 45.1599 35.631C45.1599 37.4327 45.9888 38.9642 47.6465 40.2254C49.3043 41.4266 51.8798 42.8379 55.373 44.4595C58.8662 46.0811 61.7081 47.5825 63.8988 48.9639C66.1486 50.3452 68.0728 52.207 69.6714 54.5493C71.27 56.8315 72.0693 59.6542 72.0693 63.0175C72.0693 66.7411 71.0924 70.0743 69.1385 73.0172C67.1847 75.96 64.3724 78.2723 60.7016 79.9539C57.0308 81.5755 52.7383 82.3863 47.8242 82.3863Z"
        fill="black"
      />
    </svg>
  )

  return (
    <div
      style={{
        fontFamily: "Mono",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",
        backgroundColor: "#282828",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "4rem",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "64px",
          }}
        >
          {title}
        </span>
        <p
          style={{
            fontSize: "40px",
            color: "rgba(240,240,240,0.7)",
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "24px",
            marginTop: "auto",
            color: primaryTextColor,
          }}
        >
          {logo}
          <span
            style={{
              fontSize: "40px",
              fontWeight: 600,
            }}
          >
            {siteName}
          </span>
        </div>
      </div>
    </div>
  )
}
