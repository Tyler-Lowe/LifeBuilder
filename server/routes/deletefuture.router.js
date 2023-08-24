const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.delete('/', (req, res) => {
    const userId = req.user.id;
    const idToDelete = req.body.currentRow;
    console.log(userId, '!!ID TO DELETE');
  console.log(idToDelete, '!!ID TO DELETE');
    const queryText = `DELETE FROM "user_future_table" WHERE id = $1 AND user_id = $2`;
  
    pool
      .query(queryText, [idToDelete, userId])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log('Failed to delete the user data row', err);
        res.sendStatus(500);
      });
  });
  
  
  
  module.exports = router;