const scaleZIndices = {
  $1: 10,
  $2: 20,
  $3: 30,
  $4: 40,
  $5: 50,
  $6: 60,
  $7: 70,
  $8: 80,
  $9: 90,
} as const;

const semanticZIndices = {
  fixed: scaleZIndices.$6,
  overlay: scaleZIndices.$7,
  modal: scaleZIndices.$8,
  alert: scaleZIndices.$9,
  max: 9999,
} as const;

const zIndices = {
  ...scaleZIndices,
  ...semanticZIndices,
} as const;

export default zIndices;
