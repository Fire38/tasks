import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';
import { slide as Menu } from 'react-burger-menu';

import logo from '../../../../static/images/task.png';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        }

    }

    closeMenu(){
        this.setState({menuOpen: false})
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    render() {
        return (
            <div>
                <nav className='nav navbar-expand-sm navbar-light bg-success sticky-top col-12' id='navBar' style={{"backgroundColor": '#034f6d'}}>
                    <a className='navbar-brand d-none d-sm-block' href='/'><img style={{'marginLeft': '5px'}} src={logo}/></a>
                    <div className='collapse navbar-collapse'>
                        <li className='nav-item text-center d-block d-sm-none'>
                            Привет
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink 
                                to='want' 
                                className='nav-link font-weight-bold text-white'
                                activeStyle={{fontWeight: "bold"}}>
                                    Запланировано
                            </NavLink>
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink 
                                to='done'
                                className='nav-link font-weight-bold text-white'
                                activeStyle={{fontWeight: "bold"}}>
                                    Выполнено
                            </NavLink>
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink 
                                to='add-rubric' 
                                className='nav-link font-weight-bold text-white'
                                activeStyle={{fontWeight: "bold"}}>
                                    Добавить категорию
                            </NavLink>
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink 
                                to='add-target' 
                                className='nav-link font-weight-bold text-white'
                                activeStyle={{fontWeight: "bold"}}>
                                    Добавить цель
                            </NavLink>
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink 
                                to='/login' 
                                className='nav-link font-weight-bold text-white' 
                                onClick={() => this.props.dispatch(logoutUser())}
                                activeStyle={{fontWeight: "bold"}}>
                                    Выйти
                            </NavLink>
                        </li>
                    </div>
                </nav>
                <div className='d-sm-none d-block' id='forhHamburgerMenu'>
                    <Menu
                        right 
                        width={ '70%' }
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}>
                        <li className="nav-item text-center">
                            <NavLink to="want" className="nav-link font-weight-bold text-white" onClick={() => this.closeMenu()}>Запланировано</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to="done" className="nav-link font-weight-bold text-white" onClick={() => this.closeMenu()}>Выполнено</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to='add-rubric' className='nav-link font-weight-bold text-white' onClick={() => this.closeMenu()}>Добавить категорию</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to='add-target' className='nav-link font-weight-bold text-white' onClick={() => this.closeMenu()}>Добавить цель</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to='/login' className='nav-link font-weight-bold text-white' onClick={() => this.props.dispatch(logoutUser())}>Выйти</NavLink>
                        </li>
                    </Menu>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userReducer: state.userReducer
    }
}


export default connect(mapStateToProps)(Nav);