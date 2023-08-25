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
            console.log(action.payload.newBook);

        },
        setBook(state,action){
            state.booksServer = action.payload.books;
            state.booksClone = cloneDeep(action.payload.books);
        },
    }
})

export const {addNewBook, setBook} = bookSlice.actions
export default bookSlice.reducer;
