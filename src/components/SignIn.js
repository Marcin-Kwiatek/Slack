import React, { useState } from 'react';
import Logo from './Logo';
import '../styles/signInAndSignUp.css'
import { Link, useHistory } from "react-router-dom";



function SignIn() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const history = useHistory()

    const Login = () => {
        if (login === "" || password === "") {
            setErr('Nie poprawna wartość login lub hasło')
        }
        else {
            history.push('/')
        }
    }
    const changeLogin = (e) => {
        setLogin(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="container">
            <Logo></Logo>
            <input placeholder="Login" className="input" maxLength="20" type="text" onChange={changeLogin}></input>
            <input placeholder="Hasło" className="input" maxLength="20" type="password" onChange={changePassword}></input>
            <button className="submit_button" onClick={Login}>Zaloguj się</button>
            <div className="err">{err}</div>
            <div className="text">Nie masz konta? <Link className='link' to='/SignUp'>Zarejestruj się</Link></div>
        </div>
    )
}

export default SignIn;
