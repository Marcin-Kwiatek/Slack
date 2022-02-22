import React, { useState } from 'react';
import Logo from './Logo';
import { Link, useHistory } from "react-router-dom";
import '../styles/signInAndSignUp.css'



function SignUp() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const history = useHistory()

    const SignUp = () => {
        if (login === "" || password === "") {
            setErr('Nie poprawna wartość login lub hasło')
        }
        else {
            history.push("/SignIn");
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
            <button className="submit_button" onClick={SignUp}>Zarejestruj się</button>
            <div className="err">{err}</div>
            <div className="text">Masz już konto? <Link className='link' to='/SignIn'>Zaloguj się</Link></div>
        </div>
    )
}

export default SignUp;
