import React from 'react';
import Logo from './Logo';
import { Link, useHistory } from "react-router-dom";
import '../styles/signInAndSignUp.css'



function SignUp() {

    const history = useHistory()

    const SignUp = () => {
        history.push("/SignIn");
    }

    return (
        <div className="container">
            <Logo></Logo>
            <input placeholder="Login" className="input" maxLength="20" type="text"></input>
            <input placeholder="Hasło" className="input" maxLength="20" type="password"></input>
            <button className="submit_button" onClick={SignUp}>Zarejestruj się</button>
            <div className="text">Masz już konto? <Link className='link' to='/SignIn'>Zaloguj się</Link></div>
        </div>
    )
}

export default SignUp;
