import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRubrics } from '../../../actions/rubricActions';
import { getItems, editItems, getItemsSuccess } from '../../../actions/itemActions';
import { Item } from './item.js';

import EmptyBox from '../../../../../static/images/box.png'



export const WantList = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const dispatch = useDispatch();

    const items = useSelector(state => state.itemReducer.items)
    const rubrics = useSelector(state => state.rubricReducer.rubrics)

    useEffect(() => {
        dispatch(getRubrics());
        dispatch(getItems(props.type, selectedFilter))
    }, [])

    useEffect(() => {
        dispatch(getItems(props.type, selectedFilter))
    }, [props.type])

    const handleChange = (event) => {
        setSelectedFilter(event.target.value)
    }

    useEffect(() => {
        dispatch(getItems(props.type, selectedFilter))
    }, [selectedFilter])

    const getItem = (type, filter) => {
        dispatch(getItems(props.type, selectedFilter))
    }


    let itemsList = '';
    if (items.items){
        itemsList = items.items.map((item) => 
            <Item 
                key={ item.id } 
                itemElement={item} 
                type={props.type} 
                filter={selectedFilter} 
                getItem={getItem}
                onChangeClick={notify}
            />
        )
    }

    let rubricsList = '';
    if (rubrics.rubrics){
        rubricsList = rubrics.rubrics.map((element) =>
           <option key={ element.id } value={ element.id }>{ element.name }</option>   
       )
   }

   let noTasks = (
    <div className='col-xl-4 text-center'>
        <img src={ EmptyBox } style={{'height': '100px', 'width': '100px'}}/>
        <br/>
        Кажется здесь пусто:(
    </div>
);

    return (
        <div className='container-fluid' id="workSpace">
            <div id='wantList' className='row justify-content-center'>
                <nav className='d-sm-none d-block' aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">{ props.type == 'want' ? 'Запланировано' : 'Выполнено'}</li>
                    </ol>
                </nav>
                <div className='col-xl-4'>
                    <h5 className='text-center'>Фильтр</h5>
                    <select required className='form-select mb-3 mr-3 col-xl-3' name='selectedFilter' onChange={handleChange}>
                        <option value='all'>Все</option>
                        { rubricsList }
                    </select>
                </div>
            </div>
            <div id='itemList' className={'row justify-content-center ' + (itemsList.length !== 0 ? '' : 'align-items-center')}>
                {
                    itemsList.length !== 0 ?
                    <div className="accordion col-xl-4" id="accordionExample">
                        {itemsList}
                    </div>
                    : 
                    noTasks
                }
            </div>
        </div>
    )
}
