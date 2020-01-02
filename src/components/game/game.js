import React, { useState, useEffect} from 'react';

import Board from '../board';

import initializeDeck from '../../deck'
import Navbar from '../navbar';



export default function Game() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)
  let state = {
		score: 0,
    highScore: 0,
    attempts: [5],
	};
  


  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preloadImages()
  }, [cards])

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', resizeListener)
  })

function winLose() {
    if (state.attempts = 0) {

    }
}

  const handleClick = (id) => {
      state = {
      score: 0,
      highScore: 0,
      attempts: [5],
    };



    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
     
      setDisabled(false) 
    }else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
        
      } else {
        setTimeout(resetCards, 2000)
        state.attempts--
      }
    }
    return state
  }

 const preloadImages = () => {
  //  console.log(cards.length);
   cards.map((card) => {
    const src = `/img/${card.type}.png`
    // console.log(src);
    new Image().src = src
   })
 } 

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

const sameCardClicked = (id) => flipped.includes(id)

const isMatch = (id) => {
  const clickedCard = cards.find((card) => card.id === id)
  const flippedCard = cards.find((card) => flipped[0] === card.id)
  return flippedCard.type === clickedCard.type
}

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ),
    )
  }
  
  return (
    <div>
      <Navbar
      score = {state.score}
      highScore  = {state.highScore}
      attempts = {state.attempts}

      />

      <div className='container'>

                        <Board
                          dimension={dimension}
                          cards={cards}
                          flipped={flipped}
                          handleClick={handleClick}
                          disabled={disabled}
                          solved={solved}
                          />

		</div>

    </div>
  );
}

