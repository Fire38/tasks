import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';
import { slide as Menu } from 'react-burger-menu';



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
                <nav className='nav navbar-expand-sm navbar-light bg-light sticky-top col-12' style={{"backgroundColor": '#034f6d'}}>
                    <a className='navbar-brand d-none d-sm-block' href='/'><img src='../../../static/images/growth.png'/></a>
                    <div className='collapse navbar-collapse'>
                        <li className='nav-item text-center d-block d-sm-none'>
                            Привет
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink to='want' className='nav-link'>Хочу</NavLink>
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink to='done' className='nav-link'>Выполнено</NavLink>
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink to='add' className='nav-link'>Добавить</NavLink>
                        </li>
                        <li className='nav-item text-center'>
                            <NavLink to='/login' className='nav-link' onClick={() => this.props.dispatch(logoutUser())}>Выйти</NavLink>
                        </li>
                    </div>
                </nav>
                <div className='d-sm-none d-block' id='forhHamburgerMenu'>
                    <Menu 
                        right 
                        noOverlay
                        width={ '70%' }
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}>
                        <li className="nav-item text-center">
                            <NavLink to="want" className="nav-link" onClick={() => this.closeMenu()}>Хочу</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to="done" className="nav-link" onClick={() => this.closeMenu()}>Выполнено</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to='add' className='nav-link' onClick={() => this.closeMenu()}>Добавить</NavLink>
                        </li>
                        <li className="nav-item text-center">
                            <NavLink to='/login' className='nav-link' onClick={() => this.props.dispatch(logoutUser())}>Выйти</NavLink>
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