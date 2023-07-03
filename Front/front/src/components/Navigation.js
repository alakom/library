import React, { useRef, useLayoutEffect }  from 'react';
import styled from "styled-components";
import log from './data/icons/log_name.png';
import { Button, Tooltip } from 'antd';
import {UserOutlined,BookOutlined,SearchOutlined} from '@ant-design/icons';

const Nav = styled.nav`
display: grid;
grid-template-columns: 50px 10fr 100px;
grid-gap: 45px;
 align-items: center;
 justify-content: center;
 flex-flow: row wrap;
height: 40px;
flex-shrink: 0;
border-bottom: 3px solid #F1F1F2;
background: #F8F8FA;
`;
const DRight = styled.div`
display: grid;
grid-template-columns: 50px 50px;
align-items: center;
 justify-content: center;

`;
const DLeft = styled.div`
display: grid;
align-items: center;
justify-content: center;
margin-left;
`;
const DLogo = styled.div`
display: grid;
align-items: center;
justify-content: center;
`;

const Logo=styled.img`
display: inline-block;
width: 163px;
height: 34px;
pointer-events: none;
  -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`;
const ButtonSign = styled.button`
justify-content: center;
align-items: center;
border: 0px;
text-align: center;
height: 28px;
width: 40px;
padding-top: 0px;
padding-left: 0px;
padding-right: 0px;
icon: ./data/icons/sign_in.png;
&:hover {
    icon: ./data/icons/hover_sign.png;
  }
`;
const Icon = styled.img`
width: 41px;
height: 28px;
  -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    &:hover {
        icon = ./data/icons/hover_sign.png;
      }
`;
function clickMe() {
    alert("You clicked me!");
  };
export function Navigation(){
    return (
        <>
        <Nav>
            <DLeft>
                <Tooltip title="Search books">
                    <Button
                    icon ={<SearchOutlined />}
                    shape="circle"
                    type="text"
                    size="large"/>
                </Tooltip></DLeft>

            <DLogo>  
            <Logo src={log} alt="log"></Logo></DLogo>

            <DRight>
                <Tooltip title="My books">
                    <Button
                    icon ={<BookOutlined />}
                    shape="circle"
                    type="text"
                    size="large"/>
                </Tooltip>
            
                <Tooltip title="Sign in">
                    <Button
                    icon ={<UserOutlined />}
                    shape="circle"
                    type="text"
                    size="large"/>
                </Tooltip></DRight>
        </Nav>
        </>
    );
}