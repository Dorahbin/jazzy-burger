import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './layouts/NavBar';
import Home from './pages/Home';
import CheckOut from './pages/CheckOut';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import { useState } from 'react';
function App() {
  const [cartItem, setCartItem] = useState([1,1,1])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar cartItem = {cartItem}/>}>
            <Route path='/' element={<Home />} />
            <Route path='/CheckOut' element={<CheckOut />} />
          </Route>
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
