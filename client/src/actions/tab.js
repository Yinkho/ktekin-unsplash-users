export const goToTab = (tab, history) => {
    return dispatch => {
        dispatch(() => history.push(`${tab}`))
    };
}

export const setTab = tab => {
    return {
        type: 'SET_TAB',
        payload: tab
    };
}