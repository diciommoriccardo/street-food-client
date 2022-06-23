import React from "react";
import '../styles/login.css';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import authServices from '../helpers/auth.js';
import { Navigate, useNavigate } from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props);
		this.state={
			email: '',
			password: ''
		}
        this.checkToken = this.checkToken.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }

    checkToken(){

    }

    async handleSubmit(e){
        e.preventDefault();
		authServices.login(this.state.email, this.state.password)
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
            <div className="container">
	<div className="screen">
		<div className="screen__content"> 
			<form className="login"> 
                <h1 className="titolo_login"> EFFETTUA QUI IL TUO LOGIN! </h1>
				<div className="login__field">
                    <PersonIcon className="login__icon"/>
					<input type="text" className="login__input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
				</div>
				<div className="login__field">
                    <LockIcon className="login__icon"/>
					<input type="password" className="login__input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
				</div>
				<button className="button login__submit" onClick={this.handleSubmit}>
					<span className="button__text">Login Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<div className="social-icons">
					<a className="logo" href="http://localhost:5000/login/google"> <GoogleIcon/></a>
					
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
)
    }
}

export default Login;