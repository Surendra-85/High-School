const { noticesData } = require('../../utils/mockData');

exports.getAllNotices = async (req, res) => {
  try {
    const { category, board } = req.query;
    let list = noticesData;
    if (category) {
      list = list.filter(n => n.category.toLowerCase() === category.toLowerCase());
    }
    if (board) {
      list = list.filter(n => n.board === board);
    }
    res.json({ success: true, count: list.length, data: list });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
