💰 Expense Tracker Application
Show Image
Show Image
Show Image
A full-stack expense tracker web application built with React frontend and Spring Boot backend. Track your expenses easily with this responsive and intuitive application deployed on AWS EC2.
🌐 Live Application

Application URL: http://44.203.183.171:5173/
Transactions Page: http://44.203.183.171:5173/transactions

📋 Table of Contents

Features
Tech Stack
Getting Started

Prerequisites
Frontend Setup
Backend Setup


Deployment
Disclaimer

✨ Features

Transaction Management: Add, update, and delete expenses
Transaction History: View a comprehensive history of your transactions
Responsive Design: Works seamlessly on mobile and desktop devices
RESTful API: Persistent backend API for data storage
JWT Authentication: Route protection using JSON Web Tokens

🏗️ Tech Stack
Frontend

React: UI library for building the user interface
Vite: Next-generation frontend build tool
Tailwind CSS: Utility-first CSS framework for styling

Backend

Spring Boot: Java-based framework for creating standalone applications
Maven: Dependency management and build tool
JWT: JSON Web Tokens for authentication

Deployment

AWS EC2: Cloud hosting platform
Amazon Linux: Operating system for the EC2 instance
tmux & nohup: Process management for keeping services running

🚀 Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14+) & npm
Java JDK (17 or compatible)
Maven (3.6+)
Git

Frontend Setup
bash# Clone the repository
git clone https://github.com/yourusername/expense-tracker.git

# Navigate to frontend directory
cd expense-tracker/expense-tracker-frontend

# Install dependencies
npm install

# Start development server
npm run dev
Backend Setup
bash# Navigate to backend directory
cd expense-tracker/expense-tracker-backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
After running both frontend and backend, the application will be available at:

Frontend: http://localhost:5173
Backend API: http://localhost:8080

📦 Deployment
This application is deployed on AWS EC2 with the following configuration:
bash# SSH into your EC2 instance
ssh -i "your-key.pem" ec2-user@ec2-instance-ip

# Start backend service with nohup
cd /path/to/backend
nohup mvn spring-boot:run > backend.log 2>&1 &

# Start frontend service with tmux
cd /path/to/frontend
tmux new -s frontend
npm run dev
# Detach from tmux with Ctrl+B followed by D
⚠ Disclaimer
This application is developed as a personal project to practice:

Deploying full-stack applications to AWS EC2
Implementing JWT-based route protection
Hosting frontend and backend services on a single cloud instance

Important Notes:

No real user account or session persistence has been implemented
Authentication is stateless and for demonstration purposes only
Not intended for production use without further security enhancements




Made with ❤️ and ☕
