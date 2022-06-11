import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import menuContent from './component/menuContent';
import Orders from './component/Orders';
import Cart from './component/Cart';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      user: null,
      loggedIn: true
    }
  }

  render(){
    return(
      <div className="App">
      <Header />
      <Sidebar />
      <main>
        <section>
          <Router>
            <Routes>
              <Route exact path="/" element={this.loggedIn ? <menuContent /> : <Navigate to="/login" replace={true}/>} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </section>
      </main>
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
