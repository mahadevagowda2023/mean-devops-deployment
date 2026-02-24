#  MEAN Stack DevOps Deployment

This project is a full-stack CRUD application built using the MEAN stack (MongoDB, Express.js, Angular 15, Node.js).  

The main goal of this project is to demonstrate how to:

- Containerize a full-stack application using Docker
- Push Docker images to Docker Hub
- Implement CI/CD using GitHub Actions
- Deploy the application on AWS EC2

---

##  About the Application

The application manages a list of tutorials.

Each tutorial contains:
- ID
- Title
- Description
- Published status

Users can:
- Create a tutorial
- View all tutorials
- Update tutorial details
- Delete tutorials
- Search tutorials by title

---

##  Tech Stack

- MongoDB
- Express.js
- Angular 15
- Node.js
- Docker
- Docker Compose
- GitHub Actions
- AWS EC2

---

## Docker Setup

### Build and Run Using Docker Compose

```bash
docker-compose up -d
