import React, { Component } from 'react';
import './styles/login.css'
import { Redirect } from 'react-router'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newUser(this.state.user)
    }
    render() {
        return (
        this.props.state.currentUser ? (<Redirect to="/setup"/>) :
            <div className='login'>
                <div className='leftLogin'>
                    <div className="speech-bubble">
                    <p><strong>Welcome to Hogwarts!</strong></p>
                    <p>To play, choose a character on the setup page. From there you'll have to spend your Mana wisely to come up with a spell and defence strategy. After your setup is complete you will be pitted against an opponent in a wizard duel to the death. Take turns casting spells until one of you emerges victorious. Good luck!</p>
                </div>
                <div className='dumbledoreSpeech'>
                    <img className='instructions' src='/character_gifs/DI.gif' alt='instructionsgif'/>
                </div>
                </div>
                <div className='right'>
                    <form className='loginForm' onSubmit={this.handleSubmit.bind(this)}>
                        <label>
                            <input className='input' type="text" name="name" placeholder='Your name' onChange={(event) => this.setState({user: event.target.value})} />
                        </label>
                        <button type="submit" variant="outline-light" className='login-button' id='login-in-button' value="Alohomora">Alohomora</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Login;