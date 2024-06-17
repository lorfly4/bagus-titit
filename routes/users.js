const express = require('express');
const connection = require('../db');
const router = express.Router();

// Endpoint untuk mendapatkan semua pengguna
router.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ users: results });
  });
});

module.exports = router;
