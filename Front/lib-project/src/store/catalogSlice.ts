import { IBook } from "../components/data/models";
import { createSlice } from "@reduxjs/toolkit";
import { books } from "../components/data/Books";

interface CatalogState{
    books: IBook[]
}

const initialState:CatalogState={
    books: books,
}

export const catalogSlice=createSlice({
    name: 'catalog',
    initialState,
    reducers:{
        addNewBook(state,action){
            console.log(books)
            state.books.push.apply(action.payload.newBook)
            state.books[23]= action.payload.newBook
            console.log(books)
        },
    }
})

export const {addNewBook} = catalogSlice.actions
export default catalogSlice.reducer;
