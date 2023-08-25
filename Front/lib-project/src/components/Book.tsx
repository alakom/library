
import { BookProps } from './data/models';
import { Tooltip } from 'antd';
import * as style from './style/BookStyle';
import { useDispatch } from 'react-redux';
import { viewBookDetails, viewBook } from '../store/bookDetailsSlice';
import {viewEditBooks, editWindowBook} from '../store/editBookWindowSlice';
import { useCallback } from "react";

export default function Book({book} : BookProps){
  const dispatch = useDispatch()

  const onBookDetails = useCallback(()=>{
    dispatch(viewBook({book}))
    dispatch(viewBookDetails())},[]);
  
    const onEditBook = useCallback(()=>{
      dispatch(editWindowBook({book}));
      dispatch(viewEditBooks({
        title: "Editing a book",
        editAdd: "Сохранить изменения",
        cancelDelete: "Удалить книгу"
      }));
    },[]);

    return(
      <>
        <style.DivBackground>
          <style.ImgBook src={book.image} alt={book.title}/>
          <Tooltip title="Editing a book">
          <style.EditBtn onClick={onEditBook}/>
          </Tooltip>
          <style.InfBook>
            <style.HGenre>{book.genre}</style.HGenre>
            <style.HTitle>{book.title}</style.HTitle>
            <style.HAuthor>{book.author}</style.HAuthor>
            <style.HRate>{book.rating.avgRate}</style.HRate>
          </style.InfBook>
          <Tooltip title="View the description of the book">
            <style.Details onClick={onBookDetails}>Book details</style.Details>
          </Tooltip>
        </style.DivBackground>
      </>
    );
}