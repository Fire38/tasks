import axios from 'axios';
import axiosInstance from '../../axiosApi';


export const FETCH_RUBRICS_BEGIN = 'FETCH_RUBRICS_BEGIN';
export const FETCH_RUBRICS_SUCCESS = 'FETCH_RUBRICS_SUCCESS';
export const FETCH_RUBRICS_FAILURE = 'FETCH_RUBRICS_FAILURE';
export const ADD_RUBRIC_FAILURE = 'ADD_RUBRIC_FAILURE';
export const ADD_RUBRIC_SUCCESS = 'ADD_RUBRIC_SUCCESS'


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


export const addRubricFailure = error => ({
    type: ADD_RUBRIC_FAILURE,
    payload: { error }
});

export const addRubricSuccess = () => ({
    type: ADD_RUBRIC_SUCCESS
})



export const getRubrics = () => async dispatch => {
    try{
        const res = await axiosInstance.get('api/get-rubrics')
        dispatch(fetchRubricsSuccess(res.data))
        return res.data
    }catch(error){
        console.log('Ошибка получения рубрик', error)
    }

}


export const addRubric = (rubricInfo) => async dispatch => {
    try{
        const res = await axiosInstance.post('api/add-rubric/', {
            rubricName: rubricInfo
        });
        if (res.status === 201){
            dispatch(addRubricSuccess())
        }
    }catch(error){
        dispatch(addRubricFailure(error))

        console.log('ЭТА ШТУКА ОТРАБОТАЛА')

    }
}