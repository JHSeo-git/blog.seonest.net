import type { LucideProps } from 'lucide-react';
import {
  AlertCircle,
  AlertTriangle,
  Calendar,
  Flame,
  type Icon as LucideIcon,
  Info,
  Lightbulb,
  LineChart,
  Moon,
  Sun,
  Timer,
  Twitter,
} from 'lucide-react';

export type Icon = LucideIcon;

export const Icons = {
  AlertCircle,
  AlertTriangle,
  Calendar,
  Flame,
  Info,
  Lightbulb,
  LineChart,
  Moon,
  Sun,
  Timer,
  Twitter,
  Logo: ({ width, height = 36, ...props }: LucideProps) => (
    <svg
      viewBox="0 0 166 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M2.8522 31.008L36.9802 17.976L37.7002 26.904L12.7882 35.544L33.2362 44.976L28.7002 52.968L0.908203 39.432L2.8522 31.008Z"
        fill="#828282"
      />
      <path
        d="M54.4301 48.648C55.5341 48.648 56.6381 48.576 57.7421 48.432C58.8461 48.24 59.8301 47.928 60.6941 47.496C61.5581 47.064 62.2541 46.464 62.7821 45.696C63.3581 44.88 63.6461 43.848 63.6461 42.6C63.6461 41.64 63.3821 40.824 62.8541 40.152C62.3261 39.432 61.6541 38.784 60.8381 38.208C60.0221 37.632 59.1101 37.104 58.1021 36.624C57.0941 36.144 56.0861 35.616 55.0781 35.04C53.7821 34.272 52.5581 33.456 51.4061 32.592C50.2541 31.728 49.2701 30.768 48.4541 29.712C47.6381 28.608 46.9901 27.408 46.5101 26.112C46.0301 24.768 45.7901 23.232 45.7901 21.504C45.7901 19.296 46.1981 17.256 47.0141 15.384C47.8781 13.464 49.1261 11.808 50.7581 10.416C52.4381 9.02402 54.5261 7.94402 57.0221 7.17602C59.5181 6.36002 62.4461 5.95202 65.8061 5.95202C67.3421 5.95202 68.8301 6.09602 70.2701 6.38403C71.7101 6.62403 73.0541 6.93603 74.3021 7.32002C75.5501 7.70402 76.6781 8.16002 77.6861 8.68803C78.7421 9.16803 79.6301 9.64803 80.3501 10.128L75.6701 18.408C74.4701 17.496 73.0061 16.728 71.2781 16.104C69.5501 15.48 67.6781 15.168 65.6621 15.168C64.5581 15.168 63.5021 15.264 62.4941 15.456C61.4861 15.648 60.5981 15.984 59.8301 16.464C59.0621 16.896 58.4381 17.472 57.9581 18.192C57.5261 18.912 57.3101 19.8 57.3101 20.856C57.3101 21.816 57.4781 22.632 57.8141 23.304C58.1981 23.928 58.6781 24.48 59.2541 24.96C59.8301 25.44 60.5021 25.872 61.2701 26.256C62.0381 26.64 62.8541 27.048 63.7181 27.48C65.2061 28.248 66.6461 29.064 68.0381 29.928C69.4301 30.792 70.6541 31.8 71.7101 32.952C72.7661 34.056 73.6061 35.328 74.2301 36.768C74.8541 38.208 75.1661 39.912 75.1661 41.88C75.1661 44.616 74.6621 46.992 73.6541 49.008C72.6461 51.024 71.2301 52.704 69.4061 54.048C67.5821 55.392 65.3981 56.376 62.8541 57C60.3581 57.672 57.5741 58.008 54.5021 58.008C52.4861 58.008 50.5901 57.84 48.8141 57.504C47.0861 57.168 45.5021 56.784 44.0621 56.352C42.6701 55.872 41.4461 55.368 40.3901 54.84C39.3821 54.312 38.5661 53.832 37.9421 53.4L42.6941 44.832C43.2701 45.216 43.9661 45.624 44.7821 46.056C45.5981 46.488 46.5101 46.896 47.5181 47.28C48.5741 47.664 49.6781 48 50.8301 48.288C51.9821 48.528 53.1821 48.648 54.4301 48.648Z"
        fill="#5FD4F4"
      />
      <path d="M97.0417 70.32H86.0977L126.418 0.624023H137.29L97.0417 70.32Z" fill="#BDBDBD" />
      <path
        d="M163.681 39.936L129.553 52.968L128.833 43.968L153.745 35.328L133.297 25.896L137.833 17.976L165.625 31.512L163.681 39.936Z"
        fill="#828282"
      />
    </svg>
  ),
  TextLogo: ({ width, height = 20, ...props }: LucideProps) => (
    <svg
      viewBox="0 0 293 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M16.6759 50.576C13.5079 50.576 10.6519 50.072 8.10795 49.064C5.61195 48.056 3.64395 46.664 2.20395 44.888C0.763945 43.064 0.0439453 40.976 0.0439453 38.624C0.0439453 38.288 0.0919453 37.688 0.187945 36.824H12.0679C11.9719 38.312 12.4039 39.512 13.3639 40.424C14.3719 41.288 15.7879 41.72 17.6119 41.72C19.1479 41.72 20.4199 41.432 21.4279 40.856C22.4359 40.28 22.9399 39.464 22.9399 38.408C22.9399 37.4 22.3879 36.608 21.2839 36.032C20.2279 35.408 18.4519 34.664 15.9559 33.8C13.3639 32.936 11.1799 32.096 9.40395 31.28C7.67595 30.416 6.18795 29.192 4.93995 27.608C3.69195 26.024 3.06795 24.032 3.06795 21.632C3.06795 19.28 3.76395 17.168 5.15595 15.296C6.54795 13.376 8.49195 11.888 10.9879 10.832C13.5319 9.77598 16.4599 9.24798 19.7719 9.24798C23.0839 9.24798 25.9639 9.79998 28.4119 10.904C30.8599 11.96 32.7559 13.448 34.0999 15.368C35.4439 17.288 36.1159 19.448 36.1159 21.848L36.0439 22.928H24.8839C24.9799 21.488 24.5479 20.336 23.5879 19.472C22.6279 18.608 21.2599 18.176 19.4839 18.176C18.0919 18.176 16.9399 18.464 16.0279 19.04C15.1639 19.616 14.7319 20.408 14.7319 21.416C14.7319 22.472 15.3079 23.36 16.4599 24.08C17.6599 24.752 19.5079 25.52 22.0039 26.384C24.5959 27.248 26.7319 28.112 28.4119 28.976C30.1399 29.792 31.6039 30.968 32.8039 32.504C34.0519 33.992 34.6759 35.864 34.6759 38.12C34.6759 40.712 33.8839 42.944 32.2999 44.816C30.7639 46.688 28.6279 48.128 25.8919 49.136C23.2039 50.096 20.1319 50.576 16.6759 50.576Z"
        fill="#5FD4F4"
      />
      <path
        d="M65.1764 9.24798C70.3604 9.24798 74.4644 10.664 77.4884 13.496C80.5604 16.28 82.0964 20.096 82.0964 24.944C82.0964 26.528 81.9764 27.944 81.7364 29.192C81.5444 30.296 81.2564 31.472 80.8724 32.72H53.0084C52.9604 33.008 52.9364 33.464 52.9364 34.088C52.9364 36.2 53.5124 37.808 54.6644 38.912C55.8164 40.016 57.3524 40.568 59.2724 40.568C62.3444 40.568 64.6964 39.272 66.3284 36.68H79.4324C77.7044 40.76 74.8964 44.096 71.0084 46.688C67.1204 49.28 62.7524 50.576 57.9044 50.576C52.7204 50.576 48.5684 49.136 45.4484 46.256C42.3764 43.376 40.8404 39.464 40.8404 34.52C40.8404 33.032 40.9844 31.496 41.2724 29.912C41.9924 25.736 43.4804 22.088 45.7364 18.968C47.9924 15.848 50.8004 13.448 54.1604 11.768C57.5204 10.088 61.1924 9.24798 65.1764 9.24798ZM69.6404 26.456C69.7364 25.784 69.7844 25.328 69.7844 25.088C69.7844 23.168 69.1844 21.704 67.9844 20.696C66.7844 19.64 65.2004 19.112 63.2324 19.112C61.1204 19.112 59.2484 19.76 57.6164 21.056C56.0324 22.304 54.8804 24.104 54.1604 26.456H69.6404Z"
        fill="#5FD4F4"
      />
      <path
        d="M102.848 50.576C99.3916 50.576 96.3196 49.88 93.6316 48.488C90.9436 47.096 88.8556 45.128 87.3676 42.584C85.9276 40.04 85.2076 37.088 85.2076 33.728C85.2076 29.168 86.2876 25.016 88.4476 21.272C90.6076 17.528 93.5836 14.6 97.3756 12.488C101.168 10.328 105.392 9.24798 110.048 9.24798C113.504 9.24798 116.576 9.96798 119.264 11.408C122 12.8 124.112 14.768 125.6 17.312C127.088 19.856 127.832 22.808 127.832 26.168C127.832 30.776 126.728 34.952 124.52 38.696C122.36 42.392 119.36 45.296 115.52 47.408C111.728 49.52 107.504 50.576 102.848 50.576ZM104.576 39.992C106.592 39.992 108.392 39.392 109.976 38.192C111.608 36.944 112.856 35.36 113.72 33.44C114.632 31.472 115.088 29.432 115.088 27.32C115.088 24.92 114.44 23.072 113.144 21.776C111.848 20.48 110.216 19.832 108.248 19.832C106.184 19.832 104.36 20.456 102.776 21.704C101.24 22.904 100.04 24.488 99.1756 26.456C98.3116 28.424 97.8796 30.488 97.8796 32.648C97.8796 35 98.5036 36.824 99.7516 38.12C101 39.368 102.608 39.992 104.576 39.992Z"
        fill="#5FD4F4"
      />
      <path
        d="M161.939 9.39198C165.971 9.39198 169.139 10.52 171.443 12.776C173.747 15.032 174.899 18.176 174.899 22.208C174.899 23.552 174.755 24.992 174.467 26.528L170.291 50H158.051L161.939 28.184C162.083 27.368 162.155 26.648 162.155 26.024C162.155 24.008 161.579 22.448 160.427 21.344C159.323 20.24 157.763 19.688 155.747 19.688C153.347 19.688 151.331 20.432 149.699 21.92C148.067 23.408 147.011 25.496 146.531 28.184V27.824L142.643 50H130.331L137.387 9.82398H149.699L148.763 15.224C150.347 13.448 152.267 12.032 154.523 10.976C156.827 9.91998 159.299 9.39198 161.939 9.39198Z"
        fill="#828282"
      />
      <path
        d="M203.903 9.24798C209.087 9.24798 213.191 10.664 216.215 13.496C219.287 16.28 220.823 20.096 220.823 24.944C220.823 26.528 220.703 27.944 220.463 29.192C220.271 30.296 219.983 31.472 219.599 32.72H191.735C191.687 33.008 191.663 33.464 191.663 34.088C191.663 36.2 192.239 37.808 193.391 38.912C194.543 40.016 196.079 40.568 197.999 40.568C201.071 40.568 203.423 39.272 205.055 36.68H218.159C216.431 40.76 213.623 44.096 209.735 46.688C205.847 49.28 201.479 50.576 196.631 50.576C191.447 50.576 187.295 49.136 184.175 46.256C181.103 43.376 179.567 39.464 179.567 34.52C179.567 33.032 179.711 31.496 179.999 29.912C180.719 25.736 182.207 22.088 184.463 18.968C186.719 15.848 189.527 13.448 192.887 11.768C196.247 10.088 199.919 9.24798 203.903 9.24798ZM208.367 26.456C208.463 25.784 208.511 25.328 208.511 25.088C208.511 23.168 207.911 21.704 206.711 20.696C205.511 19.64 203.927 19.112 201.959 19.112C199.847 19.112 197.975 19.76 196.343 21.056C194.759 22.304 193.607 24.104 192.887 26.456H208.367Z"
        fill="#828282"
      />
      <path
        d="M239.918 50.576C236.75 50.576 233.894 50.072 231.35 49.064C228.854 48.056 226.886 46.664 225.446 44.888C224.006 43.064 223.286 40.976 223.286 38.624C223.286 38.288 223.334 37.688 223.43 36.824H235.31C235.214 38.312 235.646 39.512 236.606 40.424C237.614 41.288 239.03 41.72 240.854 41.72C242.39 41.72 243.662 41.432 244.67 40.856C245.678 40.28 246.182 39.464 246.182 38.408C246.182 37.4 245.63 36.608 244.526 36.032C243.47 35.408 241.694 34.664 239.198 33.8C236.606 32.936 234.422 32.096 232.646 31.28C230.918 30.416 229.43 29.192 228.182 27.608C226.934 26.024 226.31 24.032 226.31 21.632C226.31 19.28 227.006 17.168 228.398 15.296C229.79 13.376 231.734 11.888 234.23 10.832C236.774 9.77598 239.702 9.24798 243.014 9.24798C246.326 9.24798 249.206 9.79998 251.654 10.904C254.102 11.96 255.998 13.448 257.342 15.368C258.686 17.288 259.358 19.448 259.358 21.848L259.286 22.928H248.126C248.222 21.488 247.79 20.336 246.83 19.472C245.87 18.608 244.502 18.176 242.726 18.176C241.334 18.176 240.182 18.464 239.27 19.04C238.406 19.616 237.974 20.408 237.974 21.416C237.974 22.472 238.55 23.36 239.702 24.08C240.902 24.752 242.75 25.52 245.246 26.384C247.838 27.248 249.974 28.112 251.654 28.976C253.382 29.792 254.846 30.968 256.046 32.504C257.294 33.992 257.918 35.864 257.918 38.12C257.918 40.712 257.126 42.944 255.542 44.816C254.006 46.688 251.87 48.128 249.134 49.136C246.446 50.096 243.374 50.576 239.918 50.576Z"
        fill="#828282"
      />
      <path
        d="M280.067 36.176C280.019 36.416 279.995 36.728 279.995 37.112C279.995 37.976 280.235 38.6 280.715 38.984C281.243 39.368 282.083 39.56 283.235 39.56H287.627L285.755 50H279.491C271.427 50 267.395 46.616 267.395 39.848C267.395 38.84 267.515 37.568 267.755 36.032L270.635 20.048H265.739L267.539 9.82398H272.435L274.163 0.0319824H286.475L284.747 9.82398H292.811L291.011 20.048H282.947L280.067 36.176Z"
        fill="#828282"
      />
    </svg>
  ),
  Loading: ({ width = 24, height = 24, ...props }: LucideProps) => (
    <span className="animate-spin-loading">
      <svg viewBox="22 22 44 44" width={width} height={height} {...props}>
        <circle
          cx="44"
          cy="44"
          r="20"
          fill="none"
          strokeWidth="3.5"
          strokeDasharray="80, 200"
          strokeDashoffset="0"
          stroke="currentColor"
          className="animate-circle-loading"
        />
      </svg>
    </span>
  ),
  Github: ({ width = 24, height = 24, ...props }: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" width={width} height={height} {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
};