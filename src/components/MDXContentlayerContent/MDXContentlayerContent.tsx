import { useMDXComponent } from 'next-contentlayer/hooks';

import { components } from '@/components/_mdxComponents';

interface MDXContentlayerContentProps {
  code: string;
}

function MDXContentlayerContent({ code }: MDXContentlayerContentProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}

export default MDXContentlayerContent;
