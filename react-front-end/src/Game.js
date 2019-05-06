import React, { Component } from 'react';
import './styles/App.css';
import PlayerSpellList from "./PlayerSpellList.js";
import NotificationBar from "./NotificationBar.js";
import MyCharacter from './MyCharacter.js'
import OpponentCharacter from './OpponentCharacter.js';
import socketIOClient from "socket.io-client";
import { NavLink } from 'react-router-dom'




class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opponentChar: null,
      myDefence: 10,
      myTurn: false,
      currentSpell: '',
      attackPosition: null,
      gameOver: false
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
    this.socket.on('disconnected', this.removeCharacter);
  }

  endGame = () => {
    this.setState({ gameOver: true });
  }

  removeCharacter = () => {
    this.setState({ opponentChar: null });
  }

  choosePosition = (e) => {
    let numberified = Number(e.target.value);
    this.setState({ attackPosition: numberified }, () => {
    });
  }

  setOpponentChar = (char) => {
    this.setState({
      opponentChar: JSON.parse(char)
    })
  }
  chooseSpell = (spell) => {
    this.setState({currentSpell: spell}, () => {
    })
    // this.setState({currentSpell: spell})
  }

  updateTurn = () => {
    this.setState({ myTurn: !this.state.myTurn}, () => {
    })
  }

  opponentCast = (state) => {
    const { attackPosition, currentSpell} = JSON.parse(state);
    if ( attackPosition === this.props.state.myPosition) {
      if (this.state.myDefence <= 0) {
        this.setState({ gameOver: true });
        this.socket.emit('gameOver');
      }
      this.takeDamage(currentSpell.power);
    }
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
      this.updateTurn();
      this.props.newNotification(this.state.currentSpell.name);
      // console.log(this.state.myTurn, this.state.currentSpell);
    }
  }

    render() {
      console.log('this.state.opponentchar', this.state.opponentChar)

      // console.log('current state', this.props.state)
      const { notifications, myCharacter } =  this.props.state
      return (
        <div className="App">
        <h1>{this.state.gameOver ?<NavLink to='/setup'>GAME OVER!! Click to play again!</NavLink>: ""}</h1>
          <div className='infoBar'>
            < PlayerSpellList chooseSpell={this.chooseSpell} userSpells={this.props.state.mySpells}/>
            < NotificationBar notifications={notifications} />
          </div>

          <div className='characterSection'>
            < MyCharacter characterInfo={myCharacter} />
            < spellAnimation />
            <h1 className='waiting'>{!this.state.opponentChar ? 'Waiting for player..' : ''}</h1>
            < OpponentCharacter charImg={this.state.opponentChar ? this.state.opponentChar.right_image : ''} />
          </div>

          <button className='castSpellBtn' onClick={() => this.endPlayerTurn()}>
              Cast Spell
          </button>
          <h1>{this.state.myDefence}</h1>
          <div className="radio-pillbox">
            <radiogroup>
                <div>
                    <input value="1" type="radio" name="radio-group" id="test" onClick={this.choosePosition}>
                    </input>
                    <label for="test" className="radio-label">1</label>
                </div>
                <div>
                    <input value="2" type="radio" name="radio-group" id="test2" onClick={this.choosePosition}>
                    </input>
                    <label for="test2" className="radio-label">2</label>
                </div>
                <div>
                    <input value="3" type="radio" name="radio-group" id="test3" onClick={this.choosePosition}>
                    </input>
                    <label for="test3" className="radio-label">3</label>
                </div>
            </radiogroup>
          </div>

          <div>
            <h1>{ this.props.state.message }</h1>
            <button onClick={this.fetchData} >
              {this.state.myTurn ? 'Your turn' : 'Enemy Turn'}
            </button>
          </div>
        </div>

      );
    }
  }

  export default Game;

