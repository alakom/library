import React from 'react';
import styled from "styled-components";
import log from './data/icons/log_name.png';
import sign from './data/icons/sign_in.png';

const Nav = styled.nav`
display: flex;
 align-items: center;
 justify-content: space-around;
 flex-flow: row wrap;
height: 40px;
flex-shrink: 0;
border-bottom: 3px solid #F1F1F2;
background: #F8F8FA;
`;
const Logo=styled.img`
width: 163px;
height: 34px;
`;
const Button = styled.button`
justify-content: center;
align-items: center;
border: 0px;
text-align: center;
height: 28px;
width: 40px;
padding-top: 0px;
padding-left: 0px;
padding-right: 0px;
`;
const Icon = styled.img`
width: 41px;
height: 28px;
`;
function clickMe() {
    alert("You clicked me!");
  };
export function Navigation(){
    return (
        <Nav>
            <Logo src={log} alt="log"></Logo>
            <Button><Icon src={sign} alt="my image" onClick={clickMe} /></Button>
        </Nav>
    );
}