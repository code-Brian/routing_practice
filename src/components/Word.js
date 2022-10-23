import React from 'react'
import {useParams} from 'react-router-dom'

export const Word = () => {
    const {word, color, color2} = useParams()

    const hStyle = {
        padding: "5px",
        fontWeight: "bold",
        fontSize: "3rem",
        backgroundColor: `${color2}`,
        height: "100vh",
        width: "100vw",
        color: `${color}`
    }

    return (
        <div>
            <h2 style={hStyle}>You wrote the word: {word}</h2>
        </div>
    )
}
