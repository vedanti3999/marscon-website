# Marscon India LLP — Full Stack Website

> **Smart Industrial Solutions for Reliable, Efficient Manufacturing**
> Redesigned website based on https://shreyamorti28.github.io/Marscon/

---

## 📁 Project Structure

```
marscon-v2/
├── frontend/                    ← React.js
│   ├── public/index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar/
│       │   ├── Footer/
│       │   └── TopBar/
│       ├── pages/
│       │   ├── Home/
│       │   ├── About/
│       │   ├── Services/        (Services + ServiceDetail)
│       │   ├── Industries/
│       │   ├── Projects/
│       │   ├── Capabilities/
│       │   ├── Clients/
│       │   ├── Contact/
│       │   └── NotFound/
│       ├── App.js
│       └── index.css
└── backend/                     ← Node.js + Express
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    └── server.js
```

---

## ⚡ Setup & Run

### Step 1 — Backend

```
cd D:\marscon-v2\backend
npm install
copy .env.example .env
npm run dev
```

Runs at: http://localhost:5000

### Step 2 — Frontend (new terminal)

```
cd D:\marscon-v2\frontend
npm install
npm start
```

Runs at: http://localhost:3000

### Step 3 — MongoDB

```
net start MongoDB
```

Or use MongoDB Atlas — update MONGO_URI in backend/.env

---

## 🌐 Pages

| Page | Path |
|------|------|
| Home | / |
| About | /about |
| Services | /services |
| Service Detail | /services/:slug |
| Industries | /industries |
| Projects | /projects |
| Capabilities | /capabilities |
| Our Clients | /clients |
| Contact | /contact |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contact | Submit enquiry |
| GET  | /api/contact | List all enquiries |
| POST | /api/newsletter/subscribe | Subscribe |

---

## 🎨 Brand Colors

| Name | Value | Usage |
|------|-------|-------|
| Navy | #1a2b4a | Navbar, footer, dark sections |
| Orange | #e8601c | Brand accent, buttons, highlights |
| Off-white | #f4f6f9 | Alternate section backgrounds |

---

© 2024 Marscon India LLP. All Rights Reserved.
