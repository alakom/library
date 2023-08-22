import styled from "styled-components";
import { Tooltip } from 'antd';
import backgroundWindow from './data/icons/SignInWindow.jpg';
import Close from './data/icons/closeB.png';
import Close_ from './data/icons/closeS.png';
import { useDispatch } from 'react-redux';
import { openWindowCreateAccount} from '../store/userSlice';

const BackgroundForm = styled.form`
display: flex;
 justify-content: center;
 flex-flow: row wrap;
 width: 40%;
 height: 80%;
 min-width: 500px;
 min-height: 500px;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
border-radius: 5px;
background: url(${backgroundWindow}), lightgray 50% / cover no-repeat;
background-size: cover;
box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);

position: relative;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 0px;
`;

const ButtonClose = styled.button`
position: absolute;

top: 0.5%;
left: 94%;

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

const InputForm = styled.div`
width: 80%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
flex-shrink: 0;
border-radius: 5px;
background: #FFF;
box-shadow: -1px 4px 4px 0px rgba(0, 0, 0, 0.35);
`;

const H1 = styled.h1`
color: #8D93C7;
font-family: Montserrat Alternates;
font-size: 190%;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0px;
`;
const H2 = styled.h2`
color: #2E324F;
font-family: Roboto;
font-size: 180%;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0px;
margin-top:-20px;
`;
const H6 = styled.h6`
color: #2E324F;
font-family: Roboto;
font-size: 100%;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 0px;
`;
const Input = styled.input`
border-radius: 3px;
border: 2.5px solid #5973BD;
background: #FFF;
width: 80%;
height: 5%;
font-family: Roboto;
font-style: normal;
padding:2px;
  `;
const DivInput = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: flex-start;
width: 82%;
margin-bottom:-20px;
padding:0;
`;
const ButtonSignIn = styled.button`
width: 75%;
height: 9%;
border-radius: 50px;
background: #5973BD;
box-shadow: -1px 4px 4px 0px rgba(0, 0, 0, 0.25);
justify-content: center;
align-items: center;
color: #F8F8FA;
font-family: Roboto;
font-size: 110%;
font-style: normal;
font-weight: 500;
line-height: normal;
border:0;
cursor: pointer;
&:hover {
    background-color: #2E324F;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
`;
export default function SignIn(){
    const dispatch = useDispatch();
    return(
    <BackgroundForm>
        <InputForm>
            <H1>Create</H1>
            <H2>your Library Account</H2>

            <DivInput>
                <H6>Enter your email</H6>
            </DivInput>
            <Input placeholder="MyName@library.com"></Input>

            <DivInput>
                <H6>Enter your username</H6>
            </DivInput>
            <Input placeholder="alalkom"></Input>

            <DivInput>
                <H6>Enter the password</H6>
            </DivInput>
            <Input placeholder="MyPassword"></Input>

            <DivInput>
                <H6>Enter the password again</H6>
            </DivInput>
            <Input placeholder="MyPassword"></Input>

            <ButtonSignIn>
                Create an account    
            </ButtonSignIn>

        </InputForm>
        <Tooltip title="Close the window">
            <ButtonClose onClick={()=>dispatch(openWindowCreateAccount())}/>
        </Tooltip>
    </BackgroundForm>
    );
}