const Board = require('../../models/Board');
const { boardsData } = require('../../utils/mockData');

exports.getAllBoards = async (req, res) => {
  try {
    let boards = [];
    try {
      boards = await Board.find({});
    } catch (e) {}

    if (!boards || boards.length === 0) {
      boards = boardsData;
    }
    res.json({ success: true, count: boards.length, data: boards });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getBoardById = async (req, res) => {
  try {
    const { id } = req.params;
    let board = null;
    try {
      board = await Board.findOne({ id });
    } catch (e) {}

    if (!board) {
      board = boardsData.find(b => b.id === id || b.code.toLowerCase() === id.toLowerCase());
    }

    if (!board) {
      return res.status(404).json({ success: false, message: 'Board not found' });
    }
    res.json({ success: true, data: board });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createBoard = async (req, res) => {
  try {
    const newBoardData = req.body;
    let newBoard;
    try {
      newBoard = await Board.create(newBoardData);
    } catch (e) {
      newBoard = { ...newBoardData, id: "board_" + Date.now() };
      boardsData.push(newBoard);
    }
    res.status(201).json({ success: true, message: 'Board created successfully', data: newBoard });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
