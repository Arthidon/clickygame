import React, { Component } from 'react'

class Score extends Component {
    state = {
		score: 0,
        highScore: 0,
        attempts: 5,
	};


    render (){
        return (
            <div className='nav-item'>
            Score: {state.score} &nbsp;<span className='seperator'>|</span>&nbsp;
            Top Score: {state.highScore}<span className='seperator'>|</span>&nbsp;
            Attemps: {state.attempts}
            </div> 

        
            )
    
    }
}

export default Score