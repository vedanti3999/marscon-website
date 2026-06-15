// =============================================
// MARSCON Backend – server.js
// =============================================
require('dotenv').config(); // Load .env first

const express     = require('express');
const cors        = require('cors');
const morgan      = require('morgan');
const helmet      = require('helmet');
const rateLimit   = require('express-rate-limit');

const connectDB      = require('./config/db');
const errorHandler   = require('./middleware/errorHandler');
const contactRoutes  = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Connect Database ──────────────────────────
connectDB();

// ── Security Middleware ───────────────────────
app.use(helmet());  // Sets various HTTP security headers

// ── CORS ─────────────────────────────────────
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
  'https://marscon.in',
  'https://www.marscon.in',
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests in dev)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods:     ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// ── Rate Limiting ─────────────────────────────
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 min
  max:      parseInt(process.env.RATE_LIMIT_MAX       || '100'),    // 100 requests per window
  standardHeaders: true,
  legacyHeaders:   false,
  message: { success: false, message: 'Too many requests. Please try again later.' },
});

// Stricter limit for contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,                    // 5 contact submissions per hour per IP
  message: { success: false, message: 'Too many enquiries submitted. Please try again after an hour.' },
});

app.use('/api/', limiter);
app.use('/api/contact', contactLimiter);

// ── Body Parsers ──────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// ── Logger ────────────────────────────────────
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// ── Health Check ──────────────────────────────
app.get('/health', (req, res) => {
  res.json({
    status:  'OK',
    service: 'MARSCON API',
    version: '1.0.0',
    time:    new Date().toISOString(),
  });
});

// ── API Routes ────────────────────────────────
app.use('/api/contact',    contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// ── 404 Handler ───────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// ── Central Error Handler ─────────────────────
app.use(errorHandler);

// ── Start Server ──────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 MARSCON Backend running on port ${PORT}`);
  console.log(`   Environment : ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Health check: http://localhost:${PORT}/health`);
  console.log(`   Contact API : http://localhost:${PORT}/api/contact\n`);
});
