export const Default_Internal_Link_Offset = -100;
export const Default_Internal_Link_Duration = 500;

export const menuVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  },
  closed: {
    x: 1000,
    transition: {
      duration: 0.8,
      staggerDirection: -1
    }
  }
};

export const navlinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.25
    }
  }
};
