import './App.css'
import Search from './components/Search'
import Pagination from './components/Pagination'
import News from './components/News'
import { SiKakaotalk } from "react-icons/si";

function App() {
 

  return (
    <>
      

      <h1> Welcome to Tech -  <SiKakaotalk className='icon' /></h1> 
      <Search/>
      <Pagination/>
      <News/> 


    </>
  )
}

export default App
