import React, {useState} from 'react';
import { connect } from 'react-redux'
import { loginRegister } from '../actions'
import { Link } from 'react-router-dom';


import '../assets/styles/Login.css'

import Logo from '../assets/static/gitDark.png'

const Login = (props) => {
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRegister(form)
    props.history.push('/')
  }

  return (
    <div className='Login'>
      <div className='Login-container'>
        <div className='Login-img-container'>
          <img className='Login-img' src={Logo} alt='gitHub'/>
        </div>
        <form className='Login-form' onSubmit={handleSubmit}>
          <input
            className='Login-email btn'
            name='email'
            type='text'
            placeholder='email@email.com'
            value={form.name}
            onChange={handleChange}
          />
          <input
            className='Login-password btn'
            name='password'
            type='password'
            placeholder='*******'
            value={form.name}
            onChange={handleChange}
          />
          <button className='Login-button btn'>Login</button>
          <Link to='/' className='Login-button btn'>
            <p type='button'>Back</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  loginRegister,
};


export default connect(null, mapDispatchToProps)( Login);
