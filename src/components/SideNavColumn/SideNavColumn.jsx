import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import Face5Icon from "@mui/icons-material/Face5";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useSelector } from "react-redux";
import plannerImg from '../../images/user-avatar.png'
import { useHistory } from "react-router-dom";

import '../App/App.css'

function SideNavColumn() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleSubmit = async () => {
    history.push('/college-major-selection')
  }

  return (
    <Grid className="right-box-shadow background-primary-white rounded-corners m-r-lg sticky" item xl={2}>
      <div className="sticky">
      <Grid container justifyContent={"center"}>
        <Grid item lg={12} xl={10}>
            <div className="left-box-shadow m-b-l">
                <div className="text-center username-margin">Howdy, <span>{user.first_name}!</span></div>
                <div className="text-center">
                    <img className="profile-img" src={plannerImg} alt="Image of a planner" />
                </div>
            </div>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item xl={7} className="m-t-l p-t-l">
          <Button
            sx={{
              backgroundColor: "#d2d0f6",
              borderRadius: "25px",
              width: "100%",
            }}
            className="text-center"
            onClick={handleSubmit}
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
      </div>
    </Grid>
  );
}

export default SideNavColumn;
