import React from 'react'
import propTypes from 'prop-types'

import './styles.css'

import Card from '../card'

export default function Board({disabled, dimension, cards, flipped, solved, handleClick}) {
    return <div className="board">
        {
            cards.map((card => 
                <Card 
                key={card.id}
                id={card.id}
                type={card.type}
                width={dimension / 4.5}
                height={dimension / 4.5}
                flipped ={flipped.includes(card.id)}
                solved={solved.includes(card.id)}
                handleClick={handleClick}
                disabled={disabled || solved.includes(card.id)}
                />
            ))
        }

    </div>
}

Board.propTypes = {
    disabled: propTypes.bool.isRequired,
    dimension: propTypes.number.isRequired,
    cards: propTypes.arrayOf(propTypes.shape({})).isRequired,
    flipped: propTypes.arrayOf(propTypes.number).isRequired,
    solved: propTypes.arrayOf(propTypes.number).isRequired,
    handleClick: propTypes.func.isRequired,
}