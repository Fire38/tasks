import React from 'react';
import { connect } from 'react-redux';

import { getRubrics } from '../../../actions/rubricActions';
import { addRubricItem } from '../../../actions/itemActions';


class AddItemForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            description: '',
            selectedRubric: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(getRubrics())
    }

    handleChange(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch(addRubricItem(this.state))
        this.setState({
            name:'',
            description: '',
            selectedRubric: ''
        })
    }



    render(){
        let rubrics = ''
        if (this.props.rubricReducer.rubrics.rubrics){
             rubrics = this.props.rubricReducer.rubrics.rubrics.map((element) =>
                <option key={ element.id } value={ element.id }>{ element.name }</option>   
            )
        }

        return(
            <div className='col-xl-3 col-xs-12 mt-3'>
                <h5 className='text-center'>Цель</h5>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <select required className='form-select mb-3' name='selectedRubric' onChange={this.handleChange}>
                            <option></option>
                            { rubrics }
                        </select>
                        <input 
                            type="text"
                            className="form-control mb-3"
                            placeholder="Введите название цели"
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                        <div className="form-floating mb-3">
                            <textarea 
                                className="form-control"
                                placeholder="Введите краткое описание цели"
                                id="floatingTextarea"
                                name='description'
                                value={this.state.description}
                                onChange={this.handleChange}>
                            </textarea>
                            <label htmlFor="floatingTextarea">Введите краткое описание</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Добавить цель</button>
                    </div>
                </form>
            </div>

        )
    }
}


function mapStateToProps(state){
    return {
        rubricReducer: state.rubricReducer
    }
}


export default connect(mapStateToProps)(AddItemForm)