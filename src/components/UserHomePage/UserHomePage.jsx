import React, { useState } from "react";
import { useHistory} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import Face5Icon from "@mui/icons-material/Face5";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HomeIcon from '@mui/icons-material/Home';
import { Container } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';
import plannerImg from '../../images/profile-img.png'



function UserHomePage() {
    const history = useHistory();
    const user = useSelector((store) => store.user);
    const collegeMajor = useSelector((store) => store.collegeMajor);
  return (
    <>
      {/* #f0f5fd, purple is #f3edff, new purple */}
      <div className="background-purple">
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              justifyContent={"center"}
              container
              item
              xl={12}
              sx={{
                backgroundColor: "#fffffb",
                marginTop: "3rem",
                borderRadius: "25px",
              }}
            >
              <Grid className="right-box-shadow" item xl={2}>
                <Grid container justifyContent={"center"}>
                  <Grid item xl={10}>
                    <h2 className="text-center">Future Plans</h2>
                  </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <Grid item xl={7}>
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
                  <Grid container marginBottom={".25rem"} alignItems={'center'} justifyContent={'center'} item xl={10}>
                    <HomeIcon /> <a href="#/homepage"><span>Home</span></a>
                  </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <Grid container alignItems={'center'} justifyContent={'center'} item xl={10}>
                    <GridViewIcon /> <a href="#/dashboard"><span>Dashboard</span></a>
                  </Grid>
                </Grid>
              </Grid>
              {/* Start of Middle Column */}
              <Grid
                className=""
                justifyContent={"center"}
                container
                item
                xl={8}
                sx={{ backgroundColor: "#f0f5fd", borderRadius: "25px" }}
              >
                <Grid
                  className="db-primary-container"
                  item
                  xl={10}
                  sx={{
                    backgroundColor: "#fffffb",
                    borderRadius: "25px",
                    padding: "1rem",
                    marginTop: "3rem",
                    border: "1px solid #f3f3f3",
                  }}
                >
                  <h2>Try a new Future?</h2>
                  <Grid container justifyContent={"center"}>
                    <Grid
                      className=""
                      item
                      xl={8}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
                      <p>
                      Choosing the right major is crucial for shaping your future. It's about combining your interests and strengths with career potential. Research fields, seek advice, and find a balance between passion and practicality. Your major can be a stepping stone to a fulfilling and successful path ahead.
                      </p>
                    </Grid>
                    <Grid
                      textAlign={"center"}
                      className=""
                      item
                      xl={4}
                      alignSelf={"center"}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
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
                </Grid>
                {/* For container Heading */}
                <Grid item xl={10}>
                  <h2>Need help getting started?</h2>
                </Grid>
                {/* End of Container Heading */}
                <Grid
                  className="db-primary-container"
                  item
                  xl={10}
                  sx={{
                    backgroundColor: "#fffffb",
                    borderRadius: "15px",
                    padding: "1rem",
                  }}
                >
                  <h2>Tips for choosing a major</h2>
                  <Grid container justifyContent={"center"}>
                    <Grid
                      className=""
                      item
                      xl={12}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
                      <p>Choosing a major is a pivotal decision with far-reaching implications for your academic and professional journey. To navigate this process effectively, consider the following insights:
                      <br /> <br />
Begin with Self-Reflection: Delve into your passions, interests, and strengths. Consider the activities that bring you joy and the subjects that pique your curiosity.
<br /> <br />
Explore Career Avenues: Investigate potential career paths that resonate with your interests. Research job descriptions, required skills, and potential earnings to gauge their compatibility.
<br /> <br />
Assess Your Abilities: Take stock of your existing skills and the ones you wish to cultivate. Opt for a major that aligns with your strengths and allows room for skill enhancement.
</p>
                    </Grid>
                    <Grid
                      textAlign={"center"}
                      className=""
                      item
                      xl={4}
                      alignSelf={"center"}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
                    </Grid>
                  </Grid>
                </Grid>
           
              </Grid>
              {/* End of Middle Column */}
              <Grid className="left-box-shadow" item xl={2}>
              <div className="text-center username-margin">Howdy, <span>{user.first_name}!</span>
              <div >
              <img className="profile-img" src={plannerImg} alt="Image of a planner" />
              </div>
              
              </div>
                {/* <div>Howdy, <span>{collegeMajor[0].major_name}!</span></div> */}
                {/* <div>
                    {collegeMajor.map((collegeMajor, index) => (
                        <div key={index}>Howdy, <span>{collegeMajor.major_name}!</span> - Average Salary: ${collegeMajor.average_salary}</div>
                    ))}
                </div> */}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default UserHomePage;
