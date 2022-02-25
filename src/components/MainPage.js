import React, { useState, useEffect } from 'react';
import '../styles/mainPage.css'
import { getUsers } from '../utils/Api';
import User from './User';
import { getMyNickName } from '../utils/Api';




function MainPage() {

    const [users, setUsers] = useState([]);
    const [myNickName, setMyNickName] = useState([]);


    useEffect(() => {
        getMyNickName()
            .then(function (response) { return response.json() })
            .then((data) => {
                setMyNickName(data.data)
                console.log(data)
            })
            .catch((error) => console.error(error))
        getUsers()
            .then(function (response) { return response.json() })
            .then((data) => {
                let users = data.data
                if (users === undefined) {
                    setUsers([])
                }
                else {
                    setUsers(users)
                }
            })
    }, [])

    return (
        <>
            <div className='navbar'></div>
            <div className='sidebar'>
                <div className='current_user'>{myNickName}</div>
                <div className='sidebar_options'>
                    <div className='direct_messages'>
                        {users.map(user =>
                            <User key={user.id} login={user.login} id={user.id}></User>
                        )}
                    </div>
                </div>
            </div>
            <div className='content'></div>
        </>
    )
}

export default MainPage;
