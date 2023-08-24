const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.put('/', (req, res) => {
    console.log('Received PUT request to update user future');
    console.log('ID HERE',req.user.id);
    const userId = req.user.id;
    const mortgage = req.body.editableMortgagePayment;
    const carPayment = req.body.editableCarPayment;
    const carInsurance = req.body.editableCarInsurance;
    const groceries = req.body.editableGroceries;
    const utilities = req.body.editableUtilities;
    const studentLoanPayment = req.body.editableStudentLoanPayment;
    const idToUpdate = req.body.currentRow; // Assuming you're passing the ID of the record to update
  console.log(idToUpdate,'IdTOUpdate');
    const queryText = `
      UPDATE "user_future_table"
      SET avg_monthly_mortgage = $1, avg_monthly_car_payment = $2, avg_monthly_car_insurance = $3, avg_monthy_groceries = $4, avg_monthly_utilities = $5, avg_monthly_student_loan_payment = $6
      WHERE id = $7 AND user_id = $8`;
    
    pool
      .query(queryText, [mortgage, carPayment, carInsurance, groceries, utilities, studentLoanPayment, idToUpdate, userId])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log('Failed to update the user data table ', err);
        res.sendStatus(500);
      });
  });

  module.exports = router;