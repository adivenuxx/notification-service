const express = require('express');
const router = express.Router();
const db = require('../data/db');
const { processQueue } = require('../data/utils/queue');

// POST /notifications
router.post('/', (req, res) => {
  const { userId, type, message } = req.body;

  if (!userId || !type || !message) {
    return res.status(400).json({ error: 'Missing userId, type or message' });
  }

  const notification = {
    id: Date.now(),
    type,
    message,
    timestamp: new Date()
  };

  if (!db[userId]) db[userId] = [];
  db[userId].push(notification);

  // Optional: Simulate queue
  processQueue(notification);

  res.status(201).json({ message: ' Notification stored', notification });
});

// GET /users/:id/notifications
router.get('/users/:id/notifications', (req, res) => {
  const { id } = req.params;
  const notifications = db[id] || [];
  res.json(notifications);
});

module.exports = router;
