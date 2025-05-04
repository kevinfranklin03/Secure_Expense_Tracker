# Expense Tracker Application

An expense tracker web application built with a **React** frontend and a **Spring Boot** backend. Deployed on AWS EC2 and accessible publicly.

## 🌐 Live Application

- **Frontend & Backend URL**: [http://44.203.183.171:5173/](http://44.203.183.171:5173/)
- **Transactions Page**: [http://44.203.183.171:5173/transactions](http://44.203.183.171:5173/transactions)

---

## 🏗️ Tech Stack

### Frontend
- React
- Vite (or CRA depending on your setup)
- Tailwind CSS *(if used)*

### Backend
- Spring Boot
- Maven

### Deployment
- AWS EC2 (Amazon Linux)
- Managed using `tmux` and `nohup` for persistence

---

## 🚀 Running Locally

### Prerequisites
- Node.js & npm
- Maven & Java (17 or compatible)

### Frontend Setup

```bash
cd expense-tracker-frontend
npm install
npm run dev


## 🔧 Backend Setup

```bash
cd expense-tracker-backend
mvn spring-boot:run


## ✨ Features

- Add, update, and delete transactions
- View transaction history
- Persistent backend API
- Responsive frontend for mobile and desktop


---

---

## ⚠ Disclaimer

This application is developed as a personal project to practice:
- Deploying full-stack applications to AWS EC2.
- Implementing JWT-based route protection.
- Hosting frontend and backend services on a single cloud instance.

**Note**:
- No real user account or session persistence has been implemented.
- Authentication is stateless and for demonstration purposes only.
- Not intended for production use.



