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