import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resgiterRequest } from '../actions';
import '../assets/styles/Register.css';
import Logo from '../assets/static/gitDark.png';

const Register = (props) => {
  const [form, setForm] = useState({
    user: '',
    pass: '',
    githubName: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.resgiterRequest(form);
    const { user, pass } = form;
    console.log(user + pass);
    fetch('http://localhost:8080/users/signup', {
      method: 'POST',
      body: form,
    })
      .then(function (response) {
        if (response.ok) {
          return response.text();
        } else {
          throw 'Error en la llamada Ajax';
        }
      })
      .then(function (texto) {
        console.log(texto);
      })
      .catch(function (err) {
        console.log(err);
      });
    props.history.push('/');
  };

  return (
    <div className='Register'>
      <div className='Register-container'>
        <div className='Register-img-container'>
          <img className='Register-img' src={Logo} alt='gitHub' />
        </div>
        <form className='Register-form' onSubmit={handleSubmit}>
          <input
            className='Register-user btn'
            name='githubName'
            type='text'
            placeholder='User Name'
            value={form.githubName}
            onChange={handleChange}
          />
          <input
            className='Register-email btn'
            name='user'
            type='text'
            placeholder='email@email.com'
            value={form.user}
            onChange={handleChange}
          />
          <input
            className='Register-password btn'
            name='pass'
            type='password'
            placeholder='*******'
            value={form.pass}
            onChange={handleChange}
          />
          <button className='Register-button btn'>Register</button>
          <Link to='/' className='Register-button btn'>
            <p type='button'>Back</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  resgiterRequest,
};

export default connect(null, mapDispatchToProps)(Register);
