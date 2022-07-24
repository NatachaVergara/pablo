import React from 'react'

const Card = (props) => {
    return (
        <div className={props.style} >
            <div>
                <img src={props.img} alt={props.title} />
            </div>
            <div>
                <h3>{props.title} </h3>
                <h5> {props.texto} </h5>
            </div>
        </div>
    )
}

export default Card