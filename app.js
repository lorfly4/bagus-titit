<<<<<<< HEAD
const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const usersRoute = require('./routes/users');
const usersSubject = require('./routes/subject');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menggunakan route untuk pengguna
app.use('/', usersRoute);
app.use('/api', usersSubject);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
=======
const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const usersRoute = require('./routes/users');
const usersSubject = require('./routes/subject');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menggunakan route untuk pengguna
app.use('/', usersRoute);
app.use('/api', usersSubject);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
>>>>>>> fb63279eea987ba1b524fa95e0ba3c5d82deae66
});