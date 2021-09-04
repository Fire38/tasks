export const FETCH_RUBRICS_BEGIN = 'FETCH_RUBRICS_BEGIN';
export const FETCH_RUBRICS_SUCCESS = 'FETCH_RUBRICS_SUCCESS';
export const FETCH_RUBRICS_FAILURE = 'FETCH_RUBRICS_FAILURE';


export const fetchRubricsBegin = () => ({
    type: FETCH_RUBRICS_BEGIN
});

export const fetchRubricsSuccess = rubrics => ({
    type: FETCH_RUBRICS_SUCCESS,
    payload: { rubrics }
});


export const fetchRubricsFailure = error => ({
    type: FETCH_RUBRICS_FAILURE,
    payload: { error }
});


export function fetchRubrics() {
    return dispatch => {
        dispatch(fetchRubricsBegin());
        return fetch('api/rubrics')
        .then(res => res.json())
        .then(json => {
            dispatch(fetchRubricsSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchRubricsFailure(error)));
    };
}