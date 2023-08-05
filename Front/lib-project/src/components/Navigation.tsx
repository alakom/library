import styled from "styled-components";
import log from './data/icons/log_name.png';
import { Tooltip } from 'antd';
import iconMyBook from './data/icons/MyBooks.png';
import iconMyBook_ from './data/icons/MyBooksA.png';
import iconSignIn from './data/icons/SignIn.png';
import iconSignIn_ from './data/icons/SignInA.png';
import iconSearch from './data/icons/Search.png';
import iconSearch_ from './data/icons/SearchA.png';

import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { openWindowSignIn } from "../store/userSlice";

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
align-items: center;
 justify-content: flex-end;
 background: #F8F8FA;
 margin-rignt: 5px;
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

const MyBook = styled.button`
height: 35px;
width: 35px;
flex-shrink: 0;
background: url(${iconMyBook});
background-size: cover;
border: 0;
margin: 5px;
&:hover {
    background: url(${iconMyBook_});
    background-size: cover;
    border: 0;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const SignIn = styled.button`
height: 30px;
width: 30px;
flex-shrink: 0;
background: url(${iconSignIn});
background-size: cover;
border: 0;
margin: 5px;
&:hover {
    background: url(${iconSignIn_});
    background-size: cover;
    border: 0;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Search = styled.button`
height: 20px;
width: 20px;
flex-shrink: 0;
background: url(${iconSearch});
background-size: cover;
border: 0;
margin: 10px;
&:hover {
    background: url(${iconSearch_});
    background-size: cover;
    border: 0;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
`;


export function Navigation(){
  const userAuthorization = useSelector((state: RootState) => state.user.authorization);
  const dispatch = useDispatch();
    return (
        
        <Nav>
            <DLeft>
                <Tooltip title="Search books">
                    <Search/>
                </Tooltip></DLeft>

            <DLogo>  
            <Logo src={log} alt="log"></Logo></DLogo>

            <DRight
            style={{gridTemplateColumns: userAuthorization?'55px 55px':'50px'}}
            >
               {userAuthorization && <Tooltip title="My books">
                    <MyBook/>
                </Tooltip>}
            
                <Tooltip title="Sign in">
                    <SignIn
                    onClick={()=>dispatch(openWindowSignIn())}/>
                </Tooltip></DRight>
        </Nav>
    );
}