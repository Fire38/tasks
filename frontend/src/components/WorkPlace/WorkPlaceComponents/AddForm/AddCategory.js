import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRubric } from '../../../actions/rubricActions';


export const AddRubricForm = () => {
    const [rubricName, setRubricName] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        event.preventDefault();
        setRubricName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addRubric(rubricName))
        setRubricName('')
    }

    return (
        <div className='row justify-content-center' id='addForm'>
            <div className='col-xl-3 col-xs-12 mt-3'>
                <form method='POST' onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        className="form-control mb-3"
                        placeholder="Введите название рубрики"
                        name='rubricName'
                        value={rubricName}
                        onChange={handleChange}
                        autoComplete='off'
                        required
                    />
                    <button type="submit" className="btn btn-primary bg-success font-weight-bold col-12">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

