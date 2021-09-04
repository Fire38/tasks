import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AuthPage from './Auth/AuthPage';
import WorkPlace from './WorkPlace/WorkPlace';

import { autoLogin } from './actions/userActions';


class App extends React.Component {
    componentDidMount(){
        this.props.dispatch(autoLogin())
    }
    render(){
        return (
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userReducer: state.userReducer
})


export default connect(mapStateToProps)(App);

