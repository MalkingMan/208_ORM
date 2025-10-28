const express = require('express');
const app = express();
const db = require('./config/config.js');
const port = 3309;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    extended: true;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

db.sequelize.sync()
  .then((result) => {
    app.listen(3309, () => {
        console.log('Server is running on port 3309');
    });
})
  .catch((err) => {
    console.log(err);
  });