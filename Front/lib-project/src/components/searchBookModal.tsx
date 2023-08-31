import { useDispatch } from 'react-redux';
import * as style from './style/SearchStyle';
import { openWindow } from '../store/searchSlice';


export default function SearchBookModal(){
    const dispatch = useDispatch();
    return(
        <style.InputForm>

        <style.ButtonClose onClick={() => dispatch(openWindow())} />
        </style.InputForm>
    );
}