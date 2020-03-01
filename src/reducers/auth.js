const initialState = {
    isAuth: false
}

const reducer = (state=initialState, action) => {
    
    switch (action.type) {
        case 'AUTHENTICATED':
            return {
                ...state,
                isAuth: true
            }    
        default:
            return state;
    }
}

export default reducer;