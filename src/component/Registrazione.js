import { render } from "@testing-library/react";
import React from "react";
import "../styles/registrazione.css";

class Registrazione extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
<div className="testbox">
  <h1>REGISTRAZIONE</h1>

  <form action="/">
    <div className="accounttype">
      <input type="radio" value="None" id="radioOne" name="account"/>
      <label htmlFor="radioOne" className="radio" chec ="true">Utente</label>
      <input type="radio" value="None" id="radioTwo" name="account" />
      <label htmlFor="radioTwo" className="radio">Amministratore</label>
      <input type="radio" value="None" id="radioThree" name="account"/>
      <label htmlFor="radioThree" className="radio" chec ="true">Cuoco</label>
    </div>
  <label id="icon" htmlFor="name"><i className="icon-envelope "></i></label>
  <input type="text" name="name" id="name" placeholder="Email" required/>
  <label id="icon" htmlFor="name"><i className="icon-user"></i></label>
  <input type="text" name="name" id="name" placeholder="Nome" required/>
  <label id="icon" htmlFor="name"><i className="icon-user"></i></label>
  <input type="text" name="cognome" id="cognome" placeholder="Cognome" required/>
  <label id="icon" htmlFor="name"><i className="icon-shield"></i></label>
  <input type="password" name="name" id="name" placeholder="Password" required/>
   <p>By clicking Register, you agree on our <a href="#">terms and condition</a>.</p>
   <a href="#" className="button">Registrati!</a>
  </form>
</div>




        )
    }
}

export default Registrazione;