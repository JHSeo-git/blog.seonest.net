const scaleSpaces = {
  $1: '4px',
  $2: '8px',
  $3: '12px',
  $4: '16px',
  $5: '20px',
  $6: '24px',
  $7: '28px',
  $8: '32px',
  $9: '36px',
  $10: '40px',
  $11: '48px',
  $12: '56px',
  $13: '64px',
  $14: '72px',
} as const;

const semanticSpaces = {
  px: '1px',
  base: scaleSpaces.$2,
  sm: scaleSpaces.$1,
  md: scaleSpaces.$2,
  lg: scaleSpaces.$3,
  xl: scaleSpaces.$4,
  '2xl': scaleSpaces.$5,
  pagePadding: scaleSpaces.$5,
} as const;

const spaces = {
  ...scaleSpaces,
  ...semanticSpaces,
} as const;

export default spaces;
