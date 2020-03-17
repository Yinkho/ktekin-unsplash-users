import axios from 'axios';

export const getUsers = () => {
    return dispatch => {
        axios.get('/api').then(usersData => {
            dispatch(setUsers(([ ...usersData.data ])))
        })
        .catch(err => 'ERROR ' + err)
    }
}

export const setUsers = users => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}

export const getMostPopular = () => {
    return dispatch => {
        axios.get('/api/most-popular').then(usersData => {
            dispatch(setMostPopular(([ ...usersData.data ])))
        })
        .catch(err => 'ERROR ' + err)
    }
}

export const setMostPopular = users => {
    return {
        type: 'SET_MOSTPOPULAR',
        payload: users
    }
}

export const getMostActive = () => {
    return dispatch => {
        axios.get('/api/most-active').then(usersData => {
            dispatch(setMostActive(([ ...usersData.data ])))
        })
        .catch(err => 'ERROR ' + err)
    }
}

export const setMostActive = users => {
    return {
        type: 'SET_MOSTACTIVE',
        payload: users
    }
}