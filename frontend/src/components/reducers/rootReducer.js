import { combineReducers } from 'redux';
import rubricReducer from '../reducers/rubricReducer';
import userReducer from '../reducers/userReducer';
import itemReducer from '../reducers/itemReducer';


export default combineReducers({
    rubricReducer,
    userReducer,
    itemReducer
});