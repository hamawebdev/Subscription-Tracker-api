# Subscription Tracker API 🚀

Welcome to the **Subscription Tracker API**, a powerful and scalable backend solution designed to help users manage their subscriptions efficiently. Built with **Node.js**, **Express.js**, and **MongoDB**, this API provides a robust foundation for subscription management, complete with advanced features like JWT authentication, rate limiting, automated email reminders, and more. Whether you're building a subscription management app or integrating subscription tracking into your existing system, this API is here to simplify your workflow.

---

## 🛠️ Tech Stack

Here’s a glimpse of the technologies and tools used to build this API:

| **Category**       | **Technology**                                                                 |
|---------------------|-------------------------------------------------------------------------------|
| **Backend**         | Node.js, Express.js                                                          |
| **Database**        | MongoDB (with Mongoose for ODM)                                              |
| **Authentication**  | JSON Web Tokens (JWT)                                                        |
| **Security**        | Arcjet (Rate Limiting & Bot Protection)                                      |
| **Email Automation**| Upstash (Serverless Redis) & Nodemailer                                      |
| **Logging**         | Custom logging mechanisms for debugging and monitoring                        |
| **Environment**     | Dotenv for environment variable management                                   |

---

## ✨ Key Features

### **Core Functionality**
- **User Authentication**: Secure JWT-based authentication for user registration, login, and management.
- **Subscription Management**: Create, read, update, and delete (CRUD) operations for subscriptions.
- **Database Modeling**: Efficient data modeling using MongoDB and Mongoose for seamless data management.
- **Global Error Handling**: Centralized error handling and input validation for a smooth user experience.
- **Logging & Monitoring**: Built-in logging mechanisms for debugging and performance monitoring.

### **Advanced Features**
- **Rate Limiting & Bot Protection**: Protect your API from abuse with Arcjet’s advanced security features.
- **Automated Email Reminders**: Set up smart email workflows using Upstash and Nodemailer to notify users about subscription renewals.
- **Modular Codebase**: Clean, reusable, and well-structured code for easy maintenance and scalability.

---

## 🚀 Getting Started

Follow these steps to set up the **Subscription Tracker API** on your local machine.

### **Prerequisites**
Before you begin, ensure you have the following installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### **Step 1: Clone the Repository**
Clone the repository to your local machine:
```bash
git clone https://github.com/hamawebdev/subscription-tracker-api.git
cd subscription-tracker-api
```

### **Step 2: Install Dependencies**
Install all the required dependencies using npm:
```bash
npm install
```

### **Step 3: Configure Environment Variables**
Create a `.env.local` file in the root directory and add the following environment variables:
```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

### **Step 4: Run the Application**
Start the development server:
```bash
npm run dev
```

Once the server is running, open [http://localhost:5500](http://localhost:5500) in your browser or use an HTTP client like Postman to test the API.

