import axiosInstance from '../../axiosApi';


const loginUser = (payload) => ({ type: 'LOGIN_USER', payload })

export const logoutUser = () => ({type: 'LOGOUT'})

export const loginError = (error) => ({type: 'ERROR', error})


export const fetchUser = (userInfo) => async dispatch => {
    try{
        const res = await axiosInstance.post('/auth/token/obtain/',{
            username: userInfo.username,
            password: userInfo.password
        });
        axiosInstance.defaults.headers['Authorization'] = 'JWT ' + res.data.access;
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        dispatch(autoLogin())
        return res
    } catch (error) {
        dispatch(loginError(error.message))
    }
}

export const registerUser = (userInfo) => async dispatch => {
    try{
        const res = await axiosInstance.post('/auth/user/create/', {
            username: userInfo.username,
            password: userInfo.password,
        });
        if (res.status === 201){
            const res = await axiosInstance.post('/auth/token/obtain/', {
                username: userInfo.username,
                password: userInfo.password
            });
            axiosInstance.defaults.headers['Authorization'] = 'JWT ' + res.data.access
            localStorage.setItem('access_token', res.data.access);
            localStorage.stItem('refresh_token', res.data.refresh);
            dispatch(autoLogin())
            return data
        }
    } catch(error){
        console.log('Ошибка регистрации', error)
    }
}



export const autoLogin = () => async dispatch => {
    try{
        const res = await axiosInstance.get('auth/get_user/')
        dispatch(loginUser(res.data))
    }catch(error){
        console.log('autologin', error)
    }
}