export const loginUser = (loginItem) => {
    return {
        type: 'LOGIN_USER',
        payload: loginItem
    }
}