function RootNotFound() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
      <div className="px-4">
        <h1 className="text-5xl font-bold leading-tight">Not Found</h1>
        <h2 className="mt-2 text-2xl leading-tight">Sorry, there is nothing page.</h2>
        <div className="h-14" />
        <a href="/" className="text-xl font-bold text-indigo-700 dark:text-indigo-500">
          Go to home
        </a>
      </div>
    </div>
  )
}

export default RootNotFound
