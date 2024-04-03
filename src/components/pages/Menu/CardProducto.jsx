import React from "react";
import "../../../style/Card.css"
import img1 from "../../img/bebidas1.avif"

const CardProducto = (props) => {

    const {title} = props

    return (
        <div className="cardContainer">
            <h1>{title}</h1>
            <div className="card">
                <div className="image"><img src={img1} alt="Bebidas" style={{ width: '100%', height: '100%' }} /></div>
                <span className="title">Dish name</span>
                <span className="price">$100</span>
            </div>
        </div>
    )
}

export default CardProducto;