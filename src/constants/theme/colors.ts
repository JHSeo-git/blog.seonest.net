import { blue, gray, green, indigo, pink, red, sky, teal, yellow } from '@radix-ui/colors';

const scaleColors = {
  ...gray,
  ...blue,
  ...green,
  ...indigo,
  ...sky,
  ...red,
  ...teal,
  ...yellow,
  ...pink,
  white: '#FFFFFF',
  black: '#000000',
} as const;

/**
 * 스케일에 대한 이해
 * @see https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
 */
const semanticColors = {
  primary200: scaleColors.indigo2,
  primary300: scaleColors.indigo3,
  primary500: scaleColors.indigo5,
  primary900: scaleColors.indigo9,

  secondary900: scaleColors.pink9,
  teritary900: scaleColors.teal9,

  info: scaleColors.blue9,
  success: scaleColors.green9,
  warning: scaleColors.yellow9,
  error: scaleColors.red9,

  text: scaleColors.gray12,
  loContrast: scaleColors.white,
  hiContrast: scaleColors.gray12,

  /**
   * 'borderColor' designed for subtle borders on components which are not interactive. For example sidebars, headers, cards, alerts, and separators.
   */
  borderColor: scaleColors.gray6,
  /**
   * 'borderColorActive' is designed for borders on interactive components, but can also be used for focus rings.
   */
  borderColorActive: scaleColors.gray7,
  /**
   * 'borderColorHover' is designed for borders on interactive components in their hover state.
   */
  borderColorHover: scaleColors.gray8,
} as const;

const colors = {
  ...scaleColors,
  ...semanticColors,
} as const;

export default colors;
