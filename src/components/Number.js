import React from 'react'
import {useParams} from 'react-router-dom'

export const Number = () => {
    const {number} = useParams()

    const hStyle = {
        padding: "5px",
        fontWeight: "bold",
        fontSize: "3rem",
        backgroundColor: "whitesmoke",
        height: "100vh",
        width: "100vw",
    }

    return (
        <div>
            <h2 style={hStyle}>You wrote the number: {number}</h2>
        </div>
    )
}
