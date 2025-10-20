import { Variants } from "framer-motion";


//  Animation for parent container for Hero section only
  export const containerHero = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 1,  }
  },
};

//  Animation for parent container 
  export const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1,  }
  },
};


//  Animation for children 
export const child: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)", y: 40 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

//  Animation for children for project cards on home page
export const childProjects: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
    transformOrigin: "bottom",
  },
  show: {
    scaleY: 1,
    opacity: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 0.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

//AboutMe image fade up
export const imageChild: Variants = {
  hidden: { opacity: 0, filter: "blur(4px)", y: 120 },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};