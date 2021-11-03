import React from 'react';
import AddItemForm from './AddItemForm';
import AddRubricForm from './AddRubric';


class AddForm extends React.Component{
    render(){
        return(
            <div>
                <div className='row justify-content-center' id='addForm'>
                    <AddItemForm/>
                    <AddRubricForm/>
                </div>
            </div>
        )
    }
}


export default AddForm