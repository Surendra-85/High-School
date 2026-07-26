const express = require('express');
const router = express.Router();
const { getPlatformAnalytics } = require('./analyticsController');
const { protect, authorize } = require('../../middleware/auth');

router.get('/', protect, authorize('admin', 'teacher'), getPlatformAnalytics);

module.exports = router;
