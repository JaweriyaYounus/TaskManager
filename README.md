 📝 Description

The Task Manager Application is a simple microservices-based application that allows users to create, read, update, and delete tasks. This system is ideal for users who want to manage their daily to-dos and project tasks efficiently.

Use Cases:
- Add new tasks with due dates and priorities.
- Mark tasks as completed.
- View tasks by status (pending/completed).
- Delete completed or unwanted tasks.

---

 🧱 Microservices Architecture

The application consists of the following services:

1. Frontend Service (React.js)
   - Displays the UI to manage tasks.
   - Communicates with the API Gateway.

2. API Gateway (Node.js + Express)
   - Routes requests to the appropriate backend services.
   - Handles authentication and rate limiting (optional).

3. Task Service (Node.js + Express + MongoDB)
   - Handles task CRUD operations.
   - Stores data in MongoDB.

4. Database (MongoDB)
   - Stores task records.

```plaintext
[Frontend] <-> [API Gateway] <-> [Task Service] <-> [MongoDB]
