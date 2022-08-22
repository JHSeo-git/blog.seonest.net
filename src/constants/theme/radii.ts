const scaleRadii = {
  $1: '4px',
  $2: '6px',
  $3: '8px',
  $4: '12px',
  $5: '16px',
} as const;

const semanticRadii = {
  base: scaleRadii.$2,
  sm: scaleRadii.$1,
  md: scaleRadii.$2,
  lg: scaleRadii.$3,
  xl: scaleRadii.$4,
  '2xl': scaleRadii.$5,
  round: '50%',
  pill: '9999px',
} as const;

const radii = {
  ...scaleRadii,
  ...semanticRadii,
} as const;

export default radii;
