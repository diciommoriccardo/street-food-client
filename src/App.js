import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import MenuContent from './component/menuContent';
import Orders from './component/Orders';
import Cart from './component/Cart';
import Login from './component/login';
import { SERVER_SOCKET } from './config/config';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import { io } from 'socket.io-client';
import MediaCard from "./component/MenuCard";
import RecipeReviewCard from "./component/Componenti";
import MediaQuery from 'react-responsive'
import MobileMenu from './component/mobileMenu';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      type: null,
      loggedIn: true
    }
  }

  componentDidMount(){
    // const socket = io(`http://localhost:${SERVER_SOCKET}`)
  }

  render(){
    let {loggedIn, type} = this.state;
    return(
      <Router>
      <div className="App">
      <Header />
      <MediaQuery maxWidth={900}><MobileMenu /> </MediaQuery>
      
      {!loggedIn && <Navigate to={"/login"} replace={true} />}    
      <main >
      
      <MediaQuery minWidth={901}> <Sidebar /> </MediaQuery>
      
          <section> 
            <Routes>
              <Route exact path="/menu" element={<MenuContent />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/login' element={<Login />} /> 
            </Routes>
          </section>
      </main>  
    </div>
    </Router>
    )
  }
}

export default App;
