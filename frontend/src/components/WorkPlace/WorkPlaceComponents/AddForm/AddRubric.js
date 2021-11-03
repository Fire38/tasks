import React from 'react';
import { connect } from 'react-redux';
import { addRubric } from '../../../actions/rubricActions';


class AddRubricForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rubricName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch(addRubric(this.state))
        this.setState({rubricName: ''})
    }

    render(){
        return(
            <div className='col-xl-3 col-xs-12 mt-3'>
                <h5 className='text-center'>Рубрика</h5>
                <form method='POST' onSubmit={this.handleSubmit}>
                            <input 
                                type="text"
                                className="form-control mb-3"
                                placeholder="Введите название рубрики"
                                name='rubricName'
                                value={this.state.rubricName}
                                onChange={this.handleChange}
                                required
                            />
                        <button type="submit" className="btn btn-primary">Добавить рубрику</button>
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

export default connect(mapStateToProps)(AddRubricForm)