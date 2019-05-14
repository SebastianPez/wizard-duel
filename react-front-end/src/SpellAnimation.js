import React, { Component } from 'react';
// import './styles/SpellAnimation.css';

class SpellAnimation extends Component {
    render() {
        console.log("Props before render", this.props)
        if (!this.props.myCurrentSpell && this.props.oppCurrentSpell){
                return (<div className={this.props.spellDirection}><img className='spellAnimationLimit' src={this.props.oppCurrentSpell} alt='myspell'/></div>)
        }
        if (this.props.myCurrentSpell){
            if(this.props.oppCurrentSpell){
            return (<div className={this.props.spellDirection}><img className='spellAnimationLimit' src={this.props.oppCurrentSpell} alt='myspell'/></div>)
            } else {
            return (<div className='mySpellDirection'><img className='spellAnimationLimit' src={this.props.myCurrentSpell} alt='myspell'/></div>)
        }
        } else {
            return (<div></div>)
        }
    }
}


export default SpellAnimation;