const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'notification-producer',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();
let isConnected = false;

const sendNotification = async (data) => {
  if (!isConnected) {
    await producer.connect();
    isConnected = true;
  }

  try {
    await producer.send({
      topic: 'notification-topic',
      messages: [{ value: JSON.stringify(data) }],
    });
  } catch (err) {
    console.error('Kafka message send error:', err.message);
    throw err; // important for retry logic if implemented
  }
};

module.exports = { sendNotification };