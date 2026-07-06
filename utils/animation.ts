import { Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                  Durations                                 */
/* -------------------------------------------------------------------------- */

export const duration = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
};

/* -------------------------------------------------------------------------- */
/*                                   Easing                                   */
/* -------------------------------------------------------------------------- */

export const ease = [0.25, 0.1, 0.25, 1] as const;

/* -------------------------------------------------------------------------- */
/*                                Fade Animations                             */
/* -------------------------------------------------------------------------- */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.normal,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease,
    },
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease,
    },
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.normal,
      ease,
    },
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.normal,
      ease,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Zoom                                      */
/* -------------------------------------------------------------------------- */

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.normal,
      ease,
    },
  },
};

export const zoomOut: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.normal,
      ease,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Rotate                                    */
/* -------------------------------------------------------------------------- */

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Stagger Container                             */
/* -------------------------------------------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                Scale Hover                                 */
/* -------------------------------------------------------------------------- */

export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.25,
    },
  },
  whileTap: {
    scale: 0.97,
  },
};

/* -------------------------------------------------------------------------- */
/*                              Floating Effect                               */
/* -------------------------------------------------------------------------- */

export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Pulse Effect                                 */
/* -------------------------------------------------------------------------- */

export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                Page Transition                             */
/* -------------------------------------------------------------------------- */

export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.4,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Reveal Section                                */
/* -------------------------------------------------------------------------- */

export const revealSection = {
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
    amount: 0.2,
  },
};

/* -------------------------------------------------------------------------- */
/*                                Text Reveal                                 */
/* -------------------------------------------------------------------------- */

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
    },
  }),
};