# Blogs

# Microservices Blog Application

## Overview
This microservices-based application allows users to create posts, comment on them, and manage events through a moderation system. The architecture follows an event-driven approach, where different services communicate asynchronously via an event bus.

## Microservices Architecture
The application consists of the following microservices:

### 1. **Post Service**
- Handles the creation and storage of blog posts.
- Provides endpoints to retrieve posts and their associated comments.

### 2. **Comment Service**
- Manages comments associated with blog posts.
- Allows users to create and retrieve comments for specific posts.

### 3. **Event Bus**
- Facilitates asynchronous communication between microservices.
- Ensures that all events (e.g., new post, new comment, moderation updates) are propagated to relevant services.

### 4. **Moderation Service**
- Monitors and manages content to ensure compliance with community guidelines.
- Flags or filters inappropriate comments before they are displayed.

## Communication Methods
The microservices interact using an **event-driven approach**, ensuring loose coupling and high scalability:

- **Event Bus:** All services emit and listen for events via an in-memory or external event broker.
- **Asynchronous Communication:** Events such as `PostCreated`, `CommentCreated`, and `CommentModerated` are broadcasted to relevant services.
- **REST API Endpoints:** Each microservice provides dedicated REST endpoints for CRUD operations.

## Technologies Used
- **Node.js & Express** for building microservices
- **React .js** For building the simple frontend
- **Docker** for containerization
- **Kafka / RabbitMQ (Optional)** for scalable event handling
- **MongoDB / PostgreSQL** for data persistence
- **Kubernetes (Optional)** for orchestration and scaling

## Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/microservices-blog.git
   cd microservices-blog
   ```

2. Install dependencies for each microservice:
   ```sh
   cd posts-service && npm install
   cd ../comments-service && npm install
   cd ../event-bus && npm install
   cd ../moderation-service && npm install
   ```

3. Start each service:
   ```sh
   npm start
   ```

4. (Optional) Run all services using Docker:
   ```sh
   docker-compose up --build
   ```

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## License
This project is licensed under the MIT License.

---

### 🚀 Happy Coding! 🎉


