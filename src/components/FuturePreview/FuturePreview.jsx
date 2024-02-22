import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import GridViewIcon from "@mui/icons-material/GridView";
import Face5Icon from "@mui/icons-material/Face5";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import SideNavColumn from "../SideNavColumn/SideNavColumn";
import SideProfileColumn from "../SideProfilecolumn/SideProfileColumn";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChatJS } from 'chart.js/auto'

import './FuturePreview.css'

function FuturePreview() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const userSelections = useSelector((state) => state.userSelections);

  // Tax Calculator



  // Check if userSelections is defined before destructuring
  const { selectedState, selectedCollege, selectedMajor, selectedMajorSalary, selectedMajorDescription } = userSelections;

  const handleSubmit = async () => {
    await dispatch({  type: 'SET_USER_SELECTIONS_FINAL', payload: {  selectedState, selectedCollege, selectedMajor, selectedMajorSalary, selectedMajorDescription}  })
    history.push('/dashboard')
  }
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
  const salary = selectedMajorSalary; // Example salary
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


  console.log(userSelections, 'Tyler Your major should be here')
  return (
    <>
      {/* #f0f5fd, purple is #f3edff, new purple */}
      <div className="background-grey p-b-xl">
        <Container maxWidth="xl" spacing={1}>
          <Grid container >
            <Grid
              justifyContent={"center"}
              container
              item
              xl={12}
              sx={{
                // backgroundColor: "#fffffb",
                marginTop: "3rem",
                borderRadius: "25px",
              }}
            >
              <SideNavColumn />
              {/* Start of Middle Column */}
              <Grid
                className=""
                justifyContent={"center"}
                container
                item
                xl={8}
              >
                <Grid
                  className="db-primary-container"
                  item
                  xl={11}
                  sx={{
                    backgroundColor: "#fffffb",
                    borderRadius: "10px",
                    padding: "1rem",
                  }}
                >
                  <h2 className="text-center"> Future Preview </h2>
                  <p>Hey {user.first_name}, How does this future look?</p>
                  <p><strong>College: </strong>{selectedCollege}</p>
                  <p><strong>Major: </strong>{selectedMajor}</p>
                  <p>Life after graduating with a {selectedMajor} degree from {selectedCollege}</p>
                  <Grid container justifyContent={"center"}>
                    <Grid
                      className=""
                      item
                      xl={12}
                      sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}
                    >
                      <p><strong>Average Annual Salary: </strong>${selectedMajorSalary}</p>
                      <p><strong>Monthly Take Home Pay: </strong>${monthlyTakeHomePay}</p>

                      <Grid container>
                        <span className="spending-rule">The 50/30/20 rule is a budgeting guideline that suggests allocating 50% of your income to necessities, 30% to wants, and 20% to savings and debt repayment.</span>
                        <Grid
                          item
                          xl={6}
                          className="chart-data-set"
                        >
                          <div className="chart-data-set">
                            <p className="text-bold underline">50/30/20 Breakdown</p>
                            <p className="chart-red"><strong>Needs: ${needs}</strong></p>
                            <p className="chart-blue"><strong>Wants: ${wants}</strong></p>
                            <p className="chart-yellow"><strong>Savings: ${savings}</strong></p>
                          </div>

                        </Grid>
                        <Grid
                          item
                          xl={5}
                        >
                          <Pie
                            data={pieChartData}
                            options={{
                              plugins: {
                                legend: {
                                  display: false, // This line hides the legend
                                }
                              },
                              tooltips: {
                                callbacks: {
                                  label: function (tooltipItem, data) {
                                    var label = data.labels[tooltipItem.index];
                                    var value = data.datasets[0].data[tooltipItem.index];
                                    return label + ': $' + value;
                                  }
                                }
                              }
                            }}
                          />

                        </Grid>
                      </Grid>
                      <p>
                        {selectedMajorDescription}
                      </p>
                      <Button
                        sx={{
                          backgroundColor: "#f05b6d",
                          padding: ".5rem 1.25rem",
                        }}
                        className="button-main"
                        variant="contained"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Add This Future
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* End of Middle Column */}
              <SideProfileColumn />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default FuturePreview;
