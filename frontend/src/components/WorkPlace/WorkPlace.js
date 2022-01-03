import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
import  Nav  from './Navbar/Navbar';
import { WantList } from './WorkPlaceComponents/TargetList/wantList';
import { AddRubricForm } from './WorkPlaceComponents/AddForm/AddCategory';
import { AddItemForm } from './WorkPlaceComponents/AddForm/AddItemForm';

import { Switch, Route } from 'react-router-dom';


export const WorkPlace = () => {
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
                    <AddItemForm/>
                </Route>
            </Switch>
        </div>
    )
}
