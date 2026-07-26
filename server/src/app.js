const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Import Modular Monolith Routes
const authRoutes = require('./modules/auth/authRoutes');
const boardRoutes = require('./modules/boards/boardRoutes');
const subjectRoutes = require('./modules/subjects/subjectRoutes');
const materialRoutes = require('./modules/materials/materialRoutes');
const noticeRoutes = require('./modules/notices/noticeRoutes');
const analyticsRoutes = require('./modules/analytics/analyticsRoutes');

dotenv.config();

const app = express();

// Connect MongoDB if available
connectDB();

// Security & Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: '*', credentials: true }));
app.use(compression());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  message: { success: false, message: 'Too many requests from this IP, please try again after 15 minutes' }
});
app.use('/api', limiter);

// API Health Check
app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'EDUBOARD INDIA API',
    tagline: 'One Platform For Every Education Board in India',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// API Domain Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/boards', boardRoutes);
app.use('/api/v1/subjects', subjectRoutes);
app.use('/api/v1/materials', materialRoutes);
app.use('/api/v1/notices', noticeRoutes);
app.use('/api/v1/analytics', analyticsRoutes);

// Central Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
=====================================================
🚀 EDUBOARD INDIA BACKEND SERVER RUNNING
🌐 URL: http://localhost:${PORT}
📚 API Endpoint: http://localhost:${PORT}/api/v1/health
=====================================================
  `);
});

module.exports = app;
