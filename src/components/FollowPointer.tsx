import "../App.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../hook/use-follow-pointer";

export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="w-5 h-5 rounded-full bg-sky-500 "
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        restDelta: 0.001,
      }}
    />
  );
}
