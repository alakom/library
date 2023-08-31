import { IBook } from "../components/data/models";
import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

interface BookState{
    booksServer: IBook[],
    booksClone: IBook[]
}

const initialState:BookState={
    booksServer: [],
    booksClone:[]
}

export const bookSlice=createSlice({
    name: 'book',
    initialState,
    reducers:{
        addNewBook(state,action){
            state.booksServer.push(action.payload.newBook);
            state.booksClone.push(action.payload.newBook);
        },
        setBook(state,action){
            state.booksServer = action.payload.books;
            state.booksClone = cloneDeep(action.payload.books);
        },
        editBook(state, action){
            const id = state.booksClone.findIndex(book=>book.id===action.payload.upDateBook.id);
            state.booksClone[id]=action.payload.upDateBook;
            state.booksServer[id]=action.payload.upDateBook;
        },
        delBook(state, action){
            const id = state.booksClone.findIndex(book=>book.id===action.payload.book.id);
            state.booksClone.splice(id,1);
            state.booksServer.splice(id,1);
        },
        searchBook(state, action){
            console.log('произошёл поиск')
        }
    }
})

export const {addNewBook, setBook, editBook, delBook, searchBook} = bookSlice.actions
export default bookSlice.reducer;
