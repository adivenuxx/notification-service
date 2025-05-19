#  Notification Service – Backend 

A simple notification microservice using Node.js, Express, MongoDB, and Kafka.
Ye service user notifications ko receive kar ke MongoDB mein store karti hai aur Kafka queue ke through asynchronous processing karti hai.


## Features

-Send notifications via REST API (POST /notifications)
-Fetch user notifications (GET /users/:id/notifications)
-Kafka-based message queue for scalable processing
-MongoDB storage for persistent notification data

##  Tech Stack

- Node.js
- Express.js
- Body-Parser
- CORS

## Prerequisites

-Node.js (v14+ recommended)
-MongoDB (local or cloud)
-Kafka broker running on localhost:9092
-Zookeeper running (if Kafka requires)
-Postman or any API client for testing


## 📁 Folder Structure

notification-service
 |-index.js
 |-package.json 
 |-routes/
     |-notifications.js
 |-data/
     |-db.js
     |-utils/
         |-queue.js
 |-consumer
     |-notificationconsumer.js
 |-models
     |- notification.js
 |- README.md


## Installation & Setup
Clone Repo:
git clone <repo-url>
cd <repo-folder>

Install dependencies:
npm install

Setup environment variables
Create a .env file in the root with:
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/notifications
KAFKA_BROKER=localhost:9092

Start MongoDB server locally:
 -Windows: Start MongoDB service from Services or run MongoDB shell
 -Linux/macOS: Run mongod

Start Kafka and Zookeeper (if using local Kafka):
 # In separate terminals
 -bin/zookeeper-server-start.sh config/zookeeper.properties
 
 -bin/kafka-server-start.sh config/server.properties

## Running the service

Start your Express server:
 -node index.js
 
Start the Kafka consumer in another terminal:
 -node notificationConsumer.js



## 🔀 API Endpoints

### ➤ POST `/notifications`

Send a new notification.

**Request Body:**
```json
{
  "userId": "aditya",
  "type": "in-app",
  "message": "Tomorrow is expected to rain"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Notification queued for processing"
}

### ➤ GET `/users/:id/notifications`

Retrieve all notifications for a given user.

**Example:**
```
GET http://localhost:5000/users/aditya/notifications
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "abc123",
      "userId": "user123",
      "type": "weather",
      "message": "Rain expected tomorrow!",
      "status": "sent",
      "timestamp": "2025-05-19T10:00:00Z"
    }
  ]
}

```

---

## 🧪 Testing Tools

- Postman
- Hoppscotch (https://hoppscotch.io)

---

## 📌 Notes

-Make sure MongoDB and Kafka are running before starting the service.
-If you face connection errors, check ports and firewall settings.
-Kafka consumer logs messages when a notification is consumed.
-You can extend this service with notification status updates, deletes, or real-time push notifications via WebSockets.

---

## 🙋‍♂️ Author

**Aditya Kumar**  
Intern Assignment – PEPSALES
