import React from 'react';
import '../styles/user.css'



function User(props) {

    const changeUser = () => {
        props.changeChatUser(props.login)
    }

    return (
        <div className='user_nick' onClick={changeUser}>
            {props.login}
        </div>
    )
}

export default User;
