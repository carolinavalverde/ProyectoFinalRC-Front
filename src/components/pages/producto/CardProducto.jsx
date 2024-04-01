import React from "react";
import "../../../style/Categoria.css"
import img1 from "../../img/bebidas1.avif"

const CardProducto = (props) => {

    const {title} = props

    return (
        <div>
            <h1>{title}</h1>
            <div className="card">
                <div className="image"><span className="text"><img src={img1} alt="Bebidas" style={{ width: '100%', height: '100%' }} /></span></div>
                <span className="title">Cool Chair</span>
                <span className="price">$100</span>
            </div>
        </div>
    )
}

export default CardProducto;