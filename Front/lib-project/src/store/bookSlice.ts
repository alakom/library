import { IBook } from "../components/data/models";
import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep, forEach } from "lodash";

interface BookState{
    booksServer: IBook[],
    booksClone: IBook[],
    booksCatalog: IBook[]
}

const initialState:BookState={
    booksServer: [],
    booksClone:[],
    booksCatalog:[]
}

export const bookSlice=createSlice({
    name: 'book',
    initialState,
    reducers:{
        addNewBook(state,action){
            state.booksServer.push(action.payload.newBook);
            state.booksClone.push(action.payload.newBook);
            state.booksCatalog.push(action.payload.newBook);
        },
        setBook(state,action){
            state.booksServer = action.payload.books;
            state.booksClone = cloneDeep(action.payload.books);
            state.booksCatalog = cloneDeep(action.payload.books);
        },
        editBook(state, action){
            const id = state.booksClone.findIndex(book=>book.id===action.payload.upDateBook.id);
            state.booksClone[id]=action.payload.upDateBook;
            state.booksServer[id]=action.payload.upDateBook;
            state.booksCatalog[id]=action.payload.upDateBook;
        },
        delBook(state, action){
            const id = state.booksClone.findIndex(book=>book.id===action.payload.book.id);
            state.booksClone.splice(id,1);
            state.booksServer.splice(id,1);
            state.booksCatalog.splice(id,1);
        },
        searchBook(state, action){
            const search = action.payload.searchString.toLowerCase();
            state.booksClone=cloneDeep([]);
            for (const book of state.booksServer) {
                if(book.author.toLowerCase().includes(search)){
                    state.booksClone.push(book);
                    continue;
                }
                if(book.title.toLowerCase().includes(search)){
                    state.booksClone.push(book);
                    continue;
                }
                if(book.genre.toLowerCase().includes(search)){
                    state.booksClone.push(book);
                    continue;
                }
            }
            state.booksCatalog=cloneDeep(state.booksClone);
        },
        aSortingCatalog(state){
            state.booksCatalog = state.booksCatalog.sort((prev, next) => next.rating.avgRate - prev.rating.avgRate);
        },
        dSortingCatalog(state){
           state.booksCatalog= state.booksCatalog.sort((prev, next) => prev.rating.avgRate - next.rating.avgRate);
        },
        updateCatalog(state){
            state.booksClone = cloneDeep(state.booksServer);
            state.booksCatalog = cloneDeep(state.booksServer);
        },
        filterGenre(state, action){
            state.booksCatalog = cloneDeep(state.booksClone);
            state.booksCatalog = state.booksClone.filter(book=>action.payload.active==="All genres"?book:book.genre===action.payload.active);
        },
    }
})

export const {addNewBook, setBook, editBook, delBook, searchBook, aSortingCatalog, dSortingCatalog, updateCatalog, filterGenre} = bookSlice.actions;
export default bookSlice.reducer;
