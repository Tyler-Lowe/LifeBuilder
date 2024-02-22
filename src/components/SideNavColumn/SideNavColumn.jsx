import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import Face5Icon from "@mui/icons-material/Face5";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import '../App/App.css'

function SideNavColumn() {
  return (
    <Grid className="right-box-shadow background-primary-white rounded-corners m-r-lg" item xl={2}>
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
        <Grid container alignItems={"center"} justifyContent={"center"} item xl={10}>
          <GridViewIcon /> <span>Dashboard</span>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid container alignItems={"center"} justifyContent={"center"} item xl={10}>
          <Face5Icon /> <span>Activity</span>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid container alignItems={"center"} justifyContent={"center"} item xl={10}>
          <AutoStoriesIcon /> <span>My Story</span>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SideNavColumn;
