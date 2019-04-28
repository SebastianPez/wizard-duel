import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className='navBar'>
                <NavLink exact to='/' className='link'>Login</NavLink>
                <NavLink to='/instructions' className='link'>Instructions</NavLink>
                <img className='header' src='https://fontmeme.com/temporary/c34cfe1ad15a3705f4278ca1adce79f1.png' alt='header'/>
                <NavLink to='/game' className='link'>Game</NavLink>
                <NavLink to='/setup' className='link'>Setup</NavLink>
            </div>
        );
    }
}


export default Navigation;


