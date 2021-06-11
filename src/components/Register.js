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

  const [log, setLog] = useState(false)

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.resgiterRequest(form);
    setLog(true)
    setTimeout(()=>{
      props.history.push('/');
    }, 1000)
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
      {log === true && 
      <div>Login OK</div>}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  resgiterRequest,
};

export default connect(null, mapDispatchToProps)(Register);
