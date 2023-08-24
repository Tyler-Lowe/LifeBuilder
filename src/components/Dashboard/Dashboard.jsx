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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import plannerImg from '../../images/profile-img.png'


function Dashboard() {

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_FUTURE' })
  }, [dispatch]);
  const userFutureData = useSelector((store) => store.userFuture);
  const [selectedMajor, setSelectedMajor] = useState("");
  const handleCollegeMajorChange = (event) => {
    // setMajor(event.target.value);
    setSelectedMajor(event.target.value);
  };
console.log('Tyler Here', userFutureData.avg_monthly_mortgage);
  useEffect(() => {
    if (userFutureData.length > 0) {
      setSelectedMajor(userFutureData[userFutureData.length - 1].college_major);
      setEditableMortgagePayment(userFutureData[userFutureData.length - 1].avg_monthly_mortgage)
      setEditableCarPayment(userFutureData[userFutureData.length - 1].avg_monthly_car_payment)
      setEditableCarInsurance(userFutureData[userFutureData.length - 1].avg_monthly_car_insurance)
      setEditableGroceries(userFutureData[userFutureData.length - 1].avg_monthy_groceries)
      setEditableUtilities(userFutureData[userFutureData.length - 1].avg_monthly_utilities)
      setEditableStudentLoanPayment(userFutureData[userFutureData.length - 1].avg_monthly_student_loan_payment)
    }
  }, [userFutureData]);

const user = useSelector((store) => store.user);

console.log('Eyes ehre',userFutureData);

// Editable Fields
// Mortgage
const [editableMortgagePayment, setEditableMortgagePayment] = React.useState(
  userFutureData.avg_monthly_mortgage
);
// Car Payment
const [editableCarPayment, setEditableCarPayment] = React.useState(
  userFutureData.avg_monthly_car_payment
);
// Car Insurance
const [editableCarInsurance, setEditableCarInsurance] = React.useState(
  userFutureData.avg_monthly_car_insurance
);
// Groceries
const [editableGroceries, setEditableGroceries] = React.useState(
  userFutureData.avg_monthy_groceries
);
// Utilities
const [editableUtilities, setEditableUtilities] = React.useState(
  userFutureData.avg_monthly_utilities
);
// Student Loan Payment
const [editableStudentLoanPayment, setEditableStudentLoanPayment] = React.useState(
  userFutureData.avg_monthly_student_loan_payment
);
// The current row id
// Student Loan Payment
const [currentRow, setCurrentRow] = React.useState('');

// Update user_future_table
const updateUserFutureTable = (event) => {

  dispatch({
    type: 'UPDATE_USER_FUTURE_TABLE',
    payload: {
      editableMortgagePayment: editableMortgagePayment,
      editableCarPayment: editableCarPayment,
      editableCarInsurance: editableCarInsurance,
      editableGroceries: editableGroceries,
      editableUtilities: editableUtilities, 
      editableStudentLoanPayment: editableStudentLoanPayment,
      currentRow: currentRow
    },
  });
}; // end UPDATE USER FUTURE

// Delete this future
const deleteThisFuture = (event) => {
  dispatch({
    type: 'DELETE_THIS_ROW',
    payload: {
      currentRow: currentRow,
    },
  });
}; // end UPDATE USER FUTURE

console.log('Is INSURANCE RIGHT?', editableCarInsurance)


if (!userFutureData.length) {
  return <div>Loading...</div>;
}
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
                      onClick={() => {
                        history.push("/college-major-selection")
                       
                      }}
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
                {/* For container Heading */}
                <Grid item xl={10}>
                  {/* <h2>Will this be your future</h2> */}
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
                  <h2>Select your future!</h2>
<Select
 value={selectedMajor}
onChange={handleCollegeMajorChange}
>
  {userFutureData.map((futureData, index) => (
    <MenuItem key={index} value={futureData.college_major}>
      {futureData.college_major}
    </MenuItem>
  ))}
</Select>
{userFutureData
  .filter((futureData) => futureData.college_major === selectedMajor)
  .map((filteredData, index) => (
    // Render the filteredData properties here
    <div key={index}>
      <div value={currentRow}></div>
      <h4>My future if I go to {filteredData.college_name} and major in {filteredData.college_major}</h4>
      <p>Average Annual Salary: <span className="text-green">$</span><span className="text-green">{filteredData.college_major_salary}</span></p>
      <h2>After Taxes</h2>
      <p>Monthly Take Home Pay: <span className="text-green">$</span><span className="text-green">{((parseInt(filteredData.college_major_salary) -  (parseInt(filteredData.college_major_salary) * .20)) /12).toFixed(2)}</span></p>
      <h3>Average Monthly Expenses</h3>
      <p>These are expenses that you are likely to have but everyones situtation is different. Maybe you have no student loans but you drive a brand new car. Just change the values as needed!</p>
      <p>
        Mortgage:{" "}
        <input
          type="number"
          step="1"
          defaultValue={editableMortgagePayment}
          value={editableMortgagePayment}
          onChange={(event) =>
            setEditableMortgagePayment(event.target.value)
          }
        />
      </p>
      <p>
        Car Payment:{" "}
        <input
          type="number"
          step="1"
          defaultValue={editableCarPayment}
          value={editableCarPayment}
          onChange={(event) =>
            setEditableCarPayment(event.target.value)
          }
        />
      </p>
      <p>
        Car Insurance:{" "}
        <input
          type="number"
          step="1"
          defaultValue={editableCarInsurance}
          value={editableCarInsurance}
          onChange={(event) =>
            setEditableCarInsurance(event.target.value)
          }
        />
      </p>
      <p>
        Groceries:{" "}
        <input
          type="number"
          step="1"
          defaultValue={editableGroceries}
          value={editableGroceries}
          onChange={(event) =>
            setEditableGroceries(event.target.value)
          }
        />
      </p>
      <p>
        Utilities:{" "}
        <input
          type="number"
          step="1"
          defaultValue={editableUtilities}
          value={editableUtilities}
          onChange={(event) =>
            setEditableUtilities(event.target.value)
          }
        />
      </p>
      <p>
        Student Loan Payment:{" "}
        <input
          type="number"
          step="1"
          defaultValue={editableStudentLoanPayment}
          value={editableStudentLoanPayment}
          onChange={(event) =>
            setEditableStudentLoanPayment(event.target.value)
          }
        />
      </p>
      <h3>What's left after the month?</h3>
      <h1 className="text-green text-center">${((parseInt(filteredData.college_major_salary) -  (parseInt(filteredData.college_major_salary) * .20)) /12).toFixed(0) - parseInt(editableMortgagePayment) - parseInt(editableCarPayment) - parseInt(editableCarInsurance) - parseInt(editableGroceries)  - parseInt(editableUtilities) - parseInt(editableStudentLoanPayment).toFixed(2)}</h1>
      <div className="text-center">
      <Button
                        sx={{
                          backgroundColor: "#4200cd",
                          padding: ".5rem 1.25rem",
                          marginRight: "1rem"
                        }}
                        className="button-main"
                        variant="contained"
                        type="button"
                        onClick={() => {
                          setCurrentRow(filteredData.id)
                         updateUserFutureTable();
                         
                        }}
                      >
                        Save Changes
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: "#f05b6d",
                          padding: ".5rem 1.25rem",
                          marginLeft: "1rem"
                        }}
                        className="button-main"
                        variant="contained"
                        type="button"
                        onClick={() => {
                          setCurrentRow(filteredData.id)
                          deleteThisFuture();
                        }}
                      >
                        Delete Future
                      </Button>
                      </div>
    </div>
    
  ))}
  
                  
                 
                  <Grid container justifyContent={"center"}>
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
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
