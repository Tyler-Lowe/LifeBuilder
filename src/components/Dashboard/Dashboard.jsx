import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import plannerImg from '../../images/maing-graphic-2.jpg'
import infoImg from '../../images/info-img-no-bg.png'
import gradImg from '../../images/hs-grad.jpg'
import careersImg from '../../images/careers.jpg'
import bgImg from '../../images/main-bg-2.jpg'
import './Dashboard.css';
import { Container } from '@mui/material';

function Dashboard() {


    return(
        <>
        {/* #f0f5fd, purple is #f3edff, new purple */}
        <div className='background-purple'>
        <Container maxWidth="xl">
            <Grid container>
            <Grid justifyContent={'center'} container item xl={12} sx={{ backgroundColor: '#fffffb', marginTop: '3rem', borderRadius: '25px'}}>
                <Grid className='right-box-shadow' item xl={2}>
                    <div>I am right here! (1)</div>
                </Grid>
                {/* Start of Middle Column */}
                <Grid className='' justifyContent={'center'} container item xl={8} sx={{ backgroundColor: '#f0f5fd', borderRadius: '15px'}}>
                    <h1>I am right here! (2)</h1>
                    <Grid className='db-primary-container' item xl={10} sx={{ backgroundColor: '#fffffb', borderRadius: '15px', padding: '1rem'}}>
                    <h2>Name of Chosen Career Field</h2>
                    <Grid container justifyContent={'center'}>
                        <Grid className='' item xl={8} sx={{ backgroundColor: '#fffffb', borderRadius: '5px'}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad cumque veniam. Nostrum accusantium debitis.</p>
                        </Grid>
                        <Grid textAlign={'center'} className='' item xl={4} alignSelf={'center'} sx={{ backgroundColor: '#fffffb', borderRadius: '5px'}}>
                        <Button sx={{ backgroundColor: '#f05b6d', padding: '.5rem 1.25rem' }} className='button-main' variant="contained"
                            type="button"
                            onClick={() => {
                            history.push('/registration');
                            }}
                            >Start Your Journey</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    {/* For container Heading */}
                    <Grid item xl={10}>
                    <h2>Will this be your future</h2>
                    </Grid>
                    {/* End of Container Heading */}
                    <Grid className='db-primary-container' item xl={10} sx={{ backgroundColor: '#fffffb', borderRadius: '15px', padding: '1rem'}}>
                    <h2>Name of Chosen Career Field</h2>
                    <Grid container justifyContent={'center'}>
                        <Grid className='' item xl={8} sx={{ backgroundColor: '#fffffb', borderRadius: '5px'}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad cumque veniam. Nostrum accusantium debitis.</p>
                        </Grid>
                        <Grid textAlign={'center'} className='' item xl={4} alignSelf={'center'} sx={{ backgroundColor: '#fffffb', borderRadius: '5px'}}>
                        <Button sx={{ backgroundColor: '#f05b6d', padding: '.5rem 1.25rem' }} className='button-main' variant="contained"
                            type="button"
                            onClick={() => {
                            history.push('/registration');
                            }}
                            >Start Your Journey</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid className='db-primary-container' item xl={10} sx={{ backgroundColor: '#fffffb', borderRadius: '15px', padding: '1rem', marginTop:'3rem'}}>
                    <h2>Name of Chosen Career Field</h2>
                    <Grid container justifyContent={'center'}>
                        <Grid className='' item xl={8} sx={{ backgroundColor: '#fffffb', borderRadius: '5px'}}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad cumque veniam. Nostrum accusantium debitis.</p>
                        </Grid>
                        <Grid textAlign={'center'} className='' item xl={4} alignSelf={'center'} sx={{ backgroundColor: '#fffffb', borderRadius: '5px'}}>
                        <Button sx={{ backgroundColor: '#f05b6d', padding: '.5rem 1.25rem' }} className='button-main' variant="contained"
                            type="button"
                            onClick={() => {
                            history.push('/registration');
                            }}
                            >Start Your Journey</Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                {/* End of Middle Column */}
                <Grid className='left-box-shadow' item xl={2}>
                    <div>I am right here! (3)</div>
                </Grid>
            </Grid>
            </Grid>
        </Container>
        </div>
        </>
    )
}

export default Dashboard;