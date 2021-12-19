import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import  Nav  from './Navbar/Navbar';
import WantList from './WorkPlaceComponents/TargetList/wantList';
import { AddRubricForm } from './WorkPlaceComponents/AddForm/AddCategory';
import {AddItemForm, AddItemFormFunc} from './WorkPlaceComponents/AddForm/AddItemForm';

import { Switch, Route } from 'react-router-dom';



class WorkPlace extends React.Component {
    render(){
        return (
            <div> 
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
                    <Route path='/add-rubric'>
                        <AddRubricForm/>
                    </Route>
                    <Route path='/add-target'>
                        <AddItemFormFunc/>
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