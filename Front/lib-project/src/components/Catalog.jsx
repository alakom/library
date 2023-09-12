import React, { useCallback, useEffect, useState} from 'react';
import { books } from './data/Books';
import Book from "./Book";
import { genres } from './data/Genres';
import {Tooltip } from 'antd';
import * as NavCatalog from './style/NavCatalogStyle';
import * as FilterCatalog from './style/FilterCatalogStyle';
import { GalleryBooks } from './style/CatalogStyle';
import { useDispatch} from 'react-redux';
import { addWindowBook,viewEditBooks } from '../store/editBookWindowSlice';
import  * as bookReducers from '../store/bookSlice';



export default function Catalog({catalog}){
  const [active, setActive] = useState(genres[0].title);
  const [sortBook,setSort]=useState([false,false]);
  const dispatch = useDispatch();

  console.log(catalog);
  useEffect(()=>{
    dispatch(bookReducers.filterGenre({active}));
  },[active]);

  const openAddBookWindow = useCallback(()=>
  {
    dispatch(addWindowBook());
    dispatch(viewEditBooks({
      title: "Adding a Book to the Library",
      editAdd: "Добавить книгу",
      cancelDelete: "Отмена"
    }));
  }  ,[]);

  const aSorting = useCallback(()=>{
    if (sortBook[0]===true){
      dispatch(bookReducers.filterGenre({active}));
      setSort((sortBook)=>[false,false]);
    }
    else
    {
      dispatch(bookReducers.aSortingCatalog());
      setSort((sortBook)=>[true,false]);
  }
  },[catalog]);

  const dSorting=useCallback(()=>{
    if (sortBook[1]===true){
      dispatch(bookReducers.filterGenre({active}));
      setSort((sortBook)=>[false,false]);
    }
    else
    {
      dispatch(bookReducers.dSortingCatalog());
      setSort((sortBook)=>[false,true])
    }
  },[catalog]);

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
          onClick={aSorting}
          active={+sortBook[0]}
          />
      </Tooltip>
            
      <Tooltip title="Descending sort">
        <FilterCatalog.SortD 
        onClick={dSorting}
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
        {catalog.map(book=><Book book={book} key={book.id} />)}
      </GalleryBooks>
      </>
    );
}