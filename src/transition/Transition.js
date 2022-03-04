/** @format */

import React from "react";
import "./Transition.css";
import { TransAnimation } from "../animation/Animation";
import { motion } from "framer-motion";

const Transition = () => {
  return (
    <motion.div
      className="transition"
      variants={TransAnimation}
      initial="hidden"
      animate="show"
      exit="hide"
      transition={{ duration: 1.8 }}></motion.div>
  );
};

export default Transition;
