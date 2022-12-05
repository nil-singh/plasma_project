import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type:'',
    password: '',
    password2: ''
  });
const [acceptTerm,setAcceptTerm] = useState(false);
  const { name, email,type, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary' style={{textAlign: "center"}}>Sign Up</h1>
      <p className='lead' style={{textAlign: "center"}}>
        <i className='fas fa-user' /> Create Your Account
      </p>
      <div class="container contact">
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
        <label for="name">Name</label>
          <input
            type='text'
            id="name"
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <label for="email">Email Id</label>
        <div className='form-group'>
          <input
             id="email" 
            type='text'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          {/* <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small> */}
        </div>
        <label for="type">Account Type</label>
        <div className="form-group" style={{width:"40px"}}>
          <select name="type" id="type" type = "text" value={type} onChange={onChange} style ={{width:"460px"}}>
            <option type="text">*Register As</option>
            <option type = "text" value="Donar">Donar</option>
             
          </select>
         
        </div>
        <label for="password">Password</label>
        <div className='form-group'>
          <input
            id ="password"
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <label for="confirmpassword">Confirm Password</label>
        <div className='form-group'>
          <input
            id="confirmpassword"
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
             
            type='checkbox'
            checked={acceptTerm}
            onChange={()=>setAcceptTerm(!acceptTerm)}
          />
          &nbsp; I have provided all the above infomation correctly to best of my knowledge &
          this further used as intermediary between patients and donar
        </div>
       { acceptTerm  && (<input type='submit' className='btn btn-primary' value='Register' />)}
       {!acceptTerm&&(<input type='submit' className=' btn btn-primary ' disabled value='Register' />)}
        
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
      </div>
     
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
