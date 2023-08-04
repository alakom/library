import React, { useEffect, useState} from 'react';
import styled from "styled-components";
import {Book} from "./Book";
import { books } from './data/Books';
import { genres } from './data/Genres';
import {Tooltip } from 'antd';
import ASort from './data/icons/Ascending.png';
import ASort_ from './data/icons/AscendingA.png';
import DSort from './data/icons/Descending.png';
import DSort_ from './data/icons/DescendingA.png';



const GalleryBooks=styled.div`
    display: flex;
    grid-gap: 45px;
    border-top: 40px solid #FFF;
    border-right: 40px solid #FFF;
    border-left: 40px solid #FFF;
    margin-top: 50px;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
    background: #FFF;
    margin-top: 0px;
`;

const Tab = styled.button`
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

const ButtonGroup = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 flex-flow: row wrap;
 gap: 30px;
`;
const Filter = styled.div`
margin-top: 4px;
background: #FFF;
display: grid;
grid-template-columns: 50px 50px;
align-items: center;
 justify-content: flex-end;
`;
const SortA = styled.button`
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
const SortD = styled.button`
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

export function Catalog(){
  const [active, setActive] = useState(genres[0].title);
  const [catalog,setCatalog]= useState(books);
  const [sortBook,setSort]=useState([false,false]);
  const booksClone = Array.from(books);

  const aSorting = ()=>{
    if (sortBook[0]===true){
      setCatalog((catalog)=>booksClone);
      setSort((sortBook)=>[false,false]);
    }
    else
    {
      setCatalog((catalog)=>booksClone.sort((prev, next) => next.rating.avgRate - prev.rating.avgRate).filter(book=>active==="All genres"?book:book.genre===active));
      setSort((sortBook)=>[true,false]);
  }
  }

  const dSorting=()=>{
    if (sortBook[1]===true){
      setCatalog((catalog)=>booksClone);
      setSort((sortBook)=>[false,false]);
    }
    else
    {
      setCatalog((catalog)=>booksClone.sort((prev, next) => prev.rating.avgRate - next.rating.avgRate).filter(book=>active==="All genres"?book:book.genre===active));
      setSort((sortBook)=>[false,true])
    }
  }
  return (
      <>

<ButtonGroup>
        {genres.map(genre => (
          <Tab
          key={genre.title}
          active={+(active === genre.title)}
          onClick={() =>
            {
            setActive(genre.title);
            setCatalog((catalog)=>books);
            setSort((sortBook)=>[false,false]);
          }}
          >
            {genre.title}
          </Tab>
        ))}
      </ButtonGroup>


      <Filter>
        
      <Tooltip title="Ascending sort">
          <SortA onClick={aSorting}
          active={+sortBook[0]}
          />
      </Tooltip>
            
      <Tooltip title="Descending sort">
        <SortD 
        onClick={dSorting}
        active={+sortBook[1]}
        />
      </Tooltip>

      </Filter>
      <GalleryBooks>
        {catalog.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
      </GalleryBooks>
      </>
    );
}