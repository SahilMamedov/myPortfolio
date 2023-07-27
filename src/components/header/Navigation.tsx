import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const MenuItemvariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <motion.li
      variants={MenuItemvariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder">Icon</div>
      <div className="text-placeholder">About</div>
    </motion.li>
    <motion.li
      variants={MenuItemvariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder">Icon</div>
      <div className="text-placeholder">Skills</div>
    </motion.li>
    <motion.li
      variants={MenuItemvariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder">Icon</div>
      <div className="text-placeholder">Project</div>
    </motion.li>
  </motion.ul>
);