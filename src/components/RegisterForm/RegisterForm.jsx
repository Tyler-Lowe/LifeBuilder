import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="text-align-center" onSubmit={registerUser}>
      <h2 className='text-purple'>Register Here!</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
      <label htmlFor="firstname">
          <input
          className='input-field'
            type="text"
            name="firstname"
            placeholder='First Name'
            value={firstname}
            required
            onChange={(event) => setFirstname(event.target.value)}
          />
        </label>
        <label htmlFor="lastname">
          <input
          className='input-field'
            type="text"
            name="lastname"
            placeholder='Last Name'
            value={lastname}
            required
            onChange={(event) => setLastname(event.target.value)}
          />
        </label>
        <label htmlFor="username">
          <input
          className='input-field'
            type="text"
            name="username"
            placeholder='Enter Email Address'
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input
          className='input-field'
            type="password"
            name="password"
            placeholder='Enter Your Password'
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn button-main button-width" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
