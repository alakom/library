import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import * as style from './style/SearchStyle';
import { openWindow } from '../store/searchSlice';
import Catalog from './Catalog';


export default function SearchBookModal(){
    const dispatch = useDispatch();
    const resultCatalog = useSelector((state: RootState)=> state.book.booksClone);
    return(
        <style.InputForm>

        <style.ButtonClose onClick={() => dispatch(openWindow())} />
        <Catalog catalog={resultCatalog}/>
        </style.InputForm>
    );
}