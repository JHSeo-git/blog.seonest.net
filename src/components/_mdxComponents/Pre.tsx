import styled from 'styled-components';

import { breakpoints, typography } from '@/constants/theme';

export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string;
}

function Pre({ ...rest }: PreProps) {
  return (
    <PreWrapper>
      <StyledPre {...rest} />
    </PreWrapper>
  );
}

const PreWrapper = styled.div`
  position: relative;

  // <Container /> padding 만큼 negative
  margin-left: -16px;
  margin-right: -16px;

  @media (min-width: ${breakpoints.sm}) {
    margin-left: -32px;
    margin-right: -32px;
  }
`;

const StyledPre = styled.pre`
  padding: 2.5em 1.25em;
  margin: 1em 0;
  overflow: auto;
  background: #2b2b2b;

  code {
    font-family: ${typography.fontFamily.mono};
    font-size: ${typography.fontSizes.sm};
    font-weight: ${typography.fontWeights.medium};

    color: #f8f8f2;
    background: none;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    // Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
    // 1. Make the element just wide enough to fit its content.
    // 2. Always fill the visible space in .code-highlight.
    --code-line-inset: 16px;

    .code-highlight {
      float: left; /* 1 */
      min-width: 100%; /* 2 */
    }

    .code-line {
      display: block;
      padding-left: var(--code-line-inset);
      padding-right: var(--code-line-inset);
      margin-left: calc(var(--code-line-inset) * -1);
      margin-right: calc(var(--code-line-inset) * -1);
      border-left: 4px solid rgba(0, 0, 0, 0); /* Set placeholder for highlight accent border color to transparent */
    }

    .code-line.inserted {
      background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */
    }

    .code-line.deleted {
      background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
    }

    .highlight-line {
      margin-left: calc(var(--code-line-inset) * -1);
      margin-right: calc(var(--code-line-inset) * -1);
      background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */
      border-left: 4px solid rgb(59, 130, 246); /* Set highlight accent border color */
    }

    .line-number::before {
      display: inline-block;
      width: 1rem;
      text-align: right;
      margin-right: var(--code-line-inset);
      margin-left: calc(var(--code-line-inset) * -0.5);
      color: rgb(156, 163, 175); /* Line number color */
      content: attr(line);
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #d4d0ab;
    }

    .token.punctuation {
      color: #fefefe;
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #ffa07a;
    }

    .token.boolean,
    .token.number {
      color: #00e0e0;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #abe338;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
      color: #00e0e0;
    }

    .token.atrule,
    .token.attr-value,
    .token.function {
      color: #ffd700;
    }

    .token.keyword {
      color: #00e0e0;
    }

    .token.regex,
    .token.important {
      color: #ffd700;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }

    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
  }
`;

export default Pre;
