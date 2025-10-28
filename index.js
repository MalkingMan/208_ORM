const express = require('express');
const app = express();
const db = require('./models');
const port = 3309;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

db.sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });

  app.get('/komik', (req, res) => {
    try {
        const komiks = await db.Komik.findAll();
        res.json(komiks);
    } catch (err) {
        res.sendStatus(err);
    }
  });