import {
    FETCH_RUBRICS_BEGIN,
    FETCH_RUBRICS_SUCCESS,
    FETCH_RUBRICS_FAILURE,
    ADD_RUBRIC_FAILURE,
    ADD_RUBRIC_SUCCESS
} from '../actions/rubricActions';

const initialState = {
    rubrics: [],
    loading: false,
    error: null
}

export default function rubricReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_RUBRICS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_RUBRICS_SUCCESS:
            return {
                ...state,
                loading: false,
                rubrics: action.payload
            }
        case FETCH_RUBRICS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                rubrics: []
            }
        case ADD_RUBRIC_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        case ADD_RUBRIC_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        default:
            return state
    }
}