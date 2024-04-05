import React from "react";
import '../../styles/DetalleProducto.css'

const Detalleproducto = () => {
  return (
    <Container className="body my-3">
      <h2 className="text-center my-2">Nombre Del Producto</h2>

      <p className="w-75 m-auto py-3">
        Descripcion breve: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Corporis inventore, id in provident vel sapiente error
        consequuntur magni nisi maxime mollitia tempore sed at suscipit facere
        rem unde ratione! Ducimus.
      </p>
      <div className="containerImagen ">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/09/10/8f/39/burger-king.jpg"
          className="img-fluid"
          alt="imagen de comida"
        />
      </div>
      <p className="w-75 m-auto py-3">
        Descripcion amplia: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempore atque sunt, alias itaque nostrum blanditiis aspernatur
        voluptatum illum, enim maxime quos, porro officiis? Tenetur non
        recusandae laudantium a illo sint doloremque nulla, explicabo blanditiis
        ea quod suscipit numquam iure excepturi sit nisi doloribus voluptas
        asperiores ullam animi dignissimos libero delectus ipsum. Velit
        consectetur incidunt vero nemo, temporibus facilis laboriosam hic neque
        commodi suscipit exercitationem, nihil cumque excepturi repellendus
        culpa libero rem? Necessitatibus similique provident, doloribus
        accusantium ab incidunt ipsum! Ducimus beatae, consectetur esse error
        nisi iure aliquam vero numquam qui dolore cumque nobis quod,
        reprehenderit dignissimos in labore alias pariatur?
      </p>
    </Container>
  );
};

export default Detalleproducto;
