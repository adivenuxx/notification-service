const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');
const { sendNotification } = require('../data/utils/queue');

// POST /notifications
router.post('/', async (req, res) => {
  const { userId, type, message } = req.body;

  if (!userId || !type || !message) {
    return res.status(400).json({ success: false, error: 'Missing userId, type or message' });
  }

  try {
    const notification = new Notification({
      userId,
      type,
      message,
      status: 'sent',
      timestamp: new Date()
    });

    await notification.save();

    try {
      await sendNotification({ userId, type, message });
    } catch (queueErr) {
      console.error('Error queuing notification:', queueErr);
    }

    res.status(202).json({
      success: true,
      message: 'Notification queued for processing'
    });

  } catch (error) {
    console.error('Error saving notification:', error);
    res.status(500).json({ success: false, error: 'Failed to save notification' });
  }
});

// GET /users/:id/notifications
router.get('/users/:id/notifications', async (req, res) => {
  const { id } = req.params;

  try {
    const notifications = await Notification.find({ userId: id }).sort({ timestamp: -1 });
    res.json({ success: true, data: notifications || [] });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch notifications' });
  }
});

module.exports = router;
