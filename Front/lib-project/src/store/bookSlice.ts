import {createSlice} from '@reduxjs/toolkit';
import { IBook} from '../components/data/models';

interface BookState{
    "book": IBook,
    "visible": boolean,
}

const initialState:BookState={
    "book": {
    "title":"string",
    "author":"string",
    "genre":"string",
    "description":"string",
    "image":"string",
    "rating":
    {
        "avgRate":0,
        "count":0,
    }},
    
    "visible": false,
}
export const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        viewBookDetails(state){
            state.visible = !state.visible;
            if (!state.visible){
                document.body.style.overflow ="auto";
            }
        },
        viewBook(state,actions){
            state.book=actions.payload.book;
        }
    },
})

export const {viewBookDetails,viewBook} = bookSlice.actions
export default bookSlice.reducer;