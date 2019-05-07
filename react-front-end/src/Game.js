import React, { Component } from 'react';
import './styles/App.css';
import PlayerSpellList from "./PlayerSpellList.js";
import NotificationBar from "./NotificationBar.js";
import MyCharacter from './MyCharacter.js'
import OpponentCharacter from './OpponentCharacter.js';
import SpellAnimation from './SpellAnimation.js'
import socketIOClient from "socket.io-client";
import { NavLink } from 'react-router-dom'




class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opponentChar: null,
      myDefence: 10,
      opponentImg: '',
      myTurn: false,
      currentSpell: '',
      attackPosition: null,
      gameOver: false,
      currentUsers: 0,
      spellDirection: 'castSpells'
    }
  }

  componentDidMount(){
    this.socket = socketIOClient('http://localhost:5000/');
    this.socket.on('updateCharacter', this.setOpponentChar);
    this.socket.on('newUser', this.socket.emit('updateCharacter', JSON.stringify(this.props.state.myCharacter)));
    this.socket.on('attack', this.opponentCast);
    this.socket.on('turnSetup', this.updateTurn);
    this.socket.on('defence', this.updateTurn);
    this.socket.on('endGame', this.endGame);
    this.socket.on('notification', this.incomingNotification );
    this.socket.on('disconnected', this.removeCharacter);
  }

  endGame = () => {
    this.setState({ gameOver: true });
  }

  choosePosition = (e) => {
    let numberified = Number(e.target.value);
    this.setState({ attackPosition: numberified }, () => {
        console.log(this.state.attackPosition);
    });
  }

  setOpponentChar = (char) => {
    this.setState({
      opponentChar: JSON.parse(char)
    })
  }
  chooseSpell = (spell) => {
    // this.setState({spellDirection: 'castSpells'})
    this.setState({currentSpell: spell}, () => {
      this.endPlayerTurn();
    })
  }

  updateTurn = () => {
    this.setState({ myTurn: !this.state.myTurn}, () => {
        console.log('Turn state is now: ', this.state.myTurn)
    })
  }

  opponentCast = (state) => {
    const { attackPosition, currentSpell} = JSON.parse(state);
    if ( attackPosition === this.props.state.myPosition) {
      if (this.state.myDefence <= 0) {
        this.setState({ gameOver: true });
        this.socket.emit('gameOver');
        console.log('YOU LOST!');
      }
      this.takeDamage(currentSpell.power);
      console.log("CURRENT SPEEEEELLL", currentSpell)
    }
    this.setState({spellDirection:'castSpellsReverse', currentSpell: currentSpell});
    this.updateTurn();
  }

  takeDamage = (power) => {
    this.setState({ myDefence: this.state.myDefence - power })
  }

  boostDefence = (power) => {
    this.setState({ myDefence: this.state.myDefence + power })
  }

  endPlayerTurn = () => {
    if (this.state.myTurn) {
      if (this.state.currentSpell.name === 'Protego') {
        this.boostDefence(this.state.currentSpell.power);
        this.socket.emit('defence', JSON.stringify(this.state));
      } else {
        this.socket.emit('attack', JSON.stringify(this.state));
      }
      // this.updateTurn();
      this.socket.emit('notification', JSON.stringify({ notification: { user: this.props.state.currentUser, spell: this.state.currentSpell}}));
    }
  }

  removeCharacter = () => {
    this.setState({ opponentChar: null });
  }

    render() {
      const { notifications, myCharacter } =  this.props.state
      return (
        <div className="App">
          <div className='characterSection'>
            <div className='my-character-in-game'>
              < MyCharacter characterInfo={myCharacter} />
              <h1>Remaining Health:{this.state.myDefence}</h1>
            </div>
            <div className='spells-in-game'>
              <SpellAnimation currentSpell={this.state.currentSpell.animation} />
              <h1 className='waiting'>{!this.state.opponentChar ? 'Waiting for player..' : ''}</h1>
            </div>
            <div className='my-opponent-in-game'>
              < OpponentCharacter charImg={this.state.opponentChar ? this.state.opponentChar.right_image : ''} />
            </div>
          </div>
          <div className="radio-pillbox2">
            <radiogroup>
              <div>
                  <label for="test3" className="radio-label">{this.state.myTurn ? 'Your turn, please aim your spell:' : ''}</label>
              </div>
              <div>
                  <input value="1" type="radio" name="radio-group" id="test" onClick={this.choosePosition}>
                  </input>
                  <label for="test" className="radio-label">
                    {this.state.myTurn ? '🧙‍♀️ Postion 1' : ''}
                  </label>
              </div>
              <div>
                  <input value="2" type="radio" name="radio-group" id="test2" onClick={this.choosePosition}>
                  </input>
                  <label for="test2" className="radio-label">{this.state.myTurn ? '🧙‍♂️ Postion 2' : ''}
                  </label>
              </div>
              <div>
                  <input value="3" type="radio" name="radio-group" id="test3" onClick={this.choosePosition}>
                  </input>
                  <label for="test3" className="radio-label">{this.state.myTurn ? '🧙‍♀️Postion 3' : 'Your Opponent is casting'}</label>
              </div>
            </radiogroup>
          </div>
        <h1>{this.state.gameOver ?<NavLink to='/setup'>GAME OVER!! Click to play again!</NavLink>: ""}</h1>
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.chooseSpell} userSpells={this.props.state.mySpells}
             endPlayerTurn={this.endPlayerTurn}/>
            < NotificationBar notifications={notifications} />
          </div>


          {/* <div>
            <h1>{ this.props.state.message }, {this.state.myTurn ? 'Your turn' : 'Enemy Turn'}</h1>
            <button onClick={this.fetchData} >
              {this.state.myTurn ? 'Your turn' : 'Enemy Turn'}
            </button>
          </div> */}
        </div>

      );
    }
  }

  export default Game;

