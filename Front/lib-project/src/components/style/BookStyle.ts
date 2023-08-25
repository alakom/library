import styled from "styled-components";
import editBookButton from '../data/icons/editBooks.png';
import editBookButton_ from '../data/icons/editBooksA.png';

export const DivBackground = styled.div`
width: 369px;
height: 251px;
border-radius: 5px;
background: #F8F8FA;
box-shadow: -1px 3px 5px 0px rgba(0, 0, 0, 0.25);
position: relative;
margin-left: 0px;
margin-top: 0px;
margin-right: 0px;
margin-bottom: 0px;
`;
export const ImgBook = styled.img`
width: 170px;
height: 258px;
flex-shrink: 0;
border-radius: 5px;
box-shadow: -1px 4px 4px 0px rgba(0, 0, 0, 0.15);
position: absolute;
  top: -25px;
  left: 15px;
  pointer-events: none;
  -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`;
export const HTitle = styled.h1`
color: #2E324F;
font-size: 18px;
font-family: Roboto;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
margin:5px;
`;
export const HGenre = styled.h4`
color: #5973BD;
font-size: 15px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
margin:5px;
`;
export const HAuthor = styled.h2`
color: #9FA4A7;
font-size: 16px;
font-family: Roboto;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
margin:5px;
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
width: 170px;
height: 250px;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
  top: 9px;
  left: 192px;
  right: 0px;
  bottom: 0px;
`;
export const Details = styled.button`
margin-bottom: 15px;
margin-top: 52px;
width: 155px;
height: 35px;
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
text-align: center;
box-shadow: -1px 2px 4px 0px rgba(0, 0, 0, 0.25);
&:hover {
    background-color: #2E324F;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }

  position: absolute;
  margin-top: 15px;
    top: 183px;
    margin-left: 14px;
    margin-right: 14px;
    left: 185px;
`;
export const EditBtn = styled.button`
position: absolute;
top: -30px;
left: 10px;

height: 35px;
width: 35px;
flex-shrink: 0;
background: url(${editBookButton});
background-size: cover;
border: 0;
margin: 10px;
&:hover {
    background: url(${editBookButton_});
    background-size: cover;
    border: 0;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
`;