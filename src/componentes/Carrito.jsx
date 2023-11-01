import React, { useState, useEffect } from 'react';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(storedCarrito);
  }, []);

  return (
    <div>
      <h2>Carrito de Compras:</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((producto, index) => (
            <li key={index}>
              {producto.nombre} - ${producto.precio}
              <button
                onClick={() => {
                  // Implementar lógica para eliminar del carrito
                  // Por ejemplo: 
                  // const nuevoCarrito = carrito.filter((item, i) => i !== index);
                  // setCarrito(nuevoCarrito);
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
