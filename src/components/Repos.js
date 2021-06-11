import React, { useState, useEffect } from 'react';
import { getData } from '../assets/utils/getData';
import Repo from './Repo';

import '../assets/styles/Repos.css';

const Repos = ({ nickName }) => {
  const [repos, setRepos] = useState([]);

  const API = `https://api.github.com/users/${nickName}/repos`;

  //llamada a la API para traer los repositorios del usuario
  useEffect(() => {
    //getUser(API).then((resp) => setRepos(resp));
    const getUser = async () => {
      const data = await getData(API);
      setRepos(data);
    };
    getUser();
  }, [API]);

  // pinta  los repo mediante map
  return (
    <div title='Repos' className='Repos'>
      {repos.length > 0 &&
        repos.map((item) => <Repo key={item.id} item={item} />)}
    </div>
  );
};

export default Repos;
