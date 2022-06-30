import React, { useContext, useState } from "react";
import '../styles/login.css';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import authServices from '../helpers/auth.js';
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function Login(props){
	const [loginEmail, setLoginEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const {user, setUser, loggedIn, setLoggedIn} = useContext(UserContext) 

	const handleSubmit = (e) => {
		return new Promise((resolve) => {
			e.preventDefault();
			authServices.login(loginEmail, password)
			.then(data => {
				console.log(data)
				setUser({
					email: data.user.email,
					displayName: data.user.displayName,
					type: data.user.type
				})
				setLoggedIn(true)
				resolve(navigate("../menu"))
			})
			.catch(err => alert(err))
		})
	}

	return (
		<div className="container">
	<div className="screen">
		<div className="screen__content"> 
			<form className="login"> 
                <h1 className="titolo_login"> EFFETTUA QUI IL TUO LOGIN! </h1>
				<div className="login__field">
                    <PersonIcon className="login__icon"/>
					<input type="text" className="login__input" placeholder="Email" name="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
				</div>
				<div className="login__field">
                    <LockIcon className="login__icon"/>
					<input type="password" className="login__input" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<button className="button login__submit" onClick={handleSubmit}>
					<span className="button__text">Login Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>
				<NavLink to={"/signup"}>
					<button className="button login__submit">
						<span className="button__text">Registrati</span>
						<i className="button__icon fas fa-chevron-right"></i>
					</button>
				</NavLink>				
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

export default Login