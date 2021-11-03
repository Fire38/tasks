import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import  Nav  from './Navbar/Navbar';
import WantList from './WorkPlaceComponents/TargetList/wantList';
import AddForm from './WorkPlaceComponents/AddForm/AddForm';

import { Switch, Route } from 'react-router-dom';



class WorkPlace extends React.Component {

    render(){
        return (
            <div className="container-fluid"> 
                <Nav/>
                <Switch>
                    <Route exact path='/'>
                        <WantList type={'want'} />
                    </Route>
                    <Route path='/want'>
                        <WantList type={'want'}/>
                    </Route>
                    <Route path='/done'>
                        <WantList type={'done'}/>
                    </Route>
                    <Route path='/add'>
                        <AddForm/>
                    </Route>
                </Switch>
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