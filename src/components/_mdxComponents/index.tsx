import type { MDXRemoteProps } from 'next-mdx-remote';

import Admonition from '../Admonition';
import SpicyText from '../SpicyText';
import Blockquote from './Blockquote';
import Code from './Code';
import Del from './Del';
import Heading from './Heading';
import Hr from './Hr';
import Image from './Image';
import List from './List';
import Paragraph from './Paragraph';
import Pre from './Pre';

const components: MDXRemoteProps['components'] = {
  // style override
  h1: (props) => <Heading {...props} as="h1" />,
  h2: (props) => <Heading {...props} as="h2" />,
  h3: (props) => <Heading {...props} as="h3" />,
  h4: (props) => <Heading {...props} as="h4" />,
  h5: (props) => <Heading {...props} as="h5" />,
  h6: (props) => <Heading {...props} as="h6" />,
  p: (props) => <Paragraph {...props} />,
  del: (props) => <Del {...props} />,

  blockquote: (props) => <Blockquote {...props} />,
  code: (props) => <Code {...props} />,
  pre: (props) => <Pre {...props} />,

  ul: (props) => <List listType="ul" {...props} />,
  ol: (props) => <List listType="ol" {...props} />,
  li: (props) => <List.Item {...props} />,

  hr: (props) => <Hr {...props} />,
  img: (props) => <Image alt={props.alt} {...props} />,

  // custom
  SpicyText,
  Admonition,
};

export default components;
