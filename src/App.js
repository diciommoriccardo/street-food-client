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
  const userValue = { user, setUser }
  const [loggedIn, setLoggedIn] = useState(false);
  const logValue = { loggedIn, setLoggedIn };
  const [count, setCount] = useState(0)
  const cartValue = { count, setCount };
  const cookie = new Cookies();
  const accessToken = useJwt(cookie.get('accessToken'));
  const decodedToken = decodeToken(accessToken);
  

  useEffect(() => {
    if(!decodedToken) {
      setUser(null); 
      setLoggedIn(false);
      return
    }

    setUser({
      email: decodedToken.email,
      displayName: decodedToken.displayName,
      type: decodedToken.type
    })
    setLoggedIn(true)
  }, [])


  return(
    <Router>
      <div className="App">
        <UserContext.Provider value={userValue}>
          <CartContext.Provider value={cartValue}>
            <Header />
            <main >
      
            <section> 
              <Routes>
              
                  <Route exact path="/menu" element={<MenuContent user={user} />}>
                    <Route path=':category' element={<MenuContent user={user} />} />
                  </Route>
                
                <Route path="/orders" element={<Orders user={user}/>} />
                <Route path="/cart" element={<Cart user={user} />} />
                <Route path='/login' element={<Login user={user}/>} />
                <Route path='/signup' element={<Registrazione user={user}/>} /> 
              
              
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
