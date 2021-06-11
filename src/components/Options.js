import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Options.css';

const Options = () => {
 
  return (
    <div className='Options'>
      <div className='Options-container'>
        <Link to='/user' className='Link'>
          <p className='Options-search button' type='button'>
            Search User
          </p>
        </Link>
        <Link to='/login' className='Link'>
          <p className='Options-login button' type='button'>
            Login
          </p>
        </Link>
        <Link to='/register' className='Link'>
          <p className='Options-register button' type='button'>
            Register
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Options;
