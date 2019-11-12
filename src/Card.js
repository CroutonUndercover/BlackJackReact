import React, { Fragment } from 'react';


//a card component matching the deckOfCArds array's elements to each image of a card in /assets/cards/
class Card extends React.Component {
    constructor(){
        super()
        this.state={
            clicked : false,
        }
    }
    
    isClicked = () =>{
        console.log(this.state.clicked)
        this.setState({clicked:true})
    }

    render(){
        if(this.props.mutable === true){
            if(this.state.clicked === false ){
                return(
                    <Fragment >
                        <img className = 'dib br4 ma2 grow bw3 shadow-5' 
                        src={`/blackjackreact/assets/cards/${this.props.id}.png`} 
                        alt="" height="200" width="150"
                        onClick={this.isClicked.bind(this)}/>
                    
                    </Fragment>
                )
            }
            else{
                return(<div></div>)
            }
        }
        else{
            return(
                <Fragment >
                        <img className = 'dib br4 ma2 bw3 shadow-5' 
                        src={`/blackjackreact/cards/${this.props.id}.png`} 
                        alt="" height="200" width="150"
                        />
                 </Fragment>
            )
        }    
    }


}
export default Card