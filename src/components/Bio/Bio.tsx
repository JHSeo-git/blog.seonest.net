import Image from 'next/image';

import appConfig from '@/app.config';

function Bio() {
  return (
    <div className="flex items-center">
      <Image
        src={appConfig.avatar}
        alt="Avatar"
        width={100}
        height={100}
        placeholder="empty"
        className="rounded-full bg-sky-100 dark:bg-sky-900"
      />
      <div className="ml-4">
        <p className="font-bold">
          <span className="py-1 px-2 bg-indigo-700 text-white dark:bg-indigo-500 dark:text-gray-300 rounded-md text-sm">
            {appConfig.author}
          </span>
        </p>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{appConfig.bio}</p>
        <div className="mt-1 flex items-center gap-2">
          <a
            href={`https://github.com/${appConfig.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-sm text-indigo-700 dark:text-indigo-500"
          >
            Github
          </a>
          <a
            href={`https://twitter.com/${appConfig.social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-sm text-indigo-700 dark:text-indigo-500"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bio;
