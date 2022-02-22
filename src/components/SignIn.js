import React from 'react';
import Logo from './Logo';
import '../styles/signInAndSignUp.css'



function SignIn() {

    return (
        <div className="container">
            <Logo></Logo>
            <input placeholder="Login" className="input" maxLength="20" type="text"></input>
            <input placeholder="Hasło" className="input" maxLength="20" type="password"></input>
            <button className="submit_button">Zaloguj się</button>
        </div>
    )
}

export default SignIn;
