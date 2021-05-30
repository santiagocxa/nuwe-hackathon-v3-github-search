import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Options.css';

const Options = () => {
  const [state, setState] = useState({
    container: 'Options-container',
    title: '',
    back: 'Options-back--off',
    open: true,
  });
  const onClick = () => {
    if (state.open) {
      setState({
        container: 'Options-container--off',
        title: ' title-back',
        back: 'Options-back',
        open: false,
      });
    } else {
      setState({
        container: 'Options-container',
        title: '',
        back: 'Options-back--off',
        open: true,
      });
    }
  };

  return (
    <div className='Options'>
      <div className='Options-container'>
        <Link to='/user' className='Link' onClick={onClick}>
          <p className='Options-search button' type='button'>
            Search User
          </p>
        </Link>
        <Link to='/login' className='Link' onClick={onClick}>
          <p className='Options-login button' type='button'>
            Login
          </p>
        </Link>
        <Link to='/register' className='Link' onClick={onClick}>
          <p className='Options-register button' type='button'>
            Resgister
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Options;
