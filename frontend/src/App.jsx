import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './pages/HomePage'
import StoreContextProvider from './context/StoreContext';
import About from './pages/About';
import MenuPage from './pages/MenuPage';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Header from './components/Header/Header';
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import './App.css'
import { ToastContainer } from 'react-toastify';
function App() {
  const [count, setCount] = useState(0)
  const [showLogin,setShowLogin]=useState(false)

  return (
    <div className='page'>
      <BrowserRouter>
        <StoreContextProvider>
          {showLogin?<LoginPopup setShowLogin={setShowLogin}></LoginPopup>:<></>}
          
          <Header setShowLogin={setShowLogin}></Header>
          
          <Routes>   
            <Route path='/' element={<HomePage setShowLogin={setShowLogin}/>} />
            <Route path='/about' element={<About setShowLogin={setShowLogin}/>} />
            <Route path='/menu' element={<MenuPage setShowLogin={setShowLogin}/>} />
            <Route path='/cart' element={<Cart setShowLogin={setShowLogin}/>} />
            <Route path="/order" element={<PlaceOrder setShowLogin={setShowLogin}/>} />
          </Routes>
        </StoreContextProvider>
      </BrowserRouter>


    </div>
  )
}

export default App
