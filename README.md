## Before starting I want to tell you that there is another readme.md in spanish in case you are interested. Thank you

# TaskManagerApplication Backend - Nodejs Project

<p align="center">
  <a href="https://nodejs.org/es" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">An open-source, cross-platform <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">JavaScript</a> runtime environment.</p>


Welcome to the TaskManagerApplication backend! Here I will explain what the task manager developed with Node.js and Express is all about. Get ready to efficiently and organizedly manage your tasks.

## What is TaskManagerApplication?

TaskManagerApplication is a powerful task management application that allows you to organize your work effectively. With this tool, you can assign tasks to yourself and other users, set due dates, priorities, and statuses, giving you complete control over your responsibilities.

## Technologies and Libraries Used
To provide advanced functionalities and security in our backend, I have used the following libraries:

- **Cors**: I used cors to enable Cross-Origin Resource Sharing (CORS) in our application. This allows the frontend to communicate with the backend without security restrictions.
- **Bcrypt**: Bcrypt is implemented to securely store user passwords using hashing and salting techniques.
- **Jsonwebtoken**: I integrated jsonwebtoken to generate and verify authentication tokens. This allows us to implement a secure token-based authentication system.
- **Mongoose**: Mongoose is used as the MongoDB object modeling library. With mongoose, we can define schemas and models for our tasks and users, making it easier to interact with the database.
- **Dotenv**: Dotenv is implemented to load environment variables from a .env file. This allows me to securely and easily configure sensitive variables, such as database credentials or the secret key for token signing.

## Data Models

The backend uses the MongoDB framework, Mongoose, to manage data in a structured manner. Here are the data models used to represent tasks in our application:

### Task Model
```javascript
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  status: {
    type: String,
    enum: ['to start', 'in progress', 'completed'],
    default: 'to start',
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

```

### User Model
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

## Key Features

### 1. Flexibility in Prioritization
Not all tasks are equal; that's why TaskManagerApplication allows you to set priorities for your tasks. You can choose between 'low,' 'medium,' or 'high' to ensure that the most important tasks are addressed first.

### 2. Task Status
With our task manager, you will never lose track of your progress. You can indicate if a task is 'to start,' 'in progress,' or 'completed.' Keep a clear and updated record of each task!

### 3. Task Assignment
Collaboration is essential in any project. With TaskManagerApplication, you can not only assign tasks to yourself but also assign tasks to other users of the application. Work together and achieve your goals as a team!

### 4. Due Dates
No more worries about deadlines. In the application, you can define a due date for each task, helping you plan your work and keep everything in order.

## Installation Instructions
To start using TaskManagerApplication, follow these simple steps:

1. Make sure you have Node.js and MongoDB installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project folder and run npm install to install the dependencies.
4. Ensure that your MongoDB server is up and running.
5. Run npm start to start the server.
6. Great! Now you can access the backend routes and start managing your tasks.

## Contribute
TaskManagerApplication is an open-source project, and I welcome your contributions. If you find bugs, have ideas for improvements, or want to add new features, don't hesitate to send your Pull Requests.

## Support
If you have any questions, issues, or just want to share your feedback, feel free to contact me.

Thank you for choosing TaskManagerApplication to efficiently and productively manage your tasks! I hope you enjoy using the application as much as I enjoyed developing it.
