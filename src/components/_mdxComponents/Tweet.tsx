import { NextTweet } from 'next-tweet';

interface TweetProps {
  id: string;
}

export default function Tweet({ id }: TweetProps) {
  return (
    <div className="mb-6 flex justify-center">
      {/* @ts-ignore: Async components are valid in the app directory */}
      <NextTweet id={id} />
    </div>
  );
}
