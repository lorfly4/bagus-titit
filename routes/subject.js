<<<<<<< HEAD
const express = require('express');
const connection = require('../db');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

// Middleware untuk mencatat aktivitas
function logActivity(userId, activity, callback) {
  connection.query('INSERT INTO history (user_id, activity) VALUES (?, ?)', [userId, activity], callback);
}

// Endpoint untuk mendapatkan data mata pelajaran
router.get('/subjects', (req, res) => {
  connection.query('SELECT * FROM subjects', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    // Contoh userId, ini bisa diambil dari sesi pengguna atau token
    const userId = 1;
    const activity = 'User viewed subjects';

    // Log aktivitas
    logActivity(userId, activity, (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      // Kirimkan response sebagai objek JSON
      const subjects = {};
      results.forEach(subject => {
        subjects[subject.id] = {
          name: subject.name,
          teacher: subject.teacher,
          room: subject.room
        };
      });

      res.status(200).json({ subjects });
    });
  });
});

// Endpoint untuk mencatat klik pada mata pelajaran
router.post('/subjects/:id/click', (req, res) => {
  const subjectId = req.params.id;

  // Validasi keberadaan subjectId
  connection.query('SELECT * FROM subjects WHERE id = ?', [subjectId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    // Contoh userId, ini bisa diambil dari sesi pengguna atau token
    const userId = 1;
    const activity = `User completed subject ${results[0].name}`;

    // Log aktivitas
    logActivity(userId, activity, (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.status(200).json({ message: 'Activity logged', subject: results[0] });
    });
  });
});

module.exports = router;
=======
const express = require('express');
const connection = require('../db');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

// Middleware untuk mencatat aktivitas
function logActivity(userId, activity, callback) {
  connection.query('INSERT INTO history (user_id, activity) VALUES (?, ?)', [userId, activity], callback);
}

// Endpoint untuk mendapatkan data mata pelajaran
router.get('/subjects', (req, res) => {
  connection.query('SELECT * FROM subjects', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    // Contoh userId, ini bisa diambil dari sesi pengguna atau token
    const userId = 1;
    const activity = 'User viewed subjects';

    // Log aktivitas
    logActivity(userId, activity, (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      // Kirimkan response sebagai objek JSON
      const subjects = {};
      results.forEach(subject => {
        subjects[subject.id] = {
          name: subject.name,
          teacher: subject.teacher,
          room: subject.room
        };
      });

      res.status(200).json({ subjects });
    });
  });
});

// Endpoint untuk mencatat klik pada mata pelajaran
router.post('/subjects/:id/click', (req, res) => {
  const subjectId = req.params.id;

  // Validasi keberadaan subjectId
  connection.query('SELECT * FROM subjects WHERE id = ?', [subjectId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    // Contoh userId, ini bisa diambil dari sesi pengguna atau token
    const userId = 1;
    const activity = `User completed subject ${results[0].name}`;

    // Log aktivitas
    logActivity(userId, activity, (err) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      res.status(200).json({ message: 'Activity logged', subject: results[0] });
    });
  });
});

module.exports = router;
>>>>>>> fb63279eea987ba1b524fa95e0ba3c5d82deae66
