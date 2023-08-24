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
              <p>
Align your career aspirations with your desired lifestyle for a fulfilling journey ahead.</p>
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
              <p>Introducing a groundbreaking application designed to shape your academic journey around the lifestyle you envision. Our innovative app takes the uncertainty out of choosing a college major by aligning it seamlessly with your desired way of life. Seamlessly merging passion with practicality, the app empowers users to handpick their major based on their unique aspirations and preferences. </p>
              <img className='informational-image' src={infoImg} alt="Image of a planner"/>
              <p>Through a user-friendly interface, you can explore an extensive range of majors, each intricately linked to specific lifestyles, career paths, and personal interests. Whether you aspire to a fast-paced urban existence, a creative haven, or a balanced remote work setup, our app guides you toward majors that harmonize with your envisioned future. Embrace the synergy of education and lifestyle, as this app lights the path to a fulfilling academic journey tailored to the life you've always dreamed of. Your ideal major, and the lifestyle it embodies, are now just a tap away.</p>
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
              <p>For high school students on the cusp of embarking on their higher education odyssey, our app is a guiding light that simplifies the complex process of major selection. Navigating the myriad of choices can be overwhelming, but with our user-centric platform, students can now envision their future lifestyle and seamlessly match it with the ideal major.

</p>
              </Grid>
            </Grid>
            <Grid justifyContent={'center'} container>
              <Grid alignSelf={'center'} item xl={6}>
              <p>For college students at the critical crossroads of reevaluating their academic direction, our app offers a fresh perspective on major selection. Recognizing that lifestyles and priorities can evolve during the college years, our platform provides a valuable tool to recalibrate one's major choice accordingly. As students mature and gain a clearer sense of the lifestyle they wish to lead post-graduation, our app adapts to their changing aspirations, suggesting majors that align with their updated goals.</p>
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
