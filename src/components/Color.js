import {useParams} from 'react-router-dom'

export const Color = (props) => {
    const {color} = useParams()

    const divStyle = {
        height: "100vh",
        width: "100vw",
        backgroundColor: `${color}`
    }

    const hStyle = {
        padding: "5px",
        fontWeight: "bold",
        fontSize: "3rem"
    }

    return (
        <div style={divStyle}>
            <h2 style={hStyle}>You selected the color: {color}</h2>
        </div>
    )
}
