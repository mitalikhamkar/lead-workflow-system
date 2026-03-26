# Lead Workflow System

## Objective
This project demonstrates a modular backend system that processes lead data through validation, classification, and action triggering stages.

## Tech Stack
- Node.js
- Express.js

## API Endpoint
POST /api/leads

## Request Example
{
  "name": "Mitali",
  "email": "mitali@gmail.com",
  "source": "Instagram"
}

## Response Example
{
  "status": "Processed",
  "data": {
    "name": "Mitali",
    "email": "mitali@gmail.com",
    "source": "Instagram",
    "category": "Social Lead",
    "priority": "Medium"
  }
}

## Workflow
Input → Validation → Classification → Action

## Architecture
- Controller handles request flow
- Services handle logic separately
- Model defines data structure
- Routes manage endpoints

## 🛠️ How to Run the Project

1. Clone the repository:
git clone https://github.com/mitalikhamkar/lead-workflow-system.git

2. Navigate into the project folder:
cd lead-workflow-system/lead-system

3. Install dependencies:
npm install

4. Start the server:
node server.js

Server will run on:
http://localhost:3000

## 📡 API Testing

Use Postman or any API tool:

POST http://localhost:3000/api/leads

Body:
{
  "name": "Mitali",
  "email": "mitali@gmail.com",
  "source": "Instagram"
}

## 🧠 Notes

- This project focuses on backend architecture and workflow design
- UI is intentionally not included
- All logic is separated into modular services
