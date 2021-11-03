const initialState = {
    loggedIn: false,
    error: false,
    errorMessage: '',
    user: {},
    displayForm: 'login'
}


const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loggedIn: true,
                error: false,
                user: {...action.payload}
            }
        case 'LOGOUT':
            localStorage.clear()
            return {
                ...state,
                loggedIn: false,
                user: {}
            }
        case 'ERROR':
            return {
                ...state,
                error: true,
                errorMessage: action.payload.error
            }
        case 'DISPLAY_FORM':
            return {
                ...state,
                displayForm: action.form
            }
        default:
            return state
    }
}


export default userReducer