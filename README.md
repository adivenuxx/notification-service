# 📬 Notification Service – Backend 

A Node.js-based backend service that allows users to send and retrieve notifications using REST APIs.


## 🚀 Features

- ✅ POST `/notifications`: Send a notification (type: `in-app`, `email`, `sms`)
- ✅ GET `/users/:id/notifications`: Retrieve all notifications for a user
- ✅ Dummy queue simulation with retry
- ✅ In-memory data store (no database)
- ✅ Modular code structure (routes, utils, db)


## 🧱 Tech Stack

- Node.js
- Express.js
- Body-Parser
- CORS

## 📁 Folder Structure

  notification-service/
  ├── index.js                  
  ├── package.json
  ├── routes/
  │   └── notifications.js      
  ├── data/
  │   ├── db.js                 
  │   └── utils/
  │       └── queue.js          
  └── README.md


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
  "message": "✅ Notification stored",
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
