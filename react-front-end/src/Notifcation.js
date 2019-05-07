import React, { Component } from 'react';
import './styles/navigation.css';

class Notification extends Component {
    render() {
        return (

            <div>
                <h4>{this.props.message}</h4>
            </div>


        );
    }
}


export default Notification;