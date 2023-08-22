import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import "./MajorSelection.css";
import { Dashboard } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import Face5Icon from "@mui/icons-material/Face5";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import StateSelection from "../StateSelection/StateSelection";


function MajorSelection() {
    const history = useHistory();

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
                <div>I am right here! (3)</div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
        </>
    )
}

export default MajorSelection;