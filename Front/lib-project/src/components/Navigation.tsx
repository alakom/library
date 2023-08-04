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
height: 45px;
flex-shrink: 0;
border-bottom: 3px solid #F1F1F2;
background: #F8F8FA;
margin-top:0px;
position: sticky;
top: 0px;
z-index:1;
`;
const DRight = styled.div`
display: grid;
grid-template-columns: 50px 50px;
align-items: center;
 justify-content: center;
 background: #F8F8FA;

`;
const DLeft = styled.div`
display: grid;
align-items: center;
justify-content: center;
margin-left;
background: #F8F8FA;
`;
const DLogo = styled.div`
display: grid;
align-items: center;
justify-content: center;
background: #F8F8FA;
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
export function Navigation(){
    return (
        
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
    );
}