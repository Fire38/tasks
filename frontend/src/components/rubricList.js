import React from 'react';
import { connect } from 'react-redux';

import { fetchRubrics } from '../components/actions/rubricActions';


class RubricList extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchRubrics());
    }

    render(){
        console.log('tut',this.props)
        return (
            <h1>Hello</h1>
        )
    }
}

const mapStateToProps = state => ({
    
    rubrics: state,
    loading: state.rubrics,
    error: state.rubrics
});

export default connect(mapStateToProps)(RubricList);