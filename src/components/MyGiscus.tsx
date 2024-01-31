'use client';

import type { GiscusProps } from '@giscus/react';
import * as React from 'react';

// TODO:
// remove this component when the issue is resolved.
// - https://github.com/giscus/giscus-component/issues/1976
export function MyGiscus({
  id,
  host,
  repo,
  repoId,
  category,
  categoryId,
  mapping,
  term,
  strict,
  reactionsEnabled,
  emitMetadata,
  inputPosition,
  theme,
  lang,
  loading,
}: GiscusProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (mounted) return;
    import('giscus');
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <giscus-widget
      id={id}
      host={host}
      repo={repo}
      repoid={repoId}
      category={category}
      categoryid={categoryId}
      mapping={mapping}
      term={term}
      strict={strict}
      reactionsenabled={reactionsEnabled}
      emitmetadata={emitMetadata}
      inputposition={inputPosition}
      theme={theme}
      lang={lang}
      loading={loading}
    />
  );
}
