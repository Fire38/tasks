import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editItems } from '../../../actions/itemActions';



export const Item = (props) => {
    const [isChecked, setIsChecked] = useState(props.itemElement.done);
    const dispatch = useDispatch();


    const handleCheckbox = (event) => {
        setIsChecked(event.target.checked)
        props.onChangeClick();
    }

    useEffect(() => {
        dispatch(editItems({'id': props.itemElement.id,
        'done': isChecked,
        'type': props.type,
        'filter': props.filter    
        }))
    }, [isChecked])
    
    
    let idForButton = '#collapse' + props.itemElement.id 
    let idForAccordion = 'collapse' + props.itemElement.id

    return (
        <div className="accordion-item border-0" key={props.itemElement.id}>
            <h2 className="accordion-header " id="sdfgsdfs">
                <div className='d-flex'>
                    <div className='flex-fill'>
                        <h5 className="accordion-button rounded-5" id='accordion-h' type="button" data-bs-toggle="collapse" data-bs-target={idForButton} aria-expanded="true" aria-controls="collapseOne">
                            {props.itemElement.name}
                        </h5>
                    </div>
                    <div className='d-flex align-items-center' id='checkbox'>
                        <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" defaultChecked={props.itemElement.done} onChange={handleCheckbox}/>
                    </div>
                </div>
            </h2>
            <div id={idForAccordion} className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                { props.itemElement.description ? props.itemElement.description : 'Нет описания'}
            </div>
            </div>
        </div>
    )
}
