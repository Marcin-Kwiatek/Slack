import generateId from '../utils/generateId';
import currentDate from '../utils/currentDate';


export const signUp = (login, password) => {
    return fetch(`http://localhost:5000/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: generateId(), login: login, password: password })
    })
}
export const signIn = (login, password) => {
    return fetch(`http://localhost:5000/signIn`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: login, password: password })
    })
}
export const getUsers = () => {
    return fetch(`http://localhost:5000/users`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem("accessToken")
        },
    })
}
export const getMyNickName = () => {
    return fetch(`http://localhost:5000/myNickName`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem("accessToken")
        },
    })
}
export const addingMessage = (chatUserId, addMessageValue) => {
    return fetch(`http://localhost:5000/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem("accessToken")
        },
        body: JSON.stringify({ id: generateId(), chatUserId: chatUserId, addMessageValue: addMessageValue, date: currentDate()})
    })
}
export const getMessages = (chatUserId) => {
    return fetch(`http://localhost:5000/${chatUserId}/messages`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem("accessToken")
        },
    })
}
export const addSearchUser = (value) => {
    return fetch(`http://localhost:5000/searchUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: value })
    })
}