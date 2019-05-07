import React, { Component } from 'react';
import Spell from "./Spell.js";
import './styles/spellList.css'

class PlayerSpellList extends Component {
    render() {

        const spellArray = this.props.userSpells.map((spell) => {
            return(
                <Spell
                    name={spell.name}
                    description={spell.description}
                    power={spell.power}
                    limit={spell.limit}
                    chooseSpell={this.props.chooseSpell}
                    spellObj={spell}
                />
            );
        });

        return <div className='spellsTable' id='mainTable'>
                {spellArray}
        </div>

    }
}


export default PlayerSpellList;