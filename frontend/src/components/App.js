import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AuthPage from './Auth/AuthPage';
import { WorkPlace } from './WorkPlace/WorkPlace';

import { autoLogin } from './actions/userActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../../static/css/base.css';


class App extends React.Component {
    componentDidMount(){
        this.props.dispatch(autoLogin())
    }
    
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' render={(props) => (
                        this.props.userReducer.loggedIn ? <Redirect to='/' /> : <AuthPage />
                    )}/>
                    <Route path='/' render={(props) => (
                        this.props.userReducer.loggedIn ? <WorkPlace /> : <Redirect to='/login/' />
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({
    userReducer: state.userReducer
})


export default connect(mapStateToProps)(App);

