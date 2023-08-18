const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', async (req, res) => {
    try {
        // Query the database to retrieve college majors
        const queryResult = await pool.query(` SELECT college_name FROM college;

    `);
        // Send the query result as the response
        res.json(queryResult.rows);
      } catch (error) {
        console.error('Error fetching college names:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    // Send the query result as the response
});



module.exports = router;
