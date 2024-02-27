const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/', (req, res) => {
    console.log('Received PUT request to update user future');

    // Assuming the row's unique ID is passed in the request body. Adjust if it's passed differently (e.g., URL parameter).
    const { selectedId, selectedHousing, selectedGroceries, selectedUtilities, selectedTransportation,
            selectedStudentLoan, selectedNecessities, selectedHealthCare, selectedEatingOut,
            selectedEntertainment, selectedVacations, selectedMiscWants, selected401kContr,
            selectedMiscSavings, selectedMiscDebt } = req.body;

    const queryText = `
        UPDATE public.user_future_table
        SET avg_monthly_mortgage = $1, avg_monthy_groceries = $2, avg_monthly_utilities = $3, 
            avg_monthly_car_payment = $4, avg_monthly_student_loan_payment = $5, 
            basic_necessities = $6, health_care = $7, eating_out = $8, entertainment = $9,
            vacations = $10, misc_wants = $11, contrib_401k = $12, misc_savings = $13, 
            misc_debts = $14
        WHERE id = $15`; // Use 'id' to specify the row to update

    const queryParams = [
        selectedHousing, selectedGroceries, selectedUtilities, selectedTransportation,
        selectedStudentLoan, selectedNecessities, selectedHealthCare, selectedEatingOut,
        selectedEntertainment, selectedVacations, selectedMiscWants, selected401kContr,
        selectedMiscSavings, selectedMiscDebt, selectedId // Use the row's ID here
    ];

    pool.query(queryText, queryParams)
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.error('Failed to update the user future table', err);
            res.sendStatus(500);
        });
});

module.exports = router;
