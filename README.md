# AI for Digital Public Safety - Cyber Sentinel AI

## Project Overview

Cyber Sentinel AI is an advanced FinTech-focused AI platform designed to protect citizens from sophisticated financial fraud schemes, particularly those leveraging UPI and digital payment ecosystems in India. This project combines cutting-edge AI/ML with data-driven security insights to identify, track, and predict emerging fraud vectors.

## Key Features

### 1. Fraud Intelligence (The "Digital Brain")
- **Comprehensive Fraud Database**: Maintains an ever-growing Knowledge Graph of over 200+ fraud typologies, including advanced variants like **SIM Swap Fraud**, **Voice Clone Deepfake Scams**, **Phishing-through-UPI**, and **Digital Asset Laundering**.
- **Attack Chain Reconstruction**: Visualizes the precise sequence of technical steps attackers use, mapping vulnerabilities in systems like UPI, prepaid SIMs, and mule accounts.
- **AI-Driven Prediction Engine**: Utilizes LSTM neural networks trained on historical data to forecast the next high-risk fraud vectors before they peak.

### 2. Real-time Monitoring & Detection
- **Data Ingestion Pipeline**: Pulls data from mock APIs representing banking systems, e-wallets, and social media.
- **Anomaly Detection**: Implements isolation forests and statistical models to detect unusual transaction patterns, account takeovers, and bot-driven activity.
- **Early Warning System**: Continuously analyzes data streams to flag "Red Flags" (e.g., rapid fund movement, unusual login locations) that precede major fraud events.

### 3. Strategic Countermeasures
- **Dynamic Risk Scoring**: Assigns real-time risk scores to all entities (users, accounts, devices) based on their behavior and connections.
- **Proactive Interventions**: Generates context-aware alerts and suggests actionable strategies for law enforcement and banks to mitigate threats.

## Technology Stack

- **Frontend**: React.js, Vite, CSS (with CSS Variables for dark mode/neon theme)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI/ML**: TensorFlow.js, Scikit-learn (simulated), Neural Networks, LSTM, Isolation Forest
- **APIs**: Mock services for financial data integration

## Local Development Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (Local installation or Cloud service like MongoDB Atlas)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the `backend/` directory with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`
