const express = require('express');
const router = express.Router();
const { getAllBoards, getBoardById, createBoard } = require('./boardController');
const { protect, authorize } = require('../../middleware/auth');

router.get('/', getAllBoards);
router.get('/:id', getBoardById);
router.post('/', protect, authorize('admin'), createBoard);

module.exports = router;
