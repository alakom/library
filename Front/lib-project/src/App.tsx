
import { Advertisement } from './components/Advertisement'
import { Navigation } from './components/Navigation'
import {Catalog} from "./components/Catalog"

import { BookDetails } from './components/BookDetails'
import { Modal } from './components/Modal'
import { RootState } from './store'
import { useSelector} from 'react-redux';


function App() {
  const modal = useSelector((state: RootState) => state.book.visible)
  return (
    <>
    <Navigation/>
    <Advertisement/>
    <Catalog/>
    {modal && <Modal>
          <BookDetails/>
          </Modal>}
    </>
  );
}

export default App
