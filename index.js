const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notifications');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/notifications', notificationRoutes);

app.get('/', (req, res) => {
  res.send('Notification Service is up 🚀');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
