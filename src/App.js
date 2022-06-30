import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Header from './component/Header';
import Registrazione from './component/Registrazione';
import MenuContent from './component/menuContent';
import Orders from './component/Orders';
import Cart from './component/Cart';
import Login from './component/login';
import UpdateProduct from './component/UpdateProduct';
import {BrowserRouter as Router, Navigate, Route, Routes, withRouter} from 'react-router-dom';
import { io } from 'socket.io-client';
import Cookies from 'universal-cookie';
import {useJwt, decodeToken, isExpired} from 'react-jwt'
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';





function App(){
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  const userValue = { user, setUser, loggedIn, setLoggedIn }
  const [count, setCount] = useState(0)
  const cartValue = { count, setCount };
  const cookie = new Cookies()
  let token = cookie.get('accessToken');
  console.log(userValue)


  useEffect(() => {
    let tokenExpired = isExpired(token)
    if(tokenExpired) return setLoggedIn(false)

    let decodedToken = decodeToken(token)
    console.log(decodedToken)
      
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
                <Route path="/menu" element={loggedIn ? <MenuContent /> : <Navigate to="/login" replace={true} /> }>
                  <Route exact path=':category' element={loggedIn ? <MenuContent /> : <Navigate to="/login" replace={true} /> } />
                </Route>
                <Route path="/orders" element={loggedIn ? <Orders /> : <Navigate to="/login" replace={true} /> } />
                <Route path="/cart" element={loggedIn ? <Cart /> : <Navigate to="/login" replace={true} /> } />
                <Route exact path='/update' element={loggedIn ? <UpdateProduct /> : <Navigate to="/login" replace={true} />} />
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
