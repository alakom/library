import { styled } from "styled-components";
import Close from '../data/icons/close.png';
import Close_ from '../data/icons/closeB.png';

export const InputForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
 align-items: center;

flex-shrink: 0;
 flex-flow: row wrap;
 width: 40%;
 height: 60%;
 min-width: 500px;
 min-height: 500px;
border-radius: 5px;
background: #F8F8FA;
box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);
position: relative;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding:30px;
`;

export const ButtonClose = styled.button`
position: absolute;

top: 0.5%;
left: 95.5%;

height: 20px;
width: 20px;
flex-shrink: 0;
background: url(${Close});
background-size: cover;
border: 0;
margin: 5px;
&:hover {
    background: url(${Close_});
    background-size: cover;
    border: 0;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
`;
export const Input = styled.input`
border-radius: 3px;
border: 2.5px solid #5973BD;
background: #FFF;
width: 100%;
height: 20%;
font-family: Roboto;
font-style: normal;
padding:2px;
`;

export const TextArea = styled.textarea`
border-radius: 3px;
border: 2.5px solid #5973BD;
background: #FFF;
width: 100%;
height: 50%;
resize: none;
font-family: Roboto;
font-style: normal;
padding:2px;
margin:0;
`;

export const DivInput = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: flex-start;
width: 82%;
margin-bottom:-20px;
padding:0;
`;
export const H1 = styled.h1`
color: #8D93C7;
font-family: Montserrat Alternates;
font-size: 190%;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0px;
`;
export const H6 = styled.h6`
color: #2E324F;
font-family: Roboto;
font-size: 100%;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0px;
`;

export const BtnAdd = styled.button`
margin-bottom: 15px;
margin-top: 52px;
width: 30%;
height: 10%;
padding: 10px;
justify-content: center;
align-items: center;
border-radius: 3px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
line-height: normal;
cursor: pointer;
background-color: #5973BD;
color: #F8F8FA;
border: 0px;
margin:0px;
text-align: center;
box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.25);
&:hover {
    background-color: #2E324F;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
`;