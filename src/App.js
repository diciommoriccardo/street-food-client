import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Registrazione from './component/Registrazione';
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
import ButtonPopup from './component/ButtonPopup'; 



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
      <main >
      
          <section> 
            <Routes>
              <Route exact path="/menu" element={<MenuContent user={user}/>} />
              <Route path="/orders" element={<Orders user={user}/>} />
              <Route path="/cart" element={<Cart user={user}/>} />
              <Route path='/login' element={<Login user={user}/>} />
              <Route path='/signup' element={<Registrazione user={user}/>} /> 
              <Route path='/button' element={<ButtonPopup user={user}/>} /> 
            </Routes>
          </section>
      </main>  
    </div>
    </Router>
  )
}



export default App;
