const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const usersRoute = require('./routes/users');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menggunakan route untuk pengguna
app.use('/', usersRoute);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
