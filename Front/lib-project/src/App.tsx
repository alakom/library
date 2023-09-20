
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
import axios, {AxiosError} from 'axios';

function App() {
  const modalBookDetails = useSelector((state: RootState) => state.bookDetails.visible);
  const modalSignIn = useSelector((state: RootState) => state.user.visibleSignIn);
  const modalCreateAccount = useSelector((state: RootState) => state.user.visibleCreateAccount);
  const modalEditBook = useSelector((state: RootState)=> state.editWindow.visible);
  const modalSearch = useSelector((state:RootState)=>state.search.visibleWindowSearch);
  const dispatch =useDispatch();
  const catalog = useSelector((state: RootState)=>state.book.booksCatalog);

async function getUsers() {
  try{
    const users = await axios.get('https://fakestoreapi.com/users')
    console.log(users.data);
  }
  catch(e:any){
    const er = e as AxiosError;
    console.log(er.message)
  } 
  };

  async function putUser(){
    try{
      const users = await axios.put('https://fakestoreapi.com/users/7',  {
        email:'dd@gmail.com',
        username:'johnd',
        password:'m38rmF$',
        name:{
            firstname:'John',
            lastname:'Doe'
        },
        address:{
            city:'kilcoole',
            street:'7835 new road',
            number:3,
            zipcode:'12926-3874',
            geolocation:{
                lat:'-37.3159',
                long:'81.1496'
            }
        },
        phone:'1-570-236-7033'
    })  
      console.log(users.data);
    }
    catch(e:any){
      const er = e as AxiosError;
      console.log(er.message)
    } 
  };
  
  useEffect(()=>{
    dispatch(bookReducers.setBook({books}));
    console.log('get')
    getUsers();
    console.log('put')
    putUser();

  },[]);

  return (
    <>
    <Navigation/>
    <Advertisement/>
    <Catalog catalog={catalog}/>


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

    {/* {modalSearch &&
    <Modal>
      <SearchBookModal />
    </Modal>
    } */}

    {modalBookDetails && 
    <Modal>
          <BookDetails/>
    </Modal>}
    </>
  );
}

export default App
