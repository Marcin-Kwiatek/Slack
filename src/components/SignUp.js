import React from 'react';
import Logo from './Logo';
import '../styles/signInAndSignUp.css'



function SignUp() {

    return (
        <div className="container">
            <Logo></Logo>
            <input placeholder="Login" className="input" maxLength="20" type="text"></input>
            <input placeholder="Hasło" className="input" maxLength="20" type="password"></input>
            <button className="submit_button">Zarejestruj się</button>
        </div>
    )
}

export default SignUp;
