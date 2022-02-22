import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {

    return (
        <Router>
            <Switch>
                <Route exact path='/SignIn'>
                    <SignIn></SignIn>
                </Route>
                <Route exact path='/SignUp'>
                    <SignUp></SignUp>
                </Route>
            </Switch>
        </Router>)
}

export default App;
