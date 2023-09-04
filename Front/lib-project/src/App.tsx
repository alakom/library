
import Advertisement from './components/Advertisement'
import Navigation from './components/Navigation'
import Catalog from "./components/Catalog"
import BookDetails from './components/BookDetails'
import SignIn from './components/SignIn';
import CreateAccount from './components/createAccount';
import AddBook from './components/AddBook';
import Modal from './components/Modal'
import SearchBookModal from './components/searchBookModal';
import { RootState } from './store'
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import  * as bookReducers from './store/bookSlice';
import { books } from './components/data/Books';

function App() {
  const modalBookDetails = useSelector((state: RootState) => state.bookDetails.visible);
  const modalSignIn = useSelector((state: RootState) => state.user.visibleSignIn);
  const modalCreateAccount = useSelector((state: RootState) => state.user.visibleCreateAccount);
  const modalEditBook = useSelector((state: RootState)=> state.editWindow.visible);
  const modalSearch = useSelector((state:RootState)=>state.search.visibleWindowSearch);
  const dispatch =useDispatch();

  const catalog = useSelector((state: RootState)=>state.book.booksClone);

  useEffect(()=>{
    dispatch(bookReducers.setBook({books}));
  },[]);

  return (
    <>
    <Navigation/>
    <Advertisement/>
    <Catalog catalog={catalog}/>

    {modalBookDetails && 
    <Modal>
          <BookDetails/>
    </Modal>}

    {modalSignIn &&
    <Modal>
      <SignIn/>
    </Modal>
    }

    {modalCreateAccount &&
    <Modal>
      <CreateAccount/>
    </Modal>
    }

    {modalEditBook &&
    <Modal>
      <AddBook/>
    </Modal>
    }

    {modalSearch &&
    <Modal>
      <SearchBookModal />
    </Modal>
    }

    </>
  );
}

export default App
