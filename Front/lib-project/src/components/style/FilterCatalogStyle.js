import styled from "styled-components";
import ASort from '../data/icons/Ascending.png';
import ASort_ from '../data/icons/AscendingA.png';
import DSort from '../data/icons/Descending.png';
import DSort_ from '../data/icons/DescendingA.png';
import addBook from '../data/icons/addBooks.png';
import addBook_ from '../data/icons/addBooksA.png';


export const Filter = styled.div`
margin-top: 4px;
background: #FFF;
display: grid;
grid-template-columns: 50px 50px 50px;
align-items: center;
 justify-content: flex-end;
`;

export const AddBook = styled.button`
height: 20px;
width: 20px;
flex-shrink: 0;
background: url(${addBook});
background-size: cover;
border: 0;
margin: 10px;
&:hover {
    background: url(${addBook_});
    background-size: cover;
    border: 0;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const SortA = styled.button`
height: 20px;
width: 20px;
flex-shrink: 0;
background: url(${ASort});
background-size: cover;
border: 0;
margin: 10px;
&:hover {
    background: url(${ASort_});
    background-size: cover;
    border: 0;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
  ${({active}) =>
  active &&
    `
    background: url(${ASort_});
    background-size: cover;
    border: 0;
  `}

`;
export const SortD = styled.button`
height: 20px;
width: 20px;
flex-shrink: 0;
background: url(${DSort});
background-size: cover;
border: 0;
margin: 10px;
&:hover {
    background: url(${DSort_});
    background-size: cover;
    border: 0;
  }
  &:disabled {
    cursor: pointer;
    opacity: 0.7;
  }
  ${({active}) =>
  active &&
    `
    background: url(${DSort_});
    background-size: cover;
    border: 0;
  `}
`;