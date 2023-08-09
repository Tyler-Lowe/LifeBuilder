import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import bgImg from '../../images/login-bg-1.jpg'
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', padding: '7rem 0 10rem'}}>
    <Container>
    <Grid container justifyContent={'center'}>
      <Grid item xs={12} lg={6}>
        <div className='formPanel text-align-center'>
          <LoginForm />
        <center>
          <p>If you don't already have an account register below!</p>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </button>
        </center>
        </div>
        </Grid>
    </Grid>
    </Container>
    </div>
  );
}

export default LoginPage;
