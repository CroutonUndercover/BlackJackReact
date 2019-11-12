import React from 'react';
import Card from './Card';

/*
A component which when instantiated, defines the number of cards in player's and dealer's hands.
It is represented by an array, that starts from and ends in specific positions, defining the beggining of te game.
*/
const Hand = ({deckOf,startIndex, endIndex, mutable} ) =>{
    
    const CardsArray = deckOf.map((item, i) => {
        
        return (<Card 
            key={deckOf[i]} 
            id={deckOf[i]} 
            mutable ={mutable}
             />
           )
           
    }).slice(startIndex, endIndex)

    return(
        <div className='fl w-70 tc'>
            {CardsArray}
        </div>
        
    );
}

export default Hand;