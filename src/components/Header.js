import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions'


import '../assets/styles/Header.css';

import Logo from '../assets/static/user.png'

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleSubmit = event => {
    event.preventDefault();
    props.logout()
  }

  return (
    <div className='Header'>
      <h1 className='Header-title'>GitHub User</h1>
      {hasUser ? (
        <div className='Header-user'>
          <img className='Header-img' src={user.img || Logo } alt='avatar' />
          <div>
            <p className='Item'>{user.user}</p>
            <p className='Item'onClick={handleSubmit}>Signout</p>
          </div>
        </div>
      ) : (
        <div className='Header-user--off'></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
