import { combineReducers } from 'redux';
import rubricReducer from '../reducers/rubricReducer';
import userReducer from '../reducers/userReducer';


export default combineReducers({
    rubricReducer,
    userReducer
});