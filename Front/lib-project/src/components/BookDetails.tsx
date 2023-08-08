import * as style from './style/BookDetailsStyle';
import { Tooltip } from 'antd';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { viewBookDetails} from '../store/bookSlice';

export default function BookDetails(){
  const book = useSelector((state: RootState) => state.book.book)
  const dispatch = useDispatch()

return (
    <style.DivForm>
      <style.DivBook>
        <style.ImgBook src = {book.image} alt={book.title} style={{width: '100%',height: '100%',objectFit: 'fill'}}/>
      </style.DivBook>

      <style.InfBook>
        <style.HGenre>{book.genre}</style.HGenre>
        <style.HTitle>{book.title}</style.HTitle>
        <style.HAuthor>{book.author}</style.HAuthor>
        <style.HRate>Rate: {book.rating.avgRate}</style.HRate>
        <style.HDescription>{book.description}</style.HDescription>
      </style.InfBook>

      <style.DivButton>    
        <Tooltip title="Close book details">
          <style.ButtonClose onClick={()=>dispatch(viewBookDetails())}/>
        </Tooltip>
      </style.DivButton>
    </style.DivForm>
);
}