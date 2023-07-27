
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "hook/use-follow-pointer";
import { styled } from "styled-components";

const FollowPointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const Box = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: red;
  `;
  const StyledBox = motion(Box);

  return (
    <StyledBox
      ref={ref}
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
};
export default FollowPointer;
