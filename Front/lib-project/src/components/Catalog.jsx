import React, { useCallback, useEffect, useState} from 'react';
import { books } from './data/Books';
import Book from "./Book";
import { genres } from './data/Genres';
import {Tooltip } from 'antd';

import * as NavCatalog from './style/NavCatalogStyle';
import * as FilterCatalog from './style/FilterCatalogStyle';
import { GalleryBooks } from './style/CatalogStyle';
import { useDispatch, useSelector} from 'react-redux';
import { addWindowBook,viewEditBooks } from '../store/editBookWindowSlice';
import  * as bookReducers from '../store/bookSlice';



export default function Catalog(){
  const [active, setActive] = useState(genres[0].title);
  //const [catalog,setCatalog]= useState(books);
  const [sortBook,setSort]=useState([false,false]);
  const dispatch = useDispatch();
  const catalog = useSelector(state=>state.book.booksClone);

  useEffect(()=>{
    dispatch(bookReducers.setBook({books}));
  },[]);

  const openAddBookWindow = useCallback(()=>
  {
    dispatch(addWindowBook());
    dispatch(viewEditBooks({
      title: "Adding a Book to the Library",
      editAdd: "Добавить книгу",
      cancelDelete: "Отмена"
    }));
  }  ,[]);

  // const aSorting = useCallback(()=>{
  //   if (sortBook[0]===true){
  //     setCatalog((catalog)=>booksClone);
  //     setSort((sortBook)=>[false,false]);
  //   }
  //   else
  //   {
  //     setCatalog((catalog)=>booksClone.sort((prev, next) => next.rating.avgRate - prev.rating.avgRate).filter(book=>active==="All genres"?book:book.genre===active));
  //     setSort((sortBook)=>[true,false]);
  // }
  // },[catalog]);

  // const dSorting=useCallback(()=>{
  //   if (sortBook[1]===true){
  //     setCatalog((catalog)=>booksClone);
  //     setSort((sortBook)=>[false,false]);
  //   }
  //   else
  //   {
  //     setCatalog((catalog)=>booksClone.sort((prev, next) => prev.rating.avgRate - next.rating.avgRate).filter(book=>active==="All genres"?book:book.genre===active));
  //     setSort((sortBook)=>[false,true])
  //   }
  // },[catalog]);

  return (
      <>
      <NavCatalog.TabGroup>
        {genres.map(genre => (
          <NavCatalog.Tab
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
          </NavCatalog.Tab>
        ))}
      </NavCatalog.TabGroup>


      <FilterCatalog.Filter>
      <Tooltip title="Ascending sort">
          <FilterCatalog.SortA 
          // onClick={aSorting}
          active={+sortBook[0]}
          />
      </Tooltip>
            
      <Tooltip title="Descending sort">
        <FilterCatalog.SortD 
        // onClick={dSorting}
        active={+sortBook[1]}
        />
      </Tooltip>

      <Tooltip title="Add a new book">
        <FilterCatalog.AddBook
          onClick={openAddBookWindow}
        />
      </Tooltip>
      
      </FilterCatalog.Filter>

      

      <GalleryBooks>
        {catalog.filter(book=>active==="All genres"?book:book.genre===active).map(book=><Book book={book} key={book.id} />)}
      </GalleryBooks>
      </>
    );
}