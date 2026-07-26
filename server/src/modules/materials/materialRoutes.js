const express = require('express');
const router = express.Router();
const { getAllMaterials, getMaterialById, createMaterial } = require('./materialController');
const { protect, authorize } = require('../../middleware/auth');

router.get('/', getAllMaterials);
router.get('/:id', getMaterialById);
router.post('/', protect, authorize('teacher', 'admin'), createMaterial);

module.exports = router;
