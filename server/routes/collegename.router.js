const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', async (req, res) => {
    try {

      // This extracts the state from the query parameter from the collegenamesaga file
      const { state } = req.query;

      if(!state) {
        return res.status(400).json({ error: 'State paramater is required'})
      }

        // Query the database to retrieve college majors
        const queryText = `
        SELECT c.college_name
        FROM college_state_link as csl
        JOIN colleges as c ON csl.college_id = c.id
        WHERE csl.state = $1;
        `;
        const queryResult = await pool.query(queryText, [state]);
    // console.log('College names here is it working', res.json(queryResult.rows))
        // Send the query result as the response
        res.json(queryResult.rows);
      } catch (error) {
        console.error('Error fetching college names:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    // Send the query result as the response
});



module.exports = router;
