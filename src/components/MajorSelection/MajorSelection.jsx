import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import "./MajorSelection.css";
import { Dashboard } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import Face5Icon from "@mui/icons-material/Face5";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import StateSelection from "../StateSelection/StateSelection";
import {useSelector, useDispatch} from 'react-redux';
import plannerImg from '../../images/profile-img.png'


function MajorSelection() {
    const history = useHistory();
    const user = useSelector((store) => store.user);

    return (
        <>
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
                marginBottom: "4rem",
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
                    marginBottom: "3rem",
                    border: "1px solid #f3f3f3",
                  }}
                >
                    <h2 className="text-purple">Let's get started building your future!</h2>
                  <Grid container justifyContent={"center"}>
                    <Grid
                      className=""
                      item
                      xl={8}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
                        <StateSelection />
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
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
        </>
    )
}

export default MajorSelection;