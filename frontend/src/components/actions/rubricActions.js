import axios from 'axios';
import axiosInstance from '../../axiosApi';


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
            data: rubricInfo
        });
    }catch(error){
        console.log('Не получилось добавить рубрику', error)
    }
}