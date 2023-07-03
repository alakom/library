import React, { useState} from 'react';
import styled from "styled-components";
import {Book} from "./Book";
import { books } from './data/Books';
import { genres } from './data/Genres';
import { Button, Tooltip } from 'antd';
import {SortAscendingOutlined,SortDescendingOutlined} from '@ant-design/icons';

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
  ${({ active }) =>
 active &&
    `
    color: #5973BD;
    border-bottom: 2px solid #5973BD;
    opacity: 1;
  `}
  &:hover {
    color: #5973BD;
  }
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
function filterBook(){
return (<Filter>
      <Tooltip title="Ascending sort">
                    <Button
                    icon ={<SortAscendingOutlined />}
                    shape="circle"
                    type= "text"
                    size="large"
                    />
                </Tooltip>
            
                <Tooltip title="Descending sort">
                    <Button
                    icon ={<SortDescendingOutlined />}
                    shape="circle"
                    type="text"
                    size="large"/>
                </Tooltip>
      </Filter>);
}

export function Catalog(){
  const [active, setActive] = useState(genres[0].title);
    return (
      <>
      <ButtonGroup>
        {genres.map(genre => (
          <Tab
          key={genre.title}
          active={active === genre.title}
          onClick={() => setActive(genre.title)}
          >
            {genre.title}
          </Tab>
        ))}
      </ButtonGroup>
      <filterBook/>
      <GalleryBooks>
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
        {books.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
      </GalleryBooks>
      </>
    );
}