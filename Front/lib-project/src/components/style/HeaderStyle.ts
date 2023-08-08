import styled from "styled-components";
import iconMyBook from '../data/icons/MyBooks.png';
import iconMyBook_ from '../data/icons/MyBooksA.png';
import iconSignIn from '../data/icons/SignIn.png';
import iconSignIn_ from '../data/icons/SignInA.png';
import iconSearch from '../data/icons/Search.png';
import iconSearch_ from '../data/icons/SearchA.png';

export const Nav = styled.nav`
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
export const DRight = styled.div`
display: grid;
align-items: center;
 justify-content: flex-end;
 background: #F8F8FA;
 margin-rignt: 5px;
`;
export const DLeft = styled.div`
display: grid;
align-items: center;
justify-content: center;
margin-left;
background: #F8F8FA;
`;
export const DLogo = styled.div`
display: grid;
align-items: center;
justify-content: center;
background: #F8F8FA;
`;

export const Logo=styled.img`
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

export const ButtonMyBook = styled.button`
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

export const ButtonSignIn = styled.button`
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

export const ButtonSearch = styled.button`
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

