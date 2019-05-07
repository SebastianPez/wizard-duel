import React, { Component } from 'react';
// import './styles/SpellAnimation.css';


class SpellAnimation extends Component {
    render() {
        return(
          <div className='spellAnimationDiv'>
          {/* className={this.props.spellDirection} */}
              <img className='spellAnimationLimit' src={this.props.currentSpell} alt='myspell'/>
          </div>
        )
    }
}


export default SpellAnimation;