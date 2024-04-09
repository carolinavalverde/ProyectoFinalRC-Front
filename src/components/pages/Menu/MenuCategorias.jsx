// import React from "react";
// import CardProducto from "./CardProducto";
// import "../../../styles/menuCategoria.css"

// const MenuCategorias = () => {

//     return (
//         <div className="menuCategoria">
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />            <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />            <CardProducto />
//             <CardProducto />
//             <CardProducto />
//             <CardProducto />            <CardProducto />
//             <CardProducto />
//             <CardProducto />
//         </div>
//     )
// }

// export default MenuCategorias;

import React from "react";
import CardProducto from "./CardProducto";
import "../../../styles/menuCategoria.css";

const MenuCategorias = () => {
    const categorias = [
        { id: 1, title: "Entradas" },
        { id: 2, title: "Platillos" },
        { id: 3, title: "Bebidas" },
        { id: 4, title: "Postres" },

    ];

    return (
        <div className="menuCategoria">
            {categorias.map(categoria => (
                <CardProducto key={categoria.id} categoryId={categoria.id} />
            ))}
        </div>
    );
};

export default MenuCategorias;







