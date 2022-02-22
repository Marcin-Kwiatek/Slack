import React from 'react';
import Logo from './Logo';
import '../styles/signInAndSignUp.css'
import { Link, useHistory } from "react-router-dom";



function SignIn() {

    const history = useHistory()

    const Login = () => {
        history.push('/')
    }

    return (
        <div className="container">
            <Logo></Logo>
            <input placeholder="Login" className="input" maxLength="20" type="text"></input>
            <input placeholder="Hasło" className="input" maxLength="20" type="password"></input>
            <button className="submit_button" onClick={Login}>Zaloguj się</button>
            <div className="text">Nie masz konta? <Link className='link' to='/SignUp'>Zarejestruj się</Link></div>
        </div>
    )
}

export default SignIn;
