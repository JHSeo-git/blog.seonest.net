import type { MDXRemoteProps } from 'next-mdx-remote';

import Admonition from '../Admonition';
import SpicyText from '../SpicyText';
import Code from './Code';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Pre from './Pre';

const components: MDXRemoteProps['components'] = {
  // style override
  h1: (props) => <Heading {...props} as="h1" />,
  p: (props) => <Paragraph {...props} />,
  code: (props) => <Code {...props} />,
  pre: (props) => <Pre {...props} />,

  // custom
  SpicyText,
  Admonition,
};

export default components;
