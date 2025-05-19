#  Notification Service – Backend 

A Node.js microservice for handling notifications using Apache Kafka for real-time, event-driven delivery. This service allows creating, reading, and managing notifications, leveraging Kafka topics for scalable and reliable message streaming.


##  Features

-Send notifications using Kafka as the message broker.
-Receive notifications in real time via Kafka consumer.
-Mark notifications as read/unread.
-Retrieve and count notifications for a specific recipient.
-Microservice architecture for scalability and maintainability.


## 🧱 Tech Stack

- Node.js
-Apache Kafka
-Express.js
-Prisma (for database)
-dotenv

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
       |-notification.js
 |-README.md
 


## ▶️ How to Run Locally

```bash
npm install
npm start
```

Server starts on:

http://localhost:5000




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
  "message": "Notification stored",
  "notification": {
    "id": 1716051234567,
    "type": "in-app",
    "message": "Tomorrow is expected to rain",
    "timestamp": "2025-05-19T..."
  }
}




### ➤ GET `/users/:id/notifications`

Retrieve all notifications for a given user.

**Example:**
```
GET http://localhost:5000/users/aditya/notifications
```

**Response:**
```json
[
  {
    "id": 1716051234567,
    "type": "in-app",
    "message": "Tomorrow is expected to rain",
    "timestamp": "2025-05-19T..."
  }
]
```

---

## 🧪 Testing Tools

- Postman
- Hoppscotch (https://hoppscotch.io)

---

## 📌 Notes

- Data will be lost after server restarts since it's stored in memory (`db.js`).
- Queue system is simulated using `setTimeout()` inside `queue.js`.

---

## 🙋‍♂️ Author

**Aditya Kumar**  
Intern Assignment – PEPSALES
