import React, { Component } from 'react';
import './styles/instructions.css'


class Instructions extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="speech-bubble">
                    <p><strong>Welcome to Hogwarts!</strong></p>
                    <p>To play, choose a character on the setup page. From there you'll have to spend your Mana wisely to come up with a spell and defence strategy. After your setup is complete you will be pitted against an opponent in a wizard duel to the death. Take turns casting spells until one of you emerges victorious. Good luck!</p>
                </div>
                <div className='dumbledoreSpeech'>
                    <img src='https://i.ytimg.com/vi/X8rVAc5iAfk/hqdefault.jpg' alt='dumbledore'/>
                </div>
            </React.Fragment>
        );
    }
}


export default Instructions;