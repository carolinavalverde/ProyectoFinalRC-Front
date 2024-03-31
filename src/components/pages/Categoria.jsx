import React from "react";

const Categorias = (props) => {

    const {title} = props

    return (
        <div>
            <h1>{title}</h1>
            <div className="card">
                <div className="image"><span className="text">This is a chair.</span></div>
                <span className="title">Cool Chair</span>
                <span className="price">$100</span>
            </div>
        </div>
    )
}

export default Categorias;