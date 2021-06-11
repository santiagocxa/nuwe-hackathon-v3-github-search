import React, { useState, useEffect } from 'react';
import Repos from './Repos';
import {getData} from '../assets/utils/getData';

import '../assets/styles/Profile.css';

//con este componente pintamos toda la presentacion del usuario

const Profile = ({ nickName }) => {
  const [user, setUser] = useState([]);

  const API = 'https://api.github.com/users/' + nickName;
  //se hace un llamado a la API y luego carga los datos al estado
  useEffect(() => {
    getData(API)
      .then((resp) => setUser(resp))
      .catch(setUser([]));
  }, [API]);

  const { avatar_url, name, blog, public_repos } = user;

  return (
    <div className='Profile'>
    <div className='Profile-container'>
      <div className='Profile-description'>
        <img src={avatar_url} alt='user' />
        <div className='Profile-details'>
          <div>
            <h1>{name || 'Usuario No Econtrado'}</h1>
            <p>
              Web Site: <strong>{blog}</strong>
            </p>
            <p>
              Number Repos: <strong>{public_repos}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
      {<Repos nickName={nickName} />}
    </div>
  );
};

export default Profile;
