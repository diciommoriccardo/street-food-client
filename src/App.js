import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import menuContent from './component/menuContent';
import Orders from './component/Orders';
import Cart from './component/Cart';
import Login from './component/login';
import { SERVER_SOCKET } from './config/config';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import { io } from 'socket.io-client';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user: null,
      loggedIn: true
    }
  }

  componentDidMount(){
    const socket = io(`http://localhost:${SERVER_SOCKET}`)
  }

  render(){
    return(
      <div className="App">
      <Header />
      <Router>
      <Sidebar />
      <main>
        <section>
            <Routes>
              <Route exact path="/" element={this.loggedIn ? <menuContent /> : <Navigate to="/login"/>} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </section>
      </main>
      </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

export default App;
