import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import plannerImg from '../../images/maing-graphic-2.jpg'
import infoImg from '../../images/info-img-no-bg.png'
import gradImg from '../../images/hs-grad.jpg'
import careersImg from '../../images/careers.jpg'
import bgImg from '../../images/main-bg-2.jpg'
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { Container } from '@mui/material';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <>
    {/* <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'}}> */}
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid className="main-text-container" alignItems={'center'} justifyContent={'center'} item xl={5}>
            <div>
              <h1 className='main-heading'>Match Your Career With <br /> Your Lifestyle</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quaerat, repudiandae corporis quidem nostrum eum iure.</p>
              <Button sx={{ backgroundColor: '#f05b6d', padding: '.5rem 1.25rem' }} className='button-main' variant="contained"
                                type="button"
                                onClick={() => {
                                  history.push('/registration');
                                }}
              >Start Your Journey</Button>
            </div>
          </Grid>
          <Grid alignSelf={'center'} item xs={7}>
            <div >
              <img src={plannerImg} alt="Image of a planner" />
            </div>
          </Grid>
        </Grid>
      </Container>
    {/* </div> */}
      <Grid className='info-section' sx={{ backgroundColor: '#007ea9'}}>
        <Grid textAlign={'center'} justifyContent={'center'} container item xl={12}>
            <h2 className='info-heading' style={{ color: '#fff' }}>How It Works?</h2>
            <Grid justifyContent={'center'} container>
              <Grid item xl={6}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque nobis aut similique praesentium accusantium tenetur voluptatem, sapiente dolorum ullam delectus assumenda soluta necessitatibus officia pariatur possimus inventore dignissimos dolor.</p>
              <img className='informational-image' src={infoImg} alt="Image of a planner"/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque nobis aut similique praesentium accusantium tenetur voluptatem, sapiente dolorum ullam delectus assumenda soluta necessitatibus officia pariatur possimus inventore dignissimos dolor.</p>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
      <Grid className='info-section'>
        <Grid textAlign={'center'} justifyContent={'center'} container item xl={12}>
            <h2 className='info-heading'>Who It's For?</h2>
            <Grid justifyContent={'center'} container>
              <Grid item xl={6}>
              <img className='informational-image' src={gradImg} alt="Image of a planner"/>
              </Grid>
              <Grid alignSelf={'center'} item xl={6}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque nobis aut similique praesentium accusantium tenetur voluptatem, sapiente dolorum ullam delectus assumenda soluta necessitatibus officia pariatur possimus inventore dignissimos dolor.</p>
              </Grid>
            </Grid>
            <Grid justifyContent={'center'} container>
              <Grid alignSelf={'center'} item xl={6}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eaque nobis aut similique praesentium accusantium tenetur voluptatem, sapiente dolorum ullam delectus assumenda soluta necessitatibus officia pariatur possimus inventore dignissimos dolor.</p>
              </Grid>
              <Grid item xl={6}>
              <img className='informational-image' src={careersImg} alt="Image of a planner"/>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      </Container>
      </>
  );
}

export default LandingPage;
