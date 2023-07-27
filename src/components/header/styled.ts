import { motion } from "framer-motion";
import styled from "styled-components";


export const Header=styled.div`
 color: gold;
  width: 250px;
  @media only screen and (max-width: 426px) {
    display: none;
    }
`
export const StyledHeader=motion(Header)



export const StyledNavbarWrapper=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 230px;
  background-color: #101a27;
`
export const NavbarWrapper=motion(StyledNavbarWrapper)



export const Img=styled.img`
width: 130px;
height: 130px;
border-radius: 50%;
border: 10px solid #2c2f3f;
`
export const StyledImg=motion(Img)












export const AvatarBox=styled.div`
display: flex;
justify-content: center;
margin: 12px 0px;
`
export const NavbarBox=styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
padding: 25px;
`