import React from 'react';
import '../styles/user.css'



function User(props) {

    return (
        <div className='user_nick'>
            {props.login}
        </div>
    )
}

export default User;
