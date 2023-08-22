const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', async (req, res) => {
    try {
      const userId = req.user.id;
      
      const queryText = `
        SELECT * FROM "user_future_table"
        WHERE user_id = $1`;
      
      const queryResult = await pool.query(queryText, [userId]);
      
      res.json(queryResult.rows);
    } catch (error) {
      console.error('Error fetching user future data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/', (req, res) => {
  console.log('I am updating user future table');
  const userId = req.user.id;
  const state = req.body.state;
  const college = req.body.college;
  const major = req.body.major;
  const salary = req.body.salary;
  const avgMortgage = 1500;
  const avgGroceries = 400;
  const avgUtilities = 150;
  const avgCarPayments = 400;
  const avgCarInsurance = 125;
  const avgStudentLoanPayment = 300;


  const queryText = `INSERT INTO "user_future_table" (user_id, state, college_name, college_major, college_major_salary,
    avg_monthly_mortgage, avg_monthy_groceries, avg_monthly_utilities, avg_monthly_car_payment,
    avg_monthly_car_insurance, avg_monthly_student_loan_payment)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  RETURNING id`;
  pool
    .query(queryText, [userId, state, college, major, salary, avgMortgage, avgGroceries, avgUtilities, avgCarPayments, avgCarInsurance, avgStudentLoanPayment])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Failed to update the user data table ', err);
      res.sendStatus(500);
    });
});


module.exports = router;