import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRubricSuccess, addRubricFailure } from '../../../actions/rubricActions';

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axiosInstance from '../../../../axiosApi';


export const AddRubricForm = () => {
    const [rubricName, setRubricName] = useState('');
    const dispatch = useDispatch();
    const rubricsReducer = useSelector(state => state.rubricReducer)
    
    
    const handleChange = (event) => {
        event.preventDefault();
        setRubricName(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try{
            const res = await axiosInstance.post('api/add-rubric/', {
                rubricName: rubricName
            })
            if (res.status === 201){
                dispatch(addRubricSuccess())
                setRubricName('')
                notify()
            }
        }catch(error){
            dispatch(addRubricFailure)
            notify(error)
        }
    }
  
    const notify = (error=null) => {
        error == null ? 
            toast("Категория успешно добавлена",{
                type: 'success',
                autoClose: 3000,
            })
            :
            toast("Категория не добавлена " + error,{
                type: 'error',
                autoClose: 3000,
            });  
    } 


    return (
        <div className='row justify-content-center' id='addForm'>
            <div className='col-xl-3 col-xs-12 mt-3'>
                <form method='POST' onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="form-control mb-3"
                        placeholder="Введите название категории"
                        name='rubricName'
                        value={rubricName}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                    />
                    <button type="submit" className="btn btn-primary bg-success font-weight-bold col-12">Сохранить</button>
                </form>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                transition={Flip}
            />
        </div>
    )
}

