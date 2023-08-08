import styled from "styled-components";

export const Tab = styled.button`
color: #9FA4A7;
font-size: 18px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
line-height: normal;
background: #F8F8FA;
padding-bottom: 8px;

 cursor: pointer;
 opacity: 0.6;
 border: 0;
 outline: 0;
 &:hover {
  color: #5973BD;
}
  ${({active}) =>
  active &&
    `
    color: #5973BD;
    border-bottom: 2px solid #5973BD;
    opacity: 1;
  `}
`;

export const TabGroup = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 flex-flow: row wrap;
 gap: 30px;
`;