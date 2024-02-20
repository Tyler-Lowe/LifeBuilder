const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', async (req, res) => {
    try {

      // This extracts the state from the query parameter from the collegemajorsaga file
      const { college } = req.query;

      if(!college) {
        return res.status(400).json({ error: 'College paramater is required'})
      }

        // Query the database to retrieve college majors
        const queryText = `
        SELECT cm.major_name, cm.average_salary
        FROM colleges AS c
        JOIN college_major_link AS cml ON c.id = cml.college_id
        JOIN college_majors AS cm ON cml.major_id = cm.id
        WHERE c.college_name = $1;
        `;
        const queryResult = await pool.query(queryText, [college]);
    // console.log('College names here is it working', res.json(queryResult.rows))
        // Send the query result as the response
        res.json(queryResult.rows);
      } catch (error) {
        console.error('Error fetching college majors:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    // Send the query result as the response
});



module.exports = router;
