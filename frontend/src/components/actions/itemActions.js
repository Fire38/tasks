import axiosInstance from '../../axiosApi';


export const GET_ITEMS_BEGIN = 'GET_ITEMS_BEGIN';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';


export const getItemsBegin = () => ({
    type: GET_ITEMS_BEGIN
});

export const getItemsSuccess = items => ({
    type: GET_ITEMS_SUCCESS,
    payload: { items }
});

export const getItemsFailure = error => ({
    type: GET_ITEMS_FAILURE,
    payload: { error }
});


export const getItems = (type, filter) => async dispatch => {
    try{
        const res = await axiosInstance.get('api/get-rubric-items/' + type + '/' + filter + '/');
        dispatch(getItemsSuccess(res.data))
        return res.data
    }catch(error){
        console.log('Ошибка при получение элементов', error)
    }
}

export const addRubricItem = (itemInfo) => async dispatch => {
    try{
        const res = await axiosInstance.post('api/add-rubric-items/', {
            data: itemInfo
        });
    }catch(error){
        console.log('Не получилось добавить элемент', error)
    }
}


export const editItems = (itemInfo) => async dispatch => {
    try{
        const res = await axiosInstance.put('api/add-rubric-items/',{
            data: itemInfo
        })
        if (res.status === 200){
            console.log(itemInfo.type, itemInfo.Filter)
            dispatch(getItems(itemInfo.type, itemInfo.filter))
        }
    }catch(error){
        console.log('Не получилось изменить элемент', error)
    }
}