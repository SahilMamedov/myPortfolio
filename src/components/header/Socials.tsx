import React from "react";
import {
  IconStyle,
  SocialBox,
  SocialIconHover,
  SocialIconTansition,
  SocialItem,
  variants,
} from "./styled";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";
import { MenuItemvariants } from "components/shared/MenuItemVariants";
import ReactWhatsapp from "react-whatsapp";
const Socials = () => {
  return (
    <SocialBox variants={variants}>
      <NavLink to="https://www.facebook.com/sahil.memmedov.37" target="_blank">
        <SocialItem
          whileHover={SocialIconHover}
          transition={SocialIconTansition}
          variants={MenuItemvariants}
        >
          <FacebookOutlinedIcon style={IconStyle} />
        </SocialItem>
      </NavLink>

      <NavLink
        to="https://www.linkedin.com/in/sahil-mamedov-084789255/"
        target="_blank"
      >
        <SocialItem
          whileHover={SocialIconHover}
          transition={SocialIconTansition}
          variants={MenuItemvariants}
        >
          <LinkedInIcon style={IconStyle} />
        </SocialItem>
      </NavLink>

      <SocialItem
        whileHover={SocialIconHover}
        transition={SocialIconTansition}
        variants={MenuItemvariants}
      >
        <ReactWhatsapp
          element="webview"
          number="+994 504055044"
          message="Mene yaz"
          style={{ display: "flex" }}
        >
          <WhatsAppIcon style={IconStyle} />
        </ReactWhatsapp>
      </SocialItem>
      <NavLink to="https://github.com/SahilMamedov" target="_blank">
        <SocialItem
          whileHover={SocialIconHover}
          transition={SocialIconTansition}
          variants={MenuItemvariants}
        >
          <GitHubIcon style={IconStyle} />
        </SocialItem>
      </NavLink>
    </SocialBox>
  );
};

export default Socials;
