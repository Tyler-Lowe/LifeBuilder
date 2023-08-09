import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import bgImg from '../../images/login-bg-1.jpg'

function RegisterPage() {
  const history = useHistory();

  return (
    <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', padding: '7rem 0 10rem'}}>
      <Container>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} lg={6}>
            <div className='formPanel text-align-center'>
              <RegisterForm />
              <center>
              <p>If you already have an account log in below!</p>
                <button
                  type="button"
                  className="btn btn_asLink"
                  onClick={() => {
                    history.push('/login');
                  }}
                >
                  Login
                </button>
              </center>
          </div>
            </Grid>
        </Grid>
    </Container>
    </div>
  );
}

export default RegisterPage;
