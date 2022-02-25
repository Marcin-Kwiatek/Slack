import generateId from '../utils/generateId';

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