import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';


class WorkPlace extends React.Component {
    constructor(props){
        super(props);
        this.handleClickLogout = this.handleClickLogout.bind(this);
    }

    handleClickLogout(event){
        event.preventDefault();
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        this.props.dispatch(logoutUser())
    }

    render(){
        return (
            <div>
                <h3>Рабочая область, {this.props.userReducer.user.username}</h3>
                <button onClick={this.handleClickLogout} value='Выход'>Выход</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userReducer: state.userReducer
    }
}


export default connect(mapStateToProps)(WorkPlace);