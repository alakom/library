import { Tooltip } from 'antd';
import * as style from './style/editBook';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addWindowBook,viewEditBooks } from '../store/editBookWindowSlice';
import { useCallback, useState } from 'react';
import { IBook } from './data/models';
import { addNewBook } from '../store/bookSlice';


export default function AddBook(){
    const dispatch = useDispatch();
    const TitleH1= useSelector((state:RootState)=> state.editWindow.title);
    const ButtonAddSave = useSelector((state:RootState)=>state.editWindow.editAdd);
    const ButtonCancelDelete = useSelector((state:RootState)=>state.editWindow.cancelDelete);
    const book = useSelector((state:RootState)=>state.editWindow.book);
    const [title,setTitle]=useState(book.title);
    const [author,setAuthor]=useState(book.author);
    const [genre,setGenre]=useState(book.genre);
    const [description,setDescription]=useState(book.description);
    const [rate,setRate]=useState(book.rating.avgRate);

    const closeWindow = useCallback(()=>{
            dispatch(addWindowBook());
            dispatch(viewEditBooks(""));
        },[]);
    
    const addSave = useCallback(()=>{
        if (TitleH1==="Adding a Book to the Library"){
                const id = new Date();
                 let newBook:IBook = {
                "id": id.getTime(),
                "title": title,
                "author":author,
                "genre":genre,
                "description":description,
                "image":'https://binaries.templates.cdn.office.net/support/templates/ru-ru/lt22301254_quantized.png',
                "rating":
                    {
                        "avgRate":+rate,
                        "count":10,
                    }
            };
            dispatch(addNewBook({newBook}));
            closeWindow();
        }

    },[]);

    const cancelDel = useCallback(()=>{
        if (TitleH1==="Adding a Book to the Library"){
            closeWindow();
        }

    },[]);


    return(
        <>
        <style.InputForm>
            <style.H1>{TitleH1}</style.H1>
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
                <style.Input value={rate} onChange={(event)=>setRate(+event.target.value)}></style.Input>
            </style.DivInput>

            <style.BtnAdd onClick={cancelDel}>{ButtonCancelDelete}</style.BtnAdd>
            <style.BtnAdd onClick={addSave}>{ButtonAddSave}</style.BtnAdd>

            <Tooltip title="Close the window">
                <style.ButtonClose
                    onClick={closeWindow}/>
            </Tooltip>
        </style.InputForm>
        
        </>
    );
}