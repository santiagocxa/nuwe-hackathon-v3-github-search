import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { resgiterRequest } from '../actions'
import '../assets/styles/Register.css'
import Logo from '../assets/static/gitDark.png'

const Register = props => {

  const [form, setForm] = useState({
    name:'',
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
    props.resgiterRequest(form)
    props.history.push('/')
  }

  return(
    <div className='Register'>
      <div className='Register-container'>
        <div className='Register-img-container'>
          <img className='Register-img' src={Logo} alt='gitHub'/>
        </div>
        <form className='Register-form' onSubmit={handleSubmit}>
          <input
            className='Register-user btn'
            name='name'
            type='text'
            placeholder='User Name'
            value={form.name}
            onChange={handleChange}
          />
          <input
            className='Register-email btn'
            name='email'
            type='text'
            placeholder='email@email.com'
            value={form.email}
            onChange={handleChange}
          />
          <input
            className='Register-password btn'
            name='password'
            type='password'
            placeholder='*******'
            value={form.password}
            onChange={handleChange}
          />
          <button className='Register-button btn'>Register</button>
          <Link to='/' className='Register-button btn'>
            <p type='button'>Back</p>
          </Link>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  resgiterRequest,
};


export default connect(null, mapDispatchToProps)(Register);