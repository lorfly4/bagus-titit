<<<<<<< HEAD
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

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Validasi user
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      if (results.length === 0) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Jika berhasil login
      res.status(200).json({ message: 'Login successful', user: results[0] });

      const user = results[0];

    // Catat aktivitas login di tabel history
    const activity = 'User logged in';
    connection.query('INSERT INTO history (user_id, activity) VALUES (?, ?)', [user.id, activity], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.status(200).json({ message: 'Login successful', user });
    });
  });
});

router.get('/history/:userId', (req, res) => {
    const { userId } = req.params;
  
    connection.query('SELECT * FROM history WHERE user_id = ?', [userId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(200).json({ history: results });
    });
  });
  

module.exports = router;
=======
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

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Validasi user
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      if (results.length === 0) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Jika berhasil login
      res.status(200).json({ message: 'Login successful', user: results[0] });

      const user = results[0];

    // Catat aktivitas login di tabel history
    const activity = 'User logged in';
    connection.query('INSERT INTO history (user_id, activity) VALUES (?, ?)', [user.id, activity], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.status(200).json({ message: 'Login successful', user });
    });
  });
});

router.get('/history/:userId', (req, res) => {
    const { userId } = req.params;
  
    connection.query('SELECT * FROM history WHERE user_id = ?', [userId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      res.status(200).json({ history: results });
    });
  });
  

module.exports = router;
>>>>>>> fb63279eea987ba1b524fa95e0ba3c5d82deae66
