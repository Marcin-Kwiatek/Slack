import React, { useState, useEffect } from 'react';
import '../styles/mainPage.css'
import { getUsers } from '../utils/Api';
import User from './User';
import { getMyNickName, addingMessage, getMessages } from '../utils/Api';
import ClickAwayListener from 'react-click-away-listener';
import { useHistory } from "react-router-dom";
import SearchUser from './SearchUser';






function MainPage() {

    const [users, setUsers] = useState([]);
    const [myNickName, setMyNickName] = useState([]);
    const [chatUser, setChatUser] = useState(null);
    const [chatUserId, setChatUserId] = useState(null);
    const [isConversationOpen, setisConversationOpen] = useState(false);
    const [addMessageValue, setAddMessageValue] = useState('')
    const [messages, setMessages] = useState([]);
    const [isProfileDropdownMenuOpen, setIsProfileDropdownMenuOpen] = useState(false);

    const history = useHistory()

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
        getMessages(id)
            .then(function (response) { return response.json() })
            .then((data) => {
                console.log(data.data)
                if (data.data === undefined) {
                    setMessages([])
                }
                else {
                    setMessages(data.data)
                }
            })
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
    const showProfileDropdownMenu = () => {
        setIsProfileDropdownMenuOpen(true)
    }
    const hideProfileDropdownMenu = () => {
        setIsProfileDropdownMenuOpen(false)
    }
    const LogOut = () => {
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('accessToken');
        history.push("/SignIn");
    }


    return (
        <>
            <div className='navbar'>
                <SearchUser changeChatUser={changeChatUser}></SearchUser>
            </div>
            <div className='sidebar'>
                {isProfileDropdownMenuOpen &&
                    <ClickAwayListener onClickAway={hideProfileDropdownMenu}>
                        <div className='profile_dropdown_menu_options' >
                            <div className='profile_dropdown_menu_option' onClick={LogOut}>Log Out</div>
                        </div>
                    </ClickAwayListener>
                }
                <div className='current_user' onClick={showProfileDropdownMenu}>{myNickName}</div>
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
                <div className='messages'>
                    {messages.map(message =>
                        <div key={message.id} className='message'>
                            <div className='message_sender'>{message.login}</div>
                            <div className='message_text'>{message.text}</div>
                        </div>
                    )}
                </div>
                <div className='add_message'>
                    {isConversationOpen &&
                        <div className='add_message_container'>
                            <input
                                className='add_message_input'
                                placeholder='Wy??lij wiadomo????'
                                onChange={changeAddCommentInput}
                                maxLength="100"
                                value={addMessageValue}>
                            </input>
                            <button className='add_message_button' onClick={addMessage}>Wy??lij</button>
                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default MainPage;
