
import { BookProps } from './data/models';
import { Tooltip } from 'antd';
import {DivBackground,ImgBook,InfBook,HGenre,HAuthor,HTitle,HRate,Details} from './style/BookStyle';
import { useDispatch } from 'react-redux';
import { viewBookDetails, viewBook } from '../store/bookSlice';
import { useCallback } from "react";

export default function Book({book} : BookProps){
  const dispatch = useDispatch()

  const onBookDetails = useCallback(()=>{
    dispatch(viewBook({book}))
    dispatch(viewBookDetails())},[])

    return(
      <>
        <DivBackground>
          <ImgBook src={book.image} alt={book.title}/>
          <InfBook>
            <HGenre>{book.genre}</HGenre>
            <HTitle>{book.title}</HTitle>
            <HAuthor>{book.author}</HAuthor>
            <HRate>{book.rating.avgRate}</HRate>
          </InfBook>
          <Tooltip title="View the description of the book">
            <Details onClick={onBookDetails}>Book details</Details>
          </Tooltip>
        </DivBackground>
      </>
    );
}