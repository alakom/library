import { createSlice } from "@reduxjs/toolkit";
import { IBook} from '../components/data/models';
interface IEdit{
    "book":IBook,
    "visible":boolean,
    title: string,
    editAdd: string,
    cancelDelete: string
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
        title: "",
        editAdd: "",
        cancelDelete: ""
}
export const editBookWindowSlice = createSlice({
    name: "editWindow",
    initialState,
    reducers:{
        viewEditBooks(state, action){
            state.title = action.payload.title;
            state.editAdd = action.payload.editAdd;
            state.cancelDelete=action.payload.cancelDelete;
            state.visible = !state.visible;
            if (!state.visible){
                document.body.style.overflow ="auto";
            }
        },
        addWindowBook(state){
            state.book = initialState.book;
        },
        editWindowBook(state,actions){
            state.book = actions.payload.book;
        },
    }
})

export const {viewEditBooks,addWindowBook,editWindowBook} = editBookWindowSlice.actions;
export default editBookWindowSlice.reducer;