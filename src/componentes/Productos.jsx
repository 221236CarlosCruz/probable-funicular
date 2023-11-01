import React from 'react';

const Producto = ({ producto }) => {
  const agregarAlCarrito = (producto) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoActual.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carritoActual));
    alert('Producto agregado al carrito');
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
    </div>
  );
};

export default Producto;
