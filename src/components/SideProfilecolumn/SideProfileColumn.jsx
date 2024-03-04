import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import plannerImg from '../../images/user-avatar.png'
import '../App/App.css'



function SideProfileColumn() {
    const user = useSelector((store) => store.user);
    return (
        <Grid item xs={12} md={3} xl={2} justifyContent="center" className="background-primary-white rounded-corners">
            <div className="left-box-shadow">
                <div className="text-center username-margin">Howdy, <span>{user.first_name}!</span></div>
                <div className="text-center">
                    <img className="profile-img" src={plannerImg} alt="Image of a planner" />
                </div>
            </div>
        </Grid>
    );
}

export default SideProfileColumn;
