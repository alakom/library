import { Tooltip } from 'antd';
import * as style from './style/editBook';
import { useDispatch } from 'react-redux';
import { addBook,viewEditBooks } from '../store/editBookSlice';
import { useCallback, useState } from 'react';
import { IBook } from './data/models';
import { addNewBook } from '../store/catalogSlice';


export default function AddBook(){
    const dispatch = useDispatch();
    const openAdd = useCallback(()=>{
        dispatch(addBook());
        dispatch(viewEditBooks());
    },[]);
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [genre,setGenre]=useState('');
    const [description,setDescription]=useState('');
    const [rate,setRate]=useState('');

    const updateCatalog=()=>{
        let newBook:IBook = {
            "id":100,
            "title": title,
            "author":author,
            "genre":genre,
            "description":description,
            "image":'rrr',
            "rating":
                {

                    "avgRate":+rate,
                    "count":10,
                }
        };
        dispatch(addNewBook({newBook}));
        openAdd();

    }

    return(
        <>
        <style.InputForm>
            <style.H1>Adding a Book to the Library</style.H1>
            <style.DivInput>
                <style.H6>Введите название</style.H6>
                <style.Input value={title} onChange={(event)=>setTitle(event.target.value)}></style.Input>
            </style.DivInput>

            <style.DivInput>
                <style.H6>Введите автора</style.H6>
                <style.Input value={author} onChange={(event)=>setAuthor(event.target.value)}></style.Input>
            </style.DivInput>

            <style.DivInput>
                <style.H6>Введите жанр</style.H6>
                <style.Input value={genre} onChange={(event)=>setGenre(event.target.value)}></style.Input>
            </style.DivInput>

            <style.DivInput style={{height:'auto'}}>
                <style.H6>Введите описание</style.H6>
                <style.TextArea value={description} onChange={(event)=>setDescription(event.target.value)}></style.TextArea>
            </style.DivInput>

            <style.DivInput >
                <style.H6>Введите среднюю оценку</style.H6>
                <style.Input value={rate} onChange={(event)=>setRate(event.target.value)}></style.Input>
            </style.DivInput>

            <style.BtnAdd onClick={updateCatalog}>Добавить книгу</style.BtnAdd>

            <Tooltip title="Close the window">
                <style.ButtonClose
                    onClick={openAdd}/>
            </Tooltip>
        </style.InputForm>
        
        </>
    );
}