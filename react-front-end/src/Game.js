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
      myCurrentSpell: '',
      oppCurrentSpell:'',
      attackPosition: null,
      gameOver: false,
      currentUsers: 0,
      spellDirection: 'spellAnimationDiv',
      round:1,
      opponentHit: false
    }
  }

  componentDidMount(){
    this.socket = socketIOClient('http://10.0.0.85:5000/');
    this.socket.on('updateCharacter', this.setOpponentChar);
    this.socket.on('newUser', this.socket.emit('updateCharacter', JSON.stringify(this.props.state.myCharacter)));
    this.socket.on('attack', this.opponentCast);
    this.socket.on('turnSetup', this.updateTurn);
    this.socket.on('defence', this.updateTurn);
    this.socket.on('endGame', this.endGame);
    this.socket.on('notification', this.incomingNotification );
    this.socket.on('disconnected', this.removeCharacter);
    this.socket.on('opponentHit', this.opponentHit);
  }
  opponentHit = () => {
    this.setState({opponentHit: true})
  }

  endGame = () => {
    this.setState({ gameOver: true });
    this.props.endGame(this.props.state.currentUser)
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
    this.setState({oppCurrentSpell:'', myCurrentSpell: spell, spellDirection:'spellAnimationLimit'}, () => {
      this.endPlayerTurn();
    })
  }

  updateTurn = () => {
    this.setState({myTurn: !this.state.myTurn, round: (this.state.round + 1)}, () => {
    })
  }

  opponentCast = (state) => {
    const parsedState = JSON.parse(state);
    const attackPosition = parsedState.attackPosition;
    const oppCurrentSpell = parsedState.myCurrentSpell;
    const round = parsedState.round;
    if ( attackPosition === this.props.state.myPosition) {
      if (this.state.myDefence <= 0) {
        this.setState({ gameOver: true });
        this.socket.emit('gameOver');
        console.log('YOU LOST!');
      }
      this.socket.emit('opponentHit');
      this.takeDamage(oppCurrentSpell.power);
      console.log("CURRENT SPEEEEELLL", oppCurrentSpell)
    }
    this.setState({spellDirection:'castSpellsReverse', oppCurrentSpell: oppCurrentSpell, round: round});
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
      if (this.state.myCurrentSpell.name === 'Protego') {
        this.boostDefence(this.state.myCurrentSpell.power);
        this.socket.emit('defence', JSON.stringify(this.state));
      } else {
        this.socket.emit('attack', JSON.stringify(this.state));
      }
      this.updateTurn();
      ;
    }
  }

  removeCharacter = () => {
    this.setState({ opponentChar: null });
  }

    render() {
      const { notifications, myCharacter } =  this.props.state
      return (
        <div className="App">
        <h1>{this.state.gameOver ?<NavLink  id='gameOver'to='/setup'>Your duel is at an end. Continue your journey here</NavLink>: ""}</h1>
          <div className='characterSection'>
            <div className='my-character-in-game'>
              < MyCharacter characterInfo={myCharacter} />
              <h1> {this.state.myDefence > 0 ? `Remaining Protection: ${this.state.myDefence}` : `Defence broken!` }</h1>
            </div>
            <div className='spells-in-game'>
              <SpellAnimation myCurrentSpell={this.state.myCurrentSpell.animation} oppCurrentSpell={this.state.oppCurrentSpell.rightAnimation} round={this.state.round} spellDirection={this.state.spellDirection}/>
              <h1 className='waiting'>{!this.state.opponentChar ? <img alt='loading' src={'/Loading.gif'}></img> : null}</h1>
            </div>
            <div className='my-opponent-in-game'>
              < OpponentCharacter charImg={this.state.opponentChar ? this.state.opponentChar.right_image : ''} />
            </div>
          </div>
          <div className="radio-pillbox2">
            <radiogroup>
              <div>
                  <label for="test3" className="radio-label">{this.state.myTurn ? 'Your turn, please aim your spell:' : (this.state.opponentHit ? <b id='HIT'>'You have hit your opponent!'</b> : '')}</label>
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
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.chooseSpell} userSpells={this.props.state.mySpells}
             endPlayerTurn={this.endPlayerTurn}/>
          </div>
         </div>

      );
    }
  }

  export default Game;

