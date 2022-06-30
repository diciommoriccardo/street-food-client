import { render } from "@testing-library/react";
import React from "react";
import "../styles/registrazione.css";
import auth from "../helpers/auth";
import { Button } from "@mui/material";

class Registrazione extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          type: '',
          source: 'local'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
      e.preventDefault();
      auth.signup(this.state)
      .then(data => {
        console.log(data)
      })
      .catch(err => alert(err))
    }

      handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
          });
      }

    render(){
        return(
<div className="testbox">
  <h1>REGISTRAZIONE</h1>

  <form action="/">
    <div className="accounttype" onChange={this.handleChange}>
      <input type="radio" value="utente" id="radioOne" name="type"/>
      <label htmlFor="radioOne" className="radio" chec ="true">Utente</label>
      <input type="radio" value="admin" id="radioTwo" name="type" />
      <label htmlFor="radioTwo" className="radio">Amministratore</label>
      <input type="radio" value="cuoco" id="radioThree" name="type"/>
      <label htmlFor="radioThree" className="radio" chec ="true">Cuoco</label>
    </div>
  <label id="icon" htmlFor="name"><i className="icon-envelope "></i></label>
  <input type="text" name="email" id="name" placeholder="Email" value={this.state.email} required onChange={this.handleChange}/>
  <label id="icon" htmlFor="name"><i className="icon-user"></i></label>
  <input type="text" name="firstName" id="name" placeholder="Nome" required value={this.state.fistName} onChange={this.handleChange}/>
  <label id="icon" htmlFor="name"><i className="icon-user"></i></label>
  <input type="text" name="lastName" id="name" placeholder="Cognome" required value={this.state.lastName} onChange={this.handleChange}/>
  <label id="icon" htmlFor="name"><i className="icon-shield"></i></label>
  <input type="password" name="password" id="name" placeholder="Password" required value={this.state.password} onChange={this.handleChange}/>
   <p>By clicking Register, you agree on our <a href="#">terms and condition</a>.</p>
   <Button className="button" onClick={this.handleSubmit} >Registrati!</Button>
  </form>
</div>




        )
    }
}

export default Registrazione;