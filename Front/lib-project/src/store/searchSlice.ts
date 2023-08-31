import {createSlice} from '@reduxjs/toolkit';

interface userState{
    "visibleWindowSearch": boolean,
}

const initialState:userState={
    "visibleWindowSearch": false,
}
export const searchModalSlice=createSlice({
    name:'searchModal',
    initialState,
    reducers:{
        openWindow(state){
            state.visibleWindowSearch = !state.visibleWindowSearch;
            if (!state.visibleWindowSearch){
                document.body.style.overflow ="auto";
            }
        },
    },
})

export const {openWindow,} = searchModalSlice.actions;
export default searchModalSlice.reducer;