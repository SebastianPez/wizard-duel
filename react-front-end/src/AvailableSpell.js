import React, { Component } from 'react';

class AvailableSpell extends Component {
  render() {
    const { id , name, description, cast_limit, cost, turns } = this.props;
    return (
      <container id='spellContainer' onClick={() => this.props.selectSpell(id)}>
        <div>
          {/* <h4>{id}</h4> */}
          <h3>{name}</h3>
          <div className='castinfo'>
          <h5 className="circle-display1">Mana:{cost}</h5>
          <h5 className="circle-display">Turns:{turns}</h5>
          {/* <h5 className="circle-display">Limit:{cast_limit}</h5> */}
          </div>
        </div>
        <div>
          <p>{description}</p>
          <h5 className="circle-display2">Limit:{cast_limit}</h5>
        </div>
      </container>
    )
  }
}

export default AvailableSpell;