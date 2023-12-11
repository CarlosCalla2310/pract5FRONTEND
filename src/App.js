import React from 'react';
import './App.css';

const productos = [
  { id: 1, nombre: 'Ahri KDA', precio: 1350, imagen: 'producto1.jpg', 
  comprarHandler: () => alert('Ahri KDA comprado') },
  { id: 2, nombre: 'Akaly KDA', precio: 1350, imagen: 'producto2.jpg', 
  comprarHandler: () => alert('Akaly KDA comprado') },
  { id: 3, nombre: 'Morgana de Aquelarre', precio: 1850, imagen: 'producto3.jpg', 
  comprarHandler: () => alert('Morgana de Aquelarre comprado') },
  { id: 4, nombre: 'Sett Flor Espiritual', precio: 1850, imagen: 'producto4.jpg', 
  comprarHandler: () => alert('Sett Flor Espiritual comprado') },
  { id: 5, nombre: 'Yone Portador del amanecer', precio: 1850, imagen: 'producto5.jpg', 
  comprarHandler: () => alert('Yone Portador del amanecer comprado') },
  { id: 6, nombre: 'Dragon de la tormenta', precio: 1350, imagen: 'producto6.jpg', 
  comprarHandler: () => alert('Dragon de la tormenta comprado') },
  { id: 7, nombre: 'Diana Centinela', precio: 1350, imagen: 'producto7.jpg', 
  comprarHandler: () => alert('Diana Centinela comprado') },
  { id: 8, nombre: 'Diana Invernal', precio: 1850, imagen: 'producto8.jpg', 
  comprarHandler: () => alert('Diana Invernal comprado') },
  { id: 9, nombre: 'MF arruinada', precio: 1350, imagen: 'producto9.jpg', 
  comprarHandler: () => alert('MF arruinada comprado') },
  { id: 10, nombre: 'Evelyn de Aquelarre', precio: 1850, imagen: 'producto10.jpg', 
  comprarHandler: () => alert('Evelyn de Aquelarre comprado') },
];

function App() {
  return (
    <div className="App">
      <h1>Catálogo de Skins en Oferta</h1>
      <div className="productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <img
              src={`/img/${producto.imagen}`}
              alt={`Imagen de ${producto.nombre}`}
              style={{ maxWidth: '100%' }}
            />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={producto.comprarHandler}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;