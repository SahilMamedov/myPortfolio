import React, { useState } from "react";
import js from "../../assest/image/js.png";

import {
  SkillItem,
  Wrapper,
  Container,
  SkillContainer,
  JavascriptImg,
  SkilsTitle,
} from "./styled";
import { SkillImages } from "components/SkillsImages";
import Tooltip from "@mui/material/Tooltip";
const Skills = () => {
  const [rotate, setRotate] = useState(true);

  return (
    <div className="h-screen ">
      <SkilsTitle>
        <div>My Skills</div>
      </SkilsTitle>
      <Wrapper>
        <Container>
          <SkillContainer rotate={rotate}>
            {SkillImages.map((img) => (
              <Tooltip placement="top" title={rotate ? "" : `${img.tooltip}`}>
                <SkillItem
                  key={img.src}
                  bordercolor={img.borderColor}
                  alt=""
                  src={img.src}
                />
              </Tooltip>
            ))}
          </SkillContainer>
          <Tooltip placement="top" title={rotate ? "" : "Javascript"}>
            <JavascriptImg onClick={() => setRotate(!rotate)} src={js} alt="" />
          </Tooltip>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Skills;
