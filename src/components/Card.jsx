import React, { useContext } from 'react';
import './Card.scss';
import CarritoContext from './../context/CarritoContext';

const Card = ({ producto }) => {
  const { agregarProductoAlCarritoContext } = useContext(CarritoContext);

  const handleAgregar = (producto) => {
    console.log("Producto agregado al carrito:", producto.id);
    agregarProductoAlCarritoContext(producto);
  };

  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img
            src={producto.foto}
            alt={producto.nombre}
            className="card__image"
          />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.detalles}</p>
            <p className="card__price">Precio: ${producto.precio}</p>
            <button onClick={() => handleAgregar(producto)}>Agregar al carrito</button> {}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;