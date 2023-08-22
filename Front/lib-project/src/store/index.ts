import {configureStore} from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import userReducer from './userSlice';
import editBookSlice from './editBookSlice';
import catalogSlice from './catalogSlice';

export const store = configureStore({
    reducer:{
        book: bookReducer,
        user:userReducer,
        editBook: editBookSlice,
        catalog: catalogSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch