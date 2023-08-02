import * as React from "react";
import { motion } from "framer-motion";
import { MenuItemvariants } from "components/shared/MenuItemVariants";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import HubIcon from "@mui/icons-material/Hub";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { variants } from "./styled";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "About me", path: "/about", icon: <PersonIcon /> },
  { name: "Project", path: "/project", icon: <BadgeIcon /> },
  { name: "Skills", path: "/skills", icon: <HubIcon /> },
  { name: "Contact", path: "/contact", icon: <ContactMailIcon /> },
];

export const Navigation = () => (
  <motion.ul className="mt-9" variants={variants}>
    {links.map((link, i) => (
      <NavLink key={i} to={link.path}>
        <motion.li
          variants={MenuItemvariants}
          whileTap={MenuItemvariants.tap}
          whileHover={MenuItemvariants.hover}
        >
          <div className="mr-5">{link.icon}</div>
          <div>{link.name}</div>
        </motion.li>
      </NavLink>
    ))}
  </motion.ul>
);

