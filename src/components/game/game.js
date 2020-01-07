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
  let [score, setScore] = useState(0)
  let [highScore, setHighScore] = useState(0)
  let [attempts, setAttempts] = useState(5)

  
  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])
  //score useEffect
  useEffect(() => {
  }, [])
  useEffect(() => {
    preloadImages()
  }, [cards])
  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false) ;
     
    }else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      
      
      if (isMatch(id)) {
        addScore()
        setSolved([...solved, flipped[0], id])
       //match
       
        
      } else {
        lostAttempt()
        setTimeout(resetCards, 2000)
        //if inccorect 
        
        
      }
    }
  
  }
 const preloadImages = () => {
  //  console.log(cards.length);
   cards.map((card) => {
    const src = `/img/${card.type}.png`
    // console.log(src);
    new Image().src = src
   })
 } 
 const lostAttempt = () => {
   setAttempts(attempts - 1)
   console.log(attempts);
 console.log(score, highScore)
}

const addScore = () => {
  setScore(score + 1) ;
console.log(score, highScore);
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
      score = {score}
      highScore  = {highScore}
      attempts = {attempts}
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