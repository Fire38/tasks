import React from 'react';
import { connect } from 'react-redux';

import { fetchRubrics } from '../components/actions/rubricActions';


class RubricList extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchRubrics());
    }

    render(){
        console.log(this.props.rubrics)
        if (this.props.rubrics){
            return (
                <ul>
                    {this.props.rubrics.map((rubric) => (
                        <li key={rubric.id}>{rubric.name}</li>
                    ))}
                </ul>
            )
        } else{
            return (
                <h1>Privet</h1>
            )
        } 
    }
}

const mapStateToProps = state => ({
    
    rubrics: state.rubricReducer.rubrics.rubrics,
    loading: state.rubricReducer.loading,
    error: state.rubricReducer.error
});

export default connect(mapStateToProps)(RubricList);