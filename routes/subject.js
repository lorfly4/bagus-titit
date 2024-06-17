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

module.exports = router;
