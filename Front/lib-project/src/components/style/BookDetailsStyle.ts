import styled from "styled-components";
import Close from '../data/icons/close.png'
import Close_ from '../data/icons/closeB.png';

export const DivForm = styled.form`
display: grid;
grid-template-columns: 1fr 1fr 30px;
grid-gap: 5px;
 justify-content: center;
 flex-flow: row wrap;
 width: 800px;
 height: 600px;
flex-shrink: 0;
border-radius: 5px;
background: #F8F8FA;
box-shadow: -1px 3px 4px 0px rgba(0, 0, 0, 0.25);;
margin-top:0px;
position: relative;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 0px;
`;
export const ButtonClose = styled.button`
position: sticky;
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
export const ImgBook = styled.img`
vertical-align: top;
display: block;
box-sizing: border-box;
max-height: 100%;
border-radius: 5px 0px 0px 5px;
pointer-events: none;
background-size: cover;
-webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;
export const DivBook = styled.div`
margin: 0px;
height: 600px;
width: auto;
background-position:top center;
background-repeat:no-repeat; 
position: sticky;
border-radius: 5px 0px 0px 5px;
padding: 0px;
border: 0px;
top:0px;
left:0px;

-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
`;
export const HTitle = styled.div`
color: #2E324F;
font-size: 20px;
font-family: Roboto;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
margin:10px;
margin-bottom: 5px;
`;
export const HGenre = styled.h4`
color: #5973BD;
font-size: 20px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
margin:5px;
align-items: center;
`;
export const HAuthor = styled.div`
color: #9FA4A7;
font-size: 20px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
align-items: center;
`;
export const HRate = styled.h3`
color: #8D93C7;
font-size: 20px;
font-family: Roboto;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
margin:5px;
`;
export const InfBook=styled.div`
position: sticky;
height: 100%;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:20px;
`;
export const HDescription = styled.h3`
display: flex;
color: #2E324F;
font-size: 15px;
font-family: Roboto;
font-style: normal;
font-weight: 400;
line-height: normal;
align-items: center;
margin:1px;
margin-left:20px;
margin-bottom:10px;
justify-content: center;  
`;
export const DivButton=styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: center;
margin: 0px;
border:0px;
flex-shrink: 0;
`;