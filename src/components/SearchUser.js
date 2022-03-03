import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import '../styles/SearchUser.css'
import { addSearchUser } from '../utils/Api';



function SearchUser(props) {

    const [searchUsers, setSearchUsers] = useState([]);

    const searchUser = async (value) => {
        let response = await addSearchUser(value)
        if (response.status === 404) {

        } else {
            let responseJson = response.json()
            let result = await responseJson
            setSearchUsers(result.users)
        }
    }
    const changeSearchUser = (e) => {
        searchUser(e.target.value)
    }
    const hideSearchedUsers = () => {
        setSearchUsers([])
    }
    const changeUser = (userLogin, userId) => {
        props.changeChatUser(userLogin, userId)
        hideSearchedUsers()
    }

    return (
        <ClickAwayListener onClickAway={hideSearchedUsers}>
            <div>
                <input type='text' placeholder="Szukaj" className="searchUserInput" onChange={changeSearchUser}></input>
                <div className='searchedUsersContainer'>{searchUsers.map(user =>
                    <div onClick={() => changeUser(user.login, user.id)} className="searchedUser" key={user.id}>{user.login}</div>
                )}
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default SearchUser;