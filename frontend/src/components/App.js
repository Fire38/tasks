import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import RubricList from './rubricList';
import AuthPage from './Auth/AuthPage';
import WorkPlace from './WorkPlace/WorkPlace';





class App extends React.Component {
    render(){
        return (

                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/login' render={(props) => (
                                this.props.logged_in ? <Redirect to='/' /> : <AuthPage />
                            )}/>
                            <Route path='/' render={(props) => (
                                this.props.logged_in ? <WorkPlace /> : <Redirect to='/login' />
                            )} />
                        </Switch>
                    </BrowserRouter>
                    <RubricList />
                </div>

        )
    }
}

const mapStateToProps = state => ({
    logged_in: state.authReducer.logged_in
})


export default connect(mapStateToProps)(App);

