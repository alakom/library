import React from 'react';
import styled from "styled-components";
import { BookProps } from './data/models';
import {Book} from "./Book";
import { books } from './data/Books';
const GalleryBooks=styled.div`
    display: flex;
    grid-gap: 45px;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    grid-template-rows: repeat(2, 270px);
    border-top: 40px solid #FFF;
    border-right: 40px solid #FFF;
    border-left: 40px solid #FFF;
    margin-top: 50px;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
    background: #FFF;
  
`;


export function Catalog(){
    return (
      <GalleryBooks>
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
        {books.map(book=><Book book={book} key={book.id} />)}
      </GalleryBooks>
    );
}