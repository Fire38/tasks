import {
    GET_ITEMS_BEGIN,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAILURE
} from '../actions/itemActions';

const initialState = {
    items: [],
    loading: false,
    error: null
}

export default function itemReducer(state=initialState, action) {
    switch (action.type) {
        case GET_ITEMS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case GET_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        default:
            return state
    }
}