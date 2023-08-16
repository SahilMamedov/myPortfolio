import styled, { keyframes,css } from "styled-components";
interface Props {
    bordercolor?: string;
    rotate?:boolean;
}
const spinAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
`;
export const SkilsTitle=styled.h1`
position: absolute;
top:20px;
display: flex;
justify-content: center;
width: 100%;
/* padding-bottom: 80px; */
color: white;
font-size: 28px;
`
export const Wrapper = styled.div`
    overflow: hidden;
    /* height: 747px; */
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 320px) {
    
        width: 320px;
      }
    @media only screen and (max-width: 425px) {
        
  }
`;

export const Container = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
   
   
`;
export const SkillContainer = styled.section<Props>`
    /* position: absolute; */
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    ${({ rotate }) =>
        rotate &&
        css`
        z-index: -1;
            animation: ${spinAnimation} 8s linear infinite;
        `}
   
`;

export const JavascriptImg=styled.img`
    position: absolute;
    cursor: pointer;
    border: 3px solid rgb(108,161,197);
    border-radius: 50%;
    width: 300px;
    height: 300px;
    @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 425px) {
    width: 160px;
    height: 160px;
  }
  @media only screen and (max-width: 425px) {
    width: 150px;
    height: 150px;
  }
`


export const SkillItem=styled.img<Props>`
    position: absolute;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: transparent;
    border: 10px solid ${(props) => props.bordercolor};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2 ease;
    padding: 6px;
    @media only screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
  @media only screen and (max-width: 425px) {
    border: 5px solid ${(props) => props.bordercolor};
    width: 60px;
    height: 60px;
  }
  @media only screen and (max-width: 425px) {
    width: 50px;
    height: 50px;
  }


    &:nth-child(1) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(110%, -210%);
    }
    &:nth-child(2) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(210%, -120%);
    }
    &:nth-child(3) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(240%);
    }
    &:nth-child(4) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(210%,120%);
    }
    &:nth-child(5) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(110%,210%);
    }
    &:nth-child(6) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(-20%,240%);
    }
    &:nth-child(7) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(-240%,-10%);
    }
    &:nth-child(8) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(-200%,-130%); 
    }
    &:nth-child(9) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(-120%,-210%);
    }
      
    &:nth-child(10) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(-0%,-240%);
    }
    &:nth-child(11) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(-140%,200%);
    }
    &:nth-child(12) {
    background-size: cover;
    background-position: center;
    position: absolute;
    transform: translate(-220%,110%);
    }
`
