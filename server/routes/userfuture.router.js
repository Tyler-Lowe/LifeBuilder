const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', async (req, res) => {
    try {
      const userId = req.user.id;
      
      // Updated to order by id ascending
      const queryText = `
        SELECT * FROM "user_future_table"
        WHERE user_id = $1
        ORDER BY id ASC;
      `;
      
      const queryResult = await pool.query(queryText, [userId]);
      
      res.json(queryResult.rows);
    } catch (error) {
      console.error('Error fetching user future data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// Handles POST request with new user data
router.post('/', (req, res) => {
  console.log('I am updating user future table');
  const userId = req.user.id;
  const state = req.body.selectedState;
  const college = req.body.selectedCollege;
  const major = req.body.selectedMajor;
  const collegeDescription = req.body.selectedMajorDescription;
  const salary = req.body.selectedMajorSalary;
  // Initialize additional fields to 0 or appropriate default values
  const avgMortgage = req.body.avgMortgage || null;
  const avgGroceries = req.body.avgGroceries || 0;
  const avgUtilities = req.body.avgUtilities || 0;
  const avgCarPayments = req.body.avgCarPayments || 0;
  // Additional fields
  const basicNecessities = req.body.basicNecessities || 0;
  const healthCare = req.body.healthCare || 0;
  const eatingOut = req.body.eatingOut || 0;
  const entertainment = req.body.entertainment || 0;
  const vacations = req.body.vacations || 0;
  const miscWants = req.body.miscWants || 0;
  const contrib401k = req.body.contrib_401k || 0;
  const studentLoanPayment = req.body.studentLoanPayment || 0;
  const miscSavings = req.body.miscSavings || 0;
  const miscDebts = req.body.miscDebts || 0;

  const queryText = `INSERT INTO "user_future_table" (user_id, state, college_name, college_major, college_major_salary, college_major_description,
    avg_monthly_mortgage, avg_monthy_groceries, avg_monthly_utilities, avg_monthly_car_payment,
    basic_necessities, health_care, eating_out, entertainment, vacations, misc_wants, contrib_401k, avg_monthly_student_loan_payment, misc_savings, misc_debts)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
  RETURNING id`;
  pool
    .query(queryText, [userId, state, college, major, salary, collegeDescription, avgMortgage, avgGroceries, avgUtilities, avgCarPayments,
      basicNecessities, healthCare, eatingOut, entertainment, vacations, miscWants, contrib401k, studentLoanPayment, miscSavings, miscDebts])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Failed to update the user data table ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
