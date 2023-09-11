import styled from "styled-components";
import Close from '../data/icons/closeB.png';
import Close_ from '../data/icons/closeS.png';

export const ButtonClose = styled.button`
position: absolute;

top: 10.5%;
left: 88.5%;

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
export const InputForm = styled.div`
width: 1500px;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
flex-shrink: 0;
border-radius: 5px;
background: #FFF;
box-shadow: -1px 4px 4px 0px rgba(0, 0, 0, 0.35);
`;