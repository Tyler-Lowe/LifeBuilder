import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import Face5Icon from "@mui/icons-material/Face5";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Container } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux';

function FuturePreview() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const userSelections = useSelector((state) => state.userSelections);

  // Check if userSelections is defined before destructuring
  const { selectedState, selectedCollege, selectedMajor } = userSelections;

  console.log(userSelections, 'Tyler Your major should be here')
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
                    <h2>Hey {user.first_name}!</h2>
                    <p>How does this future look?</p>
                  <h2>{selectedMajor} why you not show?</h2>
                  <p>Life after graduating with a degreeName degree from universityName living in selectedState</p>
                  <Grid container justifyContent={"center"}>
                    <Grid
                      className=""
                      item
                      xl={12}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
                    <h4>* All values are averages</h4>
                      <p>Avg Salary of "Name of Career": $75000</p>
                      <p>Monthly Take Home Pay: $4500</p>
                        <span>Insert Pie Chart of 50/30/20 based on salary</span>
                        <p>small blurb to support the above text and more info about something here</p>
                        <Button
                        sx={{
                          backgroundColor: "#f05b6d",
                          padding: ".5rem 1.25rem",
                        }}
                        className="button-main"
                        variant="contained"
                        type="button"
                        onClick={() => {
                          history.push("/dashboard");
                        }}
                      >
                        Add This Future
                      </Button>
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
  );
}

export default FuturePreview;
