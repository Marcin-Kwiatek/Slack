import React, { useState, useEffect } from 'react';
import '../styles/mainPage.css'
import { getUsers } from '../utils/Api';
import User from './User';
import { getMyNickName, addingMessage } from '../utils/Api';




function MainPage() {

    const [users, setUsers] = useState([]);
    const [myNickName, setMyNickName] = useState([]);
    const [chatUser, setChatUser] = useState(null);
    const [chatUserId, setChatUserId] = useState(null);
    const [isConversationOpen, setisConversationOpen] = useState(false);
    const [addMessageValue, setAddMessageValue] = useState('');




    useEffect(() => {
        getMyNickName()
            .then(function (response) { return response.json() })
            .then((data) => {
                setMyNickName(data.data)
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
    const changeChatUser = (login, id) => {
        setChatUser(login)
        setChatUserId(id)
        setisConversationOpen(true)
        setAddMessageValue('')
    }
    const changeAddCommentInput = (e) => {
        setAddMessageValue(e.target.value)
    }
    const addMessage = () => {
        if (setAddMessageValue === '') { }
        else {
            addingMessage(chatUserId, addMessageValue)
            setAddMessageValue('')
        }
    }

    return (
        <>
            <div className='navbar'></div>
            <div className='sidebar'>
                <div className='current_user'>{myNickName}</div>
                <div className='sidebar_options'>
                    <div className='direct_messages'>
                        {users.map(user =>
                            <User changeChatUser={changeChatUser} key={user.id} login={user.login} id={user.id}></User>
                        )}
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='conversation_header'>{chatUser}</div>
                <div className='messages'></div>
                <div className='add_message'>
                    {isConversationOpen &&
                        <div className='add_message_container'>
                            <input
                                className='add_message_input'
                                placeholder='Wyślij wiadomość'
                                onChange={changeAddCommentInput}
                                maxLength="100"
                                value={addMessageValue}>
                            </input>
                            <button className='add_message_button' onClick={addMessage}>Wyślij</button>
                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default MainPage;
