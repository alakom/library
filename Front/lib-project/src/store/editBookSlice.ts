import { createSlice } from "@reduxjs/toolkit";
import { IBook} from '../components/data/models';
interface IEdit{
    "book":IBook,
    "visible":boolean,
}
const initialState:IEdit={
    "book": {
        "title":"",
        "author":"",
        "genre":"",
        "description":"",
        "image":"",
        "rating":
        {
            "avgRate":0,
            "count":0,
        }},
        
        "visible": false,
}
export const editBookSlice = createSlice({
    name: "editBook",
    initialState,
    reducers:{
        viewEditBooks(state){
            state.visible = !state.visible;
            if (!state.visible){
                document.body.style.overflow ="auto";
            }
        },
        addBook(state){
            state.book = initialState.book;
        },
        editBook(state,actions){
            state.book = actions.payload.book;
        },
    }
})

export const {viewEditBooks,addBook,editBook} = editBookSlice.actions;
export default editBookSlice.reducer;