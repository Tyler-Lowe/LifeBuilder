import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import HomeIcon from '@mui/icons-material/Home';
import { Container } from "@mui/material";
import { useSelector } from 'react-redux';
import plannerImg from '../../images/user-avatar.png'

function UserHomePage() {
    const history = useHistory();
    const user = useSelector((store) => store.user);

    return (
        <>
            <div className="background-purple">
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3} xl={2} justifyContent="center">
                            <div className="right-box-shadow">
                                <Grid container justifyContent="center">
                                    <Grid item xs={10}>
                                        <h2 className="text-center">Future Plans</h2>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center">
                                    <Grid item xs={7}>
                                        <Button
                                            sx={{
                                                backgroundColor: "#d2d0f6",
                                                borderRadius: "25px",
                                                width: "100%",
                                            }}
                                            className="text-center"
                                        >
                                            <h4>
                                                Add New <br /> Future <br />
                                                <AddIcon
                                                    sx={{
                                                        backgroundColor: "#8f8ae8",
                                                        borderRadius: "50%",
                                                        padding: ".25rem",
                                                        color: "#fffffb",
                                                    }}
                                                />
                                            </h4>
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid container marginTop={"1.5rem"} justifyContent={"left"}>
                                    <Grid container marginBottom={".25rem"} alignItems='center' justifyContent='center' item xs={10}>
                                        <HomeIcon /> <a href="#/homepage"><span>Home</span></a>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center">
                                    <Grid container alignItems='center' justifyContent='center' item xs={10}>
                                        <GridViewIcon /> <a href="#/dashboard"><span>Dashboard</span></a>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        {/* Start of Middle Column */}
                        <Grid item xs={12} md={9} xl={8} justifyContent="center">
                            <div className="">
                                <Grid container justifyContent="center">
                                    <Grid item xs={12}>
                                        <h2>Try a new Future?</h2>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="center">
                                    <Grid item xs={12} md={8}>
                                        <p>
                                            Choosing the right major is crucial for shaping your future. It's about combining your interests and strengths with career potential. Research fields, seek advice, and find a balance between passion and practicality. Your major can be a stepping stone to a fulfilling and successful path ahead.
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Button
                                            sx={{
                                                backgroundColor: "#f05b6d",
                                                padding: ".5rem 1.25rem",
                                            }}
                                            className="button-main"
                                            variant="contained"
                                            type="button"
                                            onClick={() => {
                                                history.push("/college-major-selection");
                                            }}
                                        >
                                            Start Your Journey
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                            {/* For container Heading */}
                            <Grid item xs={12}>
                                <h2>Need help getting started?</h2>
                            </Grid>
                            {/* End of Container Heading */}
                            <Grid item xs={12} justifyContent="center">
                                <div className="">
                                    <p>Choosing a major is a pivotal decision with far-reaching implications for your academic and professional journey. To navigate this process effectively, consider the following insights:</p>
                                    {/* Additional content here */}
                                </div>
                            </Grid>
                        </Grid>
                        {/* End of Middle Column */}
                        <Grid item xs={12} md={3} xl={2} justifyContent="center">
                            <div className="left-box-shadow">
                                <div className="text-center username-margin">Howdy, <span>{user.first_name}!</span></div>
                                <div>
                                    <img className="profile-img" src={plannerImg} alt="Image of a planner" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default UserHomePage;
