import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {useEffect} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import Face5Icon from "@mui/icons-material/Face5";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HomeIcon from '@mui/icons-material/Home';
import "./Dashboard.css";
import { Container } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';


function Dashboard() {
const dispatch = useDispatch();
const user = useSelector((store) => store.user);
const userFutureData = useSelector((store) => store.userFuture);
console.log('Eyes ehre',userFutureData);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_FUTURE' });
  }, [dispatch]);

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
                {/* For container Heading */}
                <Grid item xl={10}>
                  <h2>Will this be your future</h2>
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
                  <h2>{userFutureData.map(item => item.college_major)}</h2>
                  <p>University Name</p>
                  <p>Degree Name</p>
                  <Grid container justifyContent={"center"}>
                    <Grid
                      className=""
                      item
                      xl={8}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
                      <p>Avg Salary of "Name of Career": $75000</p>
                      <p>Monthly Take Home Pay: $4500</p>
                      <p>Avg Monthly Mortgage: $1800</p>
                      <p>Avg Monthly cost of groceries: $400</p>
                      <p>Avg Monthly cost of Utilities: $250</p>
                      <p>Avg Monthly cost of car payment: $400</p>
                      <p>Avg Monthly cost of car Insurance: $150</p>
                      <p>Avg Monthly student loan payment: $400</p>
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
                        Change me to a freaking pie chart brotherrrr
                      </Button>
                    </Grid>
                    <h3>Retirement Forecast</h3>
                  </Grid>
                  <div>Cool Chart.js graph</div>
                </Grid>
                <h1>Text box here with comments. Has an edit button and a delete button. </h1>
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
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
