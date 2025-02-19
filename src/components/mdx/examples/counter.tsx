"use client"

import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button
      className="dark:color-white rounded-lg bg-purple-700 px-2 py-1 font-sans font-semibold text-white focus:ring active:bg-purple-600"
      onClick={() => setCount(count + 1)}
    >
      당신은 {count}번 클릭했습니다.
    </button>
  )
}

export { Counter }
