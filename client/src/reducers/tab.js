const INITIAL_STATE = {
    tab: [
        { path: '/', title: "Tous les utilisateurs" }, 
        { path: '/most-popular', title: "Les plus populaires" }, 
        { path: '/most-active', title: "Les plus actifs" }
    ],
    activeTab: '/'
};

export const tabReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_TAB':
            return { ...state, activeTab: action.payload };
            break;
    
        default:
            return state;
            break;
    }
};