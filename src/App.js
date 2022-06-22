import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import MenuContent from './component/menuContent';
import Orders from './component/Orders';
import Cart from './component/Cart';
import Login from './component/login';
import { SERVER_SOCKET } from './config/config';
import {BrowserRouter as Router, Navigate, Route, Routes, withRouter} from 'react-router-dom';
import { io } from 'socket.io-client';
import MediaCard from "./component/MenuCard";
import RecipeReviewCard from "./component/Componenti";
import MediaQuery from 'react-responsive'
import MobileMenu from './component/mobileMenu';
import Cookies from 'universal-cookie';
import {useJwt, decodeToken} from 'react-jwt'



function App(){
  let [user, setUser] = useState('');
  let [loggedIn, isLogged] = useState(false);
  const cookie = new Cookies();
  const accessToken = useJwt(cookie.get('accessToken'));
  console.log(accessToken)
  const decodedToken = decodeToken(accessToken);
  


  setUser = () => {
    if(!decodedToken) return user = null
    user = {
        email: decodedToken.email,
        displayName: decodedToken.displayName,
        type: decodedToken.type
    }
  }

  isLogged = () => {
    loggedIn = decodedToken ? true : false
  }

  useEffect(() => {
    setUser()
    isLogged()
  })

  return(
    <Router>
      <div className="App">
      <Header />
      <MediaQuery maxWidth={900}><MobileMenu /> </MediaQuery>   
      <main >
      
      <MediaQuery minWidth={901}> <Sidebar /> </MediaQuery>
      
          <section> 
            <Routes>
              <Route exact path="/menu" element={<MenuContent />} />
              <Route path="/orders" element={!loggedIn ? <Navigate to={"/login"} /> : <Orders />} />
              <Route path="/cart" element={!loggedIn ? <Navigate to={"/login"} /> : <Cart />} />
              <Route path='/login' element={<Login />} /> 
            </Routes>
          </section>
      </main>  
    </div>
    </Router>
  )
}



export default App;
