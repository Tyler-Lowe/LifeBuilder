const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', async (req, res) => {
    try {
        // Query the database to retrieve college majors
        const queryResult = await pool.query(` SELECT
        cm.*,
        c.college_name,
        c.state
      FROM college_major cm
      JOIN college c ON cm.college_id = c.id;
    `);

        // Send the query result as the response
        res.json(queryResult.rows);
        console.log('Am I here?', queryResult.rows)
      } catch (error) {
        console.error('Error fetching college majors:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    // Send the query result as the response
});



module.exports = router;
