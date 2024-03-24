# KnowledgeHub

KnowledgeHub is a platform designed for TruHacks2024 hackathon, aimed at providing a comprehensive solution for book recommendations and library management with the assistance of AI. The project is led by a team consisting of Abdulmunim, Emran, and Abraham.

## Features

- **AI Assistance for Book Recommendation**: Utilizing the LLamda model implemented with FastAPI, our AI assistant named Bekalu provides personalized book recommendations based on user preferences.
  
- **Web Dashboard**: Built using React and Express, the web dashboard offers a user-friendly interface for accessing various features including AI-supported search, library system management, favorites, and user authentication functionalities like login and logout.
  
- **Database Management with MongoDB**: MongoDB is employed as the database solution, ensuring efficient storage and retrieval of data related to books, user profiles, and interactions.
  
- **Node Mailer for Email Verification**: Node Mailer is integrated to handle email verification, enhancing the security and authenticity of user accounts.
  
- **Containerization with Docker**: The project is containerized using Docker, facilitating seamless deployment and scalability across different environments.
  
- **Designed for Scalability**: KnowledgeHub is designed with scalability in mind, ensuring that it can accommodate a growing user base and increasing data volumes with ease.

## Project Structure

```
/backend
/frontend
/assistant
```

The project is structured into separate modules for backend, frontend, and assistant functionalities. This modular approach ensures modularity, separation of concerns, and ease of maintenance.

- **Backend**: Contains server-side logic implemented using Express, including API routes, database interactions, and AI assistant integration.
  
- **Frontend**: Houses client-side code implemented with React, including components, views, and user interface logic.
  
- **Assistant**: Includes code related to the AI assistant functionality, such as model integration, data processing, and response generation.

## Modularity and Separation of Concerns

The project follows principles of modularity and separation of concerns to ensure code maintainability, scalability, and reusability. Each module focuses on specific functionalities, promoting clean code architecture and easier collaboration among team members.

## State Management and Context API

State management in the frontend is implemented using the Context API, allowing efficient sharing of state data across components while maintaining a clear separation of concerns.

## Team

- **Abdulmunim**: Software Engineer with expertise in NLP and Machine learning.
  
- **Emran**: Backend Engineer
  
- **Abraham**: Frontend Engineer
