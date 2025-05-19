const express = require('express');
const connectDB = require('./data/db');
const notificationRoutes = require('./routes/notifications');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// API routes
app.use('/api', notificationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

