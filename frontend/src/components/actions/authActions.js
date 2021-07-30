export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const loginBegin = () => ({
    type: LOGIN_BEGIN
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
})