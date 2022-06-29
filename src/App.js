import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Header from './component/Header';
import Registrazione from './component/Registrazione';
import MenuContent from './component/menuContent';
import Orders from './component/Orders';
import Cart from './component/Cart';
import Login from './component/login';
import { SERVER_SOCKET } from './config/config';
import {BrowserRouter as Router, Navigate, Route, Routes, withRouter} from 'react-router-dom';
import { io } from 'socket.io-client';
import Cookies from 'universal-cookie';
import {useJwt, decodeToken} from 'react-jwt'
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';





function App(){
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const userValue = { user, setUser, loggedIn, setLoggedIn }
  const [count, setCount] = useState(0)
  const cartValue = { count, setCount };


  return(
    <Router>
      <div className="App">
        <UserContext.Provider value={userValue}>
          <CartContext.Provider value={cartValue}>
            <Header />
            <main >
            <section> 
              <Routes>
                  <Route exact path="/menu" element={loggedIn ? <MenuContent /> : <Navigate to="/login" replace={true} /> }>
                    <Route path=':category' element={loggedIn ? <MenuContent /> : <Navigate to="/login" replace={true} /> } />
                  </Route>
                
                <Route path="/orders" element={loggedIn ? <Orders /> : <Navigate to="/login" replace={true} /> } />
                <Route path="/cart" element={loggedIn ? <Cart /> : <Navigate to="/login" replace={true} /> } />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Registrazione />} /> 
              
              
            </Routes>
          </section>
      </main>
        </CartContext.Provider>
      </UserContext.Provider>  
    </div>
    </Router>
  )
}



export default App;
