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
                <Grid container justifyContent={"center"}>
                  <Grid container alignItems={'center'} justifyContent={'center'} item xl={10}>
                    <HomeIcon /> <span>Home</span>
                  </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <Grid container alignItems={'center'} justifyContent={'center'} item xl={10}>
                    <GridViewIcon /> <span>Dashboard</span>
                  </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <Grid container alignItems={'center'} justifyContent={'center'} item xl={10}>
                    <Face5Icon /> <span>Activity</span>
                  </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <Grid container alignItems={'center'} justifyContent={'center'} item xl={10}>
                    <AutoStoriesIcon /> <span>My Story</span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ad cumque veniam. Nostrum accusantium debitis.
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
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet odio vel praesentium aspernatur numquam, ad perferendis harum, dignissimos voluptates a consequatur blanditiis vitae. Natus alias id nesciunt minima repellendus.</p>
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
                <Grid
                  className="db-primary-container"
                  item
                  xl={10}
                  sx={{
                    backgroundColor: "#fffffb",
                    borderRadius: "15px",
                    padding: "1rem",
                    marginTop: "3rem",
                  }}
                >
                  <h2>Name of Chosen Career Field</h2>
                  <Grid container justifyContent={"center"}>
                    <Grid
                      className=""
                      item
                      xl={8}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum ad cumque veniam. Nostrum accusantium debitis.
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
                          history.push("/registration");
                        }}
                      >
                        Start Your Journey
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* End of Middle Column */}
              <Grid className="left-box-shadow" item xl={2}>
                <div>Howdy, <span>{user.first_name}!</span></div>
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
