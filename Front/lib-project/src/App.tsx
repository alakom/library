
import Advertisement from './components/Advertisement'
import Navigation from './components/Navigation'
import Catalog from "./components/Catalog"
import BookDetails from './components/BookDetails'
import SignIn from './components/SignIn';
import CreateAccount from './components/createAccount';
import AddBook from './components/AddBook';
import Modal from './components/Modal'
import { RootState } from './store'
import { useSelector} from 'react-redux';


function App() {
  const modalBookDetails = useSelector((state: RootState) => state.book.visible);
  const modalSignIn = useSelector((state: RootState) => state.user.visibleSignIn);
  const modalCreateAccount = useSelector((state: RootState) => state.user.visibleCreateAccount);
  const modalEditBook = useSelector((state: RootState)=> state.editBook.visible);
  return (
    <>
    <Navigation/>
    <Advertisement/>
    <Catalog/>

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
    </>
  );
}

export default App
