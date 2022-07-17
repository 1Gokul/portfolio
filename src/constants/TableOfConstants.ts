export const tocVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.35,
      staggerChildren: 0.1
    }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.35,
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

export const headingLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25
    }
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.25
    }
  }
};
