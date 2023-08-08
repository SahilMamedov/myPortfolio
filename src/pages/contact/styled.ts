import styled from "styled-components";

export const Wrapper=styled.div`
padding: 0px 16px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`
export const ContaxtTitle=styled.h1`
color:#85a8bd;
font-size: 28px;
margin-bottom: 12px;

`
export const StyledTextField = styled.div`
input {
  color: yellow;
  background-color: #85a8bd;
  border-radius: 8px;
}
`;
export const TextFieldMessage={
  backgroundColor:'#85a8bd',
  borderRadius:'8px',
  color:'yellow'
}
export const SendButtonBox=styled.button`
display: flex;
width: 100%;
justify-content: center;
margin: 20px 0px;
`

export const SendButton=styled.button`
color: black;
text-align: center;
padding: 10px 60px;
border-radius: 10px;
background-color: #85a8bd;


`