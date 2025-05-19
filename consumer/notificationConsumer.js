const { Kafka } = require('kafkajs');
const Notification = require('../models/Notification');
const connectDB = require('../data/db');

// Connect MongoDB
connectDB();

// Kafka setup
const kafka = new Kafka({
  clientId: 'notification-service',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'notification-group' });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'notification-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = message.value.toString();
      console.log(`Received Kafka message: ${value}`);

      try {
        const data = JSON.parse(value);

        const notification = new Notification({
          userId: data.userId,
          message: data.message,
          type: data.type,
          status: 'sent',
          timestamp: new Date()
        });

        await notification.save();
        console.log('Notification saved to MongoDB from Kafka');
      } catch (err) {
        console.error('Failed to process Kafka message:', err.message);
      }
    }
  });
};

runConsumer().catch(console.error);

