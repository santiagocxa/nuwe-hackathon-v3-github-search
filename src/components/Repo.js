import React from 'react';

import '../assets/styles/Repo.css';
//este componente se encarga de renderisar los repositorios optenidos de GitHub
const Repo = ({ item }) => {
  return (
    <div title='prueba' className='Repo'>
      <h1>{item.name.toUpperCase()}</h1>
      <p>Languaje: {item.language}</p>
      <p>Description: {item.description}</p>
    </div>
  );
};

export default Repo;
