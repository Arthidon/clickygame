import React from 'react'
import propTypes from 'prop-types'

import './styles.css'

import Card from '../card'

export default function Board({dimension, cards, flipped, handleClick}) {
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
                handleClick={() => handleClick(card.id)}
                />
            ))
        }

    </div>
}

Board.propTypes = {
    dimension: propTypes.number.isRequired,
    cards: propTypes.arrayOf(propTypes.shape({})).isRequired,
    flipped: propTypes.arrayOf(propTypes.number).isRequired,
    handleClick: propTypes.func.isRequired,
}