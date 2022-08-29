const fontSizes = {
  h1: '2.5rem',
  h2: '2rem',
  h3: '1.5rem',
  h4: '1.25rem',
  h5: '1rem',
  h6: '1rem',
  body: '1rem',
  base: '1rem',
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '2rem',
  '3xl': '2.5rem',
  '4xl': '3rem',
  '5xl': '4rem',
  '6xl': '5rem',
} as const;

const lineHeight = {
  body: 1.5,
  'body-loose': 1.75,
  heading: 1.5,
  'heading-tight': 1.25,
  'heading-normal': 1.5,
  'heading-loose': 2,
} as const;

const fontFamily = {
  base: 'Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  mono: 'Fira Mono, monospace',
  spicy: 'Jua, -apple-system, sans-serif',
} as const;

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

const typography = {
  fontSizes,
  fontFamily,
  fontWeights,
  lineHeight,
} as const;

export default typography;
