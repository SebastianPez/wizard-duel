import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './styles/navigation.css';


class Navigation extends Component {
    render() {
        return (
            <div className='navBar'>
                <img className='header' src="https://fontmeme.com/permalink/190502/bb8fb54ee7eceec3e1a778427c288146.png" alt='header' />
            </div>
        );
    }
}


export default Navigation;



