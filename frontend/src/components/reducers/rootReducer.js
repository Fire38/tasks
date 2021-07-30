import { combineReducers } from 'redux';
import rubricReducer from '../reducers/rubricReducer';
import authReducer from '../reducers/authReducer';


export default combineReducers({
    rubricReducer,
    authReducer
});