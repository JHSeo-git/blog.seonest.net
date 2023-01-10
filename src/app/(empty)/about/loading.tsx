import { LoadingIcon } from '@/components/_icons';

function AboutPageLoading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-indigo-700 dark:text-indigo-300">
      <LoadingIcon />
    </div>
  );
}

export default AboutPageLoading;
