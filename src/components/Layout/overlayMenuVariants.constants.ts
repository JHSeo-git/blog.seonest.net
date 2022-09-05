export const containerVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export const navVariants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const navItemVariants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: -200,
    opacity: 0,
  },
};
