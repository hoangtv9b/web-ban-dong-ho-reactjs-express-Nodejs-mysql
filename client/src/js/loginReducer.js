const initialState = {
    loginUser: null
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loginUser: action.payload
            }
        case 'LOG_OUT_USER':
            return {
                ...state,
                loginUser: null
            }
        default:
            return state
    }
}
export default loginReducer;