import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRubrics } from '../../../actions/rubricActions';
import { addRubricItem } from '../../../actions/itemActions';


export const AddItemFormFunc = () => {
    const [item, setItem] = useState({
        title: '',
        description: '',
        selectedRubric: ''
    });
    const dispatch = useDispatch();
    const rubrics = useSelector(state => state.rubricReducer.rubrics)

    const handleChange = (event) => {
        setItem({
            ...item,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addRubricItem(item))
        setState({
            title: '',
            description: '',
            selectedRubric: ''
        })
    }

    let rubricList = ''
    if (rubrics){
        rubricList = rubrics.rubrics.map((element) =>
            <option key={ element.id } value={ element.id }>{ element.name }</option>   
        )
    }

    return (
        <div className='row justify-content-center' id='addForm'>
            <div className='col-xl-3 col-xs-12 mt-3'>
                <form method='POST' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <select required defaultValue='' className='form-select mb-3' name='selectedRubric' onChange={handleChange}>
                            <option value='' hidden>Выберите из списка рубрику</option>
                            { rubricList }
                        </select>
                        <input 
                            type="text"
                            className="form-control mb-3"
                            placeholder="Введите название"
                            name='title'
                            value={item.title}
                            onChange={handleChange}
                            required
                            autoComplete='off'
                        />
                        <div className="form-floating mb-3">
                            <textarea 
                                className="form-control"
                                placeholder="Введите краткое описание цели"
                                id="floatingTextarea"
                                name='description'
                                value={item.description}
                                onChange={handleChange}>
                            </textarea>
                            <label htmlFor="floatingTextarea">Введите краткое описание</label>
                        </div>
                        <button type="submit" className="btn btn-primary bg-success font-weight-bold col-12">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
