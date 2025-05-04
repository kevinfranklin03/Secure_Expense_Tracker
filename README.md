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
