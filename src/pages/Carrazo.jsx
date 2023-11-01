import React from 'react';
import Producto from '../componentes/Productos';
import Carrito from '../componentes/Carrito';

const App = () => {
    const ejemploProducto = {
        nombre: 'Ejemplo de Producto',
        precio: 20,
    };

    return (
        <div>
            <h1>Aplicación con Productos</h1>
            <Producto producto={ejemploProducto} />
            <Carrito />
        </div>
    );
};

export default App;
