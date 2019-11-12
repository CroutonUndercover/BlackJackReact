import React from 'react';
import './Control.css'

//a component controlling the removal of the player's cards.
const Control = ({clickChange}) =>{
    return(
        <div className='fl-30 pa2 dib'>
            <div >
                <img 
            className = 'dib br4 ma1 bw3 shadow-5' 
            src="/assets/cardback.png" 
            alt="" height="200" width="150"/>
            </div>
            <button className='br3 f7 ma1 grow shadow-5' onClick={clickChange}>  <h1>HIT</h1>  </button>
        </div>
    )   
}

export default Control