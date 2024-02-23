import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container, FormControl, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import SideNavColumn from "../SideNavColumn/SideNavColumn";
import SideProfileColumn from "../SideProfilecolumn/SideProfileColumn";
import TextField from '@mui/material/TextField';

import "./Dashboard.css";


function Dashboard() {
  const dispatch = useDispatch();
  const userFutureData = useSelector((store) => store.userFuture);

  // Local state to manage the selected college major
  const [selectedCollegeMajor, setSelectedCollegeMajor] = useState('');
  const [selectedId, setSelectedId] = useState(userFutureData.length > 0 ? userFutureData[userFutureData.length - 1].id : null);
  const [selectedCollegeMajorSalary, setSelectedCollegeMajorSalary] = useState(userFutureData.length > 0 ? userFutureData[userFutureData.length - 1].id : null);


  // Fetch user future on component mount
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_FUTURE' });
  }, [dispatch]);

  // Update selectedCollegeMajor when userFutureData changes and has data
  useEffect(() => {
    if (userFutureData.length > 0) {
      const lastItem = userFutureData[userFutureData.length - 1];
      setSelectedCollegeMajor(`${lastItem.college_name} - ${lastItem.college_major}`);
      setSelectedId(lastItem.id);
      setSelectedCollegeMajorSalary(lastItem.college_major_salary);
    }
  }, [userFutureData]);

  const handleCollegeMajorChange = (event) => {
    const selectedIndex = userFutureData.findIndex(item => `${item.college_name} - ${item.college_major}` === event.target.value);
    if (selectedIndex > -1) {
      const selectedObject = userFutureData[selectedIndex];
      setSelectedId(selectedObject.id); // Update the state with the selected ID
      setSelectedCollegeMajorSalary(selectedObject.college_major_salary);
      setSelectedCollegeMajor(event.target.value); // Update the display value as before
    }
  };

  console.log(selectedId, 'Tyler object id is here')

  function findDataById(selectedId) {
    return userFutureData.find(item => item.id === selectedId)
  }
  console.log(findDataById(selectedId), 'Tyler this is the find');

  // Finance Calculations
  function calculateMonthlyTakeHomePay(salary) {
    // Federal tax brackets and rates for 2022
    const taxBrackets = [
      { min: 0, max: 10000, rate: 0.1 },
      { min: 10000, max: 40000, rate: 0.12 },
      { min: 40000, max: 80000, rate: 0.22 },
      { min: 80000, max: Infinity, rate: 0.24 }
    ];

    // Social Security and Medicare rates
    const socialSecurityRate = 0.062;
    const medicareRate = 0.0145;

    // Calculate federal income tax
    let federalIncomeTax = 0;
    let remainingSalary = salary;
    for (const bracket of taxBrackets) {
      if (remainingSalary <= 0) break;
      const taxableAmount = Math.min(bracket.max - bracket.min, remainingSalary);
      federalIncomeTax += taxableAmount * bracket.rate;
      remainingSalary -= taxableAmount;
    }

    // Calculate Social Security and Medicare tax
    const socialSecurityTax = salary * socialSecurityRate;
    const medicareTax = salary * medicareRate;

    // Calculate total taxes
    const totalFederalTaxes = federalIncomeTax + socialSecurityTax + medicareTax;

    // Calculate monthly take-home pay
    const monthlyTakeHomePay = (salary - totalFederalTaxes) / 12;

    return monthlyTakeHomePay.toFixed(2); // Return rounded to two decimal places
  }

  // Example usage:
  const salary = selectedCollegeMajorSalary; // Example salary
  const monthlyTakeHomePay = calculateMonthlyTakeHomePay(salary);
  console.log("Monthly take-home pay:", monthlyTakeHomePay);

  const needs = (monthlyTakeHomePay * 0.5).toFixed(2);
  const wants = (monthlyTakeHomePay * 0.3).toFixed(2);
  const savings = (monthlyTakeHomePay * 0.2).toFixed(2);


  const pieChartData = {
    labels: ["50% Needs", "30% Wants", "20% Savings"],
    datasets: [
      {
        data: [needs, wants, savings],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  return (
    <div className="background-grey p-b-xl">
      <Container maxWidth="xl" spacing={1}>
        <Grid container>
          <Grid justifyContent={"center"} container item xl={12} sx={{ marginTop: "3rem", borderRadius: "25px" }}>
            <SideNavColumn />
            <Grid justifyContent={"center"} container item xl={8}>
              <Grid className="db-primary-container" item xl={11} sx={{ backgroundColor: "#fffffb", borderRadius: "10px", padding: "1rem" }}>
                <h2 className="text-center">Future: {selectedCollegeMajor}</h2>
                <Grid container>
                  <Grid item sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}>
                    <FormControl >
                      <p className="text-bold">Your Futures:</p>
                      <Select
                        value={selectedCollegeMajor}
                        onChange={handleCollegeMajorChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        {userFutureData.map((item, index) => (
                          <MenuItem key={index} value={`${item.college_name} - ${item.college_major}`}>
                            {`${item.college_name} - ${item.college_major}`}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <p>Average Salary: ${selectedCollegeMajorSalary}</p>
                    <p>Monthly Take Home Pay: ${monthlyTakeHomePay}</p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xl={6}>
                    <h2 className="text-bold">Needs:</h2>
                    <Grid container>
                      <Grid item xl={6}>
                        <span>Housing: </span>
                      </Grid>
                      <Grid item xl={6}>
                        <TextField
                          value={monthlyTakeHomePay}
                          type="number"
                        />
                      </Grid>
                      
                    </Grid>
                  </Grid>
                  <Grid item xl={6}>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <SideProfileColumn />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
