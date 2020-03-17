const INITIAL_STATE = {
    users: [],
    mostPopular: [],
    mostActive: []
};

export const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload };
            break;

        case 'SET_MOSTPOPULAR':
            return { ...state, mostPopular: action.payload };
            break;

        case 'SET_MOSTACTIVE':
            return { ...state, mostActive: action.payload };
            break;
    
        default:
            return state;
            break;
    }
};