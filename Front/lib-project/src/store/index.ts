import {configureStore} from '@reduxjs/toolkit';
import bookReducer from './bookDetailsSlice';
import userReducer from './userSlice';
import editBookWindowSlice from './editBookWindowSlice';
import bookSlice from './bookSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
    reducer:{
        bookDetails: bookReducer,
        user:userReducer,
        editWindow: editBookWindowSlice,
        book: bookSlice,
        search: searchSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch