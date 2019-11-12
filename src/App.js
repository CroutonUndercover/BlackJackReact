import React, { Component } from 'react';
import './App.css';
import Hand from './Hand';
import Control from './Control';
import deck from './deckOfCards.js';


class App extends Component{
  constructor(){
    super()
    this.state={
      deck:deck,
      startIndex: 3,
      endIndex: 5
    } 
  }

  /*
  Function that handles the change of the state. When the button in the Control component is pressed,
  the function updates the state with the next cards that should be in the players hand upon pressing 
  the HIT button
  */
onClickChange = (e) => {
  if (this.state.endIndex<this.state.deck.length+2){
this.setState({startIndex: this.state.endIndex, endIndex: this.state.endIndex+2})
  console.log(this.state.startIndex + " to "+ this.state.endIndex)
  }
}

  render(){
    
    //dealer's hand is hardcoded since it is not changing throughout the game 
    const dealer = <Hand 
    deckOf = {this.state.deck} 
    startIndex = {0} 
    endIndex = {3}
    mutable = {false}
    />
    return(
      <div >
            
          <h1 className='f1 tc br4 ma4'>BlackJack</h1>
            
          {dealer}
          <Hand 
            deckOf = {this.state.deck} 
            startIndex = {this.state.startIndex} 
            endIndex = {this.state.endIndex}
            mutable = {true}
          />
          <Control clickChange = {this.onClickChange}/>
          
      </div>
    );
  }
  
}

export default App;
