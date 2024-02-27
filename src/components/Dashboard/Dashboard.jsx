import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from "@mui/material/Tooltip";
import { Container, FormControl, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import SideNavColumn from "../SideNavColumn/SideNavColumn";
import SideProfileColumn from "../SideProfilecolumn/SideProfileColumn";
import TextField from '@mui/material/TextField';
import { Pie } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChatJS } from 'chart.js/auto'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import "./Dashboard.css";


function Dashboard() {
  const dispatch = useDispatch();
  const userFutureData = useSelector((store) => store.userFuture);
console.log(typeof userFutureData, 'WHAT IS THE TYPE?!')
console.log(userFutureData, 'NOW')

  const [selectedCollegeMajor, setSelectedCollegeMajor] = useState('');
  const [selectedId, setSelectedId] = useState(userFutureData.length > 0 ? userFutureData[userFutureData.length - 1].id : null);
  const [selectedCollegeMajorSalary, setSelectedCollegeMajorSalary] = useState(userFutureData.length > 0 ? userFutureData[userFutureData.length - 1].id : null);
  const [selectedHousing, setSelectedHousing] = useState(0);
  const [selectedUtilities, setSelectedUtilities] = useState(0);
  const [selectedGroceries, setSelectedGroceries] = useState(0);
  const [selectedHealthCare, setSelectedHealthCare] = useState(0);
  const [selectedTransportation, setSelectedTransportation] = useState(0);
  const [selectedNecessities, setSelectedNecessities] = useState(0); 
  const [selectedEatingOut, setSelectedEatingOut] = useState(0);
  const [selectedEntertainment, setSelectedEntertainment] = useState(0);
  const [selectedVacations, setSelectedVacations] = useState(0);
  const [selectedMiscWants, setSelectedMiscWants] = useState(0);
  const [selected401kContr, setSelected401kContr] = useState(0);
  const [selectedMiscSavings, setSelectedMiscSavings] = useState(0);
  const [selectedStudentLoan, setSelectedStudentLoan] = useState(0);
  const [selectedMiscDebt, setSelectedMiscDebt] = useState(0);
  const [needs2, setNeeds] = useState(0);
  const [wants2, setWants] = useState(0);
  const [savings2, setSavings] = useState(0);



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
      setSelectedHousing(lastItem.avg_monthly_mortgage);
      setSelectedUtilities(lastItem.avg_monthly_utilities);
      setSelectedGroceries(lastItem.avg_monthy_groceries);
      setSelectedHealthCare(lastItem.health_care);
      setSelectedTransportation(lastItem.avg_monthly_car_payment); // Assuming transportation costs are represented by car payments
      setSelectedNecessities(lastItem.basic_necessities);
      setSelectedEatingOut(lastItem.eating_out);
      setSelectedEntertainment(lastItem.entertainment);
      setSelectedVacations(lastItem.vacations);
      setSelectedMiscWants(lastItem.misc_wants);
      setSelected401kContr(lastItem.contrib_401k); // Assuming '401k_contrib' is the correct column name; remember to handle potential issues with naming
      setSelectedMiscSavings(lastItem.misc_savings);
      setSelectedStudentLoan(lastItem.avg_monthly_student_loan_payment); // Assuming this is the correct mapping
      setSelectedMiscDebt(lastItem.misc_debts);
      // setSelectedActualNeeds(parseFloat(lastItem.avg_monthly_mortgage) + 
    }
  }, [userFutureData]);

  useEffect(() => {
    const totalNeeds = Number(selectedHousing) + Number(selectedUtilities) + Number(selectedGroceries) + Number(selectedHealthCare) + Number(selectedTransportation) + Number(selectedNecessities);
    const totalWants = Number(selectedEatingOut) + Number(selectedEntertainment) + Number(selectedVacations) + Number(selectedMiscWants);
    const totalSavings = Number(selected401kContr) + Number(selectedMiscSavings) + Number(selectedStudentLoan) + Number(selectedMiscDebt);
    

    setNeeds(totalNeeds);
    setWants(totalWants);
    setSavings(totalSavings);
  }, [selectedHousing,selectedUtilities,selectedGroceries,selectedHealthCare,selectedTransportation,selectedNecessities,selectedEatingOut,selectedEntertainment,selectedVacations,selectedMiscWants, selected401kContr,selectedMiscSavings,selectedStudentLoan,selectedMiscDebt])

  const handleCollegeMajorChange = (event) => {
    const selectedIndex = userFutureData.findIndex(item => `${item.college_name} - ${item.college_major}` === event.target.value);
    if (selectedIndex > -1) {
      const selectedObject = userFutureData[selectedIndex];
      setSelectedId(selectedObject.id); // Update the state with the selected ID
      setSelectedCollegeMajorSalary(selectedObject.college_major_salary);
      setSelectedHousing(selectedObject.avg_monthly_mortgage);
      setSelectedGroceries(selectedObject.avg_monthy_groceries);
      setSelectedUtilities(selectedObject.avg_monthly_utilities);
      setSelectedGroceries(selectedObject.avg_monthy_groceries);
      setSelectedHealthCare(selectedObject.health_care);
      setSelectedTransportation(selectedObject.avg_monthly_car_payment); // Assuming transportation costs are represented by car payments
      setSelectedNecessities(selectedObject.basic_necessities);
      setSelectedEatingOut(selectedObject.eating_out);
      setSelectedEntertainment(selectedObject.entertainment);
      setSelectedVacations(selectedObject.vacations);
      setSelectedMiscWants(selectedObject.misc_wants);
      setSelected401kContr(selectedObject.contrib_401k); // Assuming '401k_contrib' is the correct column name; remember to handle potential issues with naming
      setSelectedMiscSavings(selectedObject.misc_savings);
      setSelectedStudentLoan(selectedObject.avg_monthly_student_loan_payment); // Assuming this is the correct mapping
      setSelectedMiscDebt(selectedObject.misc_debts);
      setSelectedCollegeMajor(event.target.value); // Update the display value as before
    }
  };

  const handleChange = (event, setState) => {
    const value = event.target.value;
    if (value === '') {
      setState('');
    } else {
      const numericValue = Number(value);
      setState(numericValue >= 0 ? numericValue : 0);
    }
  };
  
  const handleHousingChange = (event) => handleChange(event, setSelectedHousing);
  const handleUtilitiesChange = (event) => handleChange(event, setSelectedUtilities);
  const handleGroceriesChange = (event) => handleChange(event, setSelectedGroceries);
  const handleHealthCareChange = (event) => handleChange(event, setSelectedHealthCare);
  const handleTransportationChange = (event) => handleChange(event, setSelectedTransportation);
  const handleNecessitiesChange = (event) => handleChange(event, setSelectedNecessities);
  const handleEatingOutChange = (event) => handleChange(event, setSelectedEatingOut);
  const handleEntertainmentChange = (event) => handleChange(event, setSelectedEntertainment);
  const handleVacationsChange = (event) => handleChange(event, setSelectedVacations);
  const handleMiscWantsChange = (event) => handleChange(event, setSelectedMiscWants);
  const handle401kContrChange = (event) => handleChange(event, setSelected401kContr);
  const handleMiscSavingsChange = (event) => handleChange(event, setSelectedMiscSavings);
  const handleStudentLoanChange = (event) => handleChange(event, setSelectedStudentLoan);
  const handleMiscDebtChange = (event) => handleChange(event, setSelectedMiscDebt);
  
  const handleSubmit = async () => {
    await dispatch({  type: 'UPDATE_USER_FUTURE_TABLE_NOW', payload: {  selectedHousing, selectedGroceries, selectedUtilities, selectedTransportation, selectedStudentLoan, selectedNecessities, selectedHealthCare, selectedEatingOut, selectedEntertainment, selectedVacations, selectedMiscWants, selected401kContr, selectedMiscSavings, selectedMiscDebt, selectedId}  })
    successAlert();
  }

  function successAlert () {
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
    Here is a gentle confirmation that your action was successful.
  </Alert>
  }


  // function findDataById(selectedId) {
  //   return userFutureData.find(item => item.id === selectedId)
  // }
  // console.log(findDataById(selectedId), 'Tyler this is the find');

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

  const pieChartDataActual = {
    labels: [`${((needs2/monthlyTakeHomePay) * 100).toFixed(0)}% Needs`,
    `${((wants2/monthlyTakeHomePay) * 100).toFixed(0)}% Wants`,
    `${((savings2/monthlyTakeHomePay) * 100).toFixed(0)}% Savings`],
    datasets: [
      {
        data: [needs2, wants2, savings2],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  let futureValue;
  // Bar Chart Here
  const calculateFutureValue = (principal, annualContribution, years, rateOfReturn) => {
    futureValue = principal;
    for (let i = 0; i < years; i++) {
      futureValue = (futureValue + annualContribution) * (1 + rateOfReturn / 100);
    }
    return futureValue;
  };


const initialInvestment = 0; // Adjust this to your initial investment amount
const yearlyContribution = selected401kContr * 12; // Adjust this to your yearly contribution
const annualGrowthRate = 7; // Example growth rate

  const yearsArray = Array.from({length: 40}, (_, i) => i + 1);

  const investmentGrowthData = yearsArray.map(year =>
    calculateFutureValue(initialInvestment, yearlyContribution, year, annualGrowthRate)
  );


  const barChartData = {
    labels: yearsArray.map(year => `${year} Years`),
    datasets: [
      {
        label: "401k Growth",
        data: investmentGrowthData,
        backgroundColor: 'rgba(102, 204, 153, 0.5)',
      }
    ],
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value ($)',
        }
      },
      x: {
        beginAtZero: true,
        align: 'end',
        title: {
          display: true,
          text: 'Years',
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '401k Investment Growth Over 40 Years',
      }
    },
    responsive: true,
  };

  // Tests
  // console.log(selectedHousing, 'Tyler Housing here')

  return (
    <div className="background-grey p-b-xl">
      <Container maxWidth="xl">
        <Grid container>
          <Grid justifyContent={"center"} container item xl={12} sx={{ marginTop: "3rem", borderRadius: "25px" }}>
            <SideNavColumn />
            <Grid justifyContent={"center"} container item xl={10}>
              <Grid className="db-primary-container" item xl={11} sx={{ backgroundColor: "#fffffb", borderRadius: "10px", padding: "1rem" }}>
                <h2 className="text-center">Future: {selectedCollegeMajor}</h2>
                <Grid container>
                  <Grid item sx={{ backgroundColor: "#fffffb", borderRadius: "5px" }}>
                    <FormControl >
                      <p className="text-bold">Your Futures:</p>
                      <Select

                        value={selectedCollegeMajor}
                        onChange={handleCollegeMajorChange}

                        inputProps={{ 'aria-label': 'Without label' }}
                      >
{Array.isArray(userFutureData) && userFutureData.map((item, index) => (
  <MenuItem key={index} value={`${item.college_name} - ${item.college_major}`}>
    {`${item.college_name} - ${item.college_major}`}
  </MenuItem>
))}
                      </Select>
                    </FormControl>
                    
                    <p>Average Salary: ${selectedCollegeMajorSalary}
                    <span className="info-icon"><Tooltip title="This is the average US salary for your chosen major" placement="right-start"><InfoIcon /></Tooltip></span></p>
                    <p>Monthly Take Home Pay: ${monthlyTakeHomePay}<span className="info-icon"><Tooltip title="This amount is after taxes are deducted" placement="right-start"><InfoIcon /></Tooltip></span></p>
                  </Grid>
                </Grid>
                <h2 className="text-bold">Needs:</h2>
                <Grid container spacing={12} >
                  <Grid item xl={6}>

                    <div>
                      <p className="m-n">Housing: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedHousing}
                      onChange={handleHousingChange}
                      type="number"
                    />
                    <div>
                      <p className="m-n">Utilities: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedUtilities}
                      onChange={handleUtilitiesChange}
                      type="number"
                    />
                    <div>
                      <p className="m-n">Groceries: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedGroceries}
                      onChange={handleGroceriesChange}
                      type="number"
                    />
                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <p className="m-n">Healthcare: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedHealthCare}
                      onChange={handleHealthCareChange}
                      type="number"
                    />
                    <div>
                      <p className="m-n">Transportation: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedTransportation}
                      onChange={handleTransportationChange}
                      type="number"
                    />
                    <div>
                      <p className="m-n">Basic Nessecities: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedNecessities}
                      onChange={handleNecessitiesChange}
                      type="number"
                    />
                  </Grid>
                </Grid>
                <h2 className="text-bold">Wants:</h2>
                <Grid container spacing={12} >
                  <Grid item xl={6}>

                    <div>
                      <p className="m-n">Eating Out: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedEatingOut}
                      onChange={handleEatingOutChange}
                      type="number"
                    />
                    <div>
                      <p className="m-n">Entertainment: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedEntertainment}
                      onChange={handleEntertainmentChange}
                      type="number"
                    />

                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <p className="m-n">Vacations: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedVacations}
                      onChange={handleVacationsChange}
                      type="number"
                    />
                    <div>
                      <p className="m-n">Misc: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedMiscWants}
                      onChange={handleMiscWantsChange}
                      type="number"
                    />

                  </Grid>
                </Grid>
                <h2 className="text-bold">Savings/Debts:</h2>
                <Grid container spacing={12} >
                  <Grid item xl={6}>

                    <div>
                      <p className="m-n">401k Contribution: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selected401kContr}
                      onChange={handle401kContrChange}
                      type="number"
                    />
                    <div>
                      <p className="m-n">Misc Savings: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedMiscSavings}
                      onChange={handleMiscSavingsChange}
                      type="number"
                    />
                  </Grid>
                  <Grid item xl={6}>
                    <div>
                      <p className="m-n">Student Loans: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedStudentLoan}
                      onChange={handleStudentLoanChange}
                      type="number"
                    />
                    <div>
                      <p className="m-n">Misc Debt: </p>
                    </div>

                    <TextField
                      fullWidth
                      value={selectedMiscDebt}
                      onChange={handleMiscDebtChange}
                      type="number"
                    />
                  </Grid>
                </Grid>
                <h2 className="text-center">Advised Budget vs. Reality</h2>
                <Grid container spacing={6}>
                  <Grid item xl={6}>
                    <h2 className="text-center">Adivised</h2>
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
                    <div className="chart-data-set">
                      <p className="text-bold underline">50/30/20 Breakdown</p>
                      <p className="chart-red"><strong>Needs: ${needs}</strong></p>
                      <p className="chart-blue"><strong>Wants: ${wants}</strong></p>
                      <p className="chart-yellow"><strong>Savings: ${savings}</strong></p>
                    </div>
                  </Grid>
                  <Grid item xl={6}>
                    <h2 className="text-center">Actual</h2>
                    <Pie
                      data={pieChartDataActual}
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
                    <div className="chart-data-set">
                      <p className="text-bold underline">{`${((needs2/monthlyTakeHomePay) * 100).toFixed(0)}/`}{
    `${((wants2/monthlyTakeHomePay) * 100).toFixed(0)}/`}
    {`${((savings2/monthlyTakeHomePay) * 100).toFixed(0)} `}Breakdown</p>
                      <p className="chart-red"><strong>Needs: ${needs2}</strong></p>
                      <p className="chart-blue"><strong>Wants: ${wants2}</strong></p>
                      <p className="chart-yellow"><strong>Savings: ${savings2}</strong></p>
                    </div>
                  </Grid>
                </Grid>
                <h2 className="text-center">401k: Your Retirement</h2>
                <Grid container justifyContent={'space-around'}>
                  <Grid item xl={12}>
                    <Bar data={barChartData} options={barChartOptions} />
                  </Grid>
                  <h3>Contributed: ${(selected401kContr * 12 * 40).toFixed(2)}</h3>
                  <h3>Growth: ${(futureValue - (selected401kContr * 12 * 40)).toFixed(2)}</h3>
                  <h3>Total Saved: ${futureValue.toFixed(2)}</h3>
                </Grid>
                <Grid container justifyContent={'space-around'}>
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
                        Update Future
                      </Button>
                  
                  <Button>Delete Future</Button>

                </Grid>
              </Grid>
            </Grid>
            {/* <SideProfileColumn /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
