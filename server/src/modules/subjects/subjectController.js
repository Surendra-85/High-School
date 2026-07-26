const Subject = require('../../models/Subject');
const { subjectsData } = require('../../utils/mockData');

exports.getAllSubjects = async (req, res) => {
  try {
    const { level, stream } = req.query;
    let subjects = [];
    try {
      let query = {};
      if (level) query.level = level;
      if (stream) query.stream = stream;
      subjects = await Subject.find(query);
    } catch (e) {}

    if (!subjects || subjects.length === 0) {
      subjects = subjectsData.filter(s => {
        if (level && s.level !== level) return false;
        if (stream && s.stream !== stream && s.stream !== 'All') return false;
        return true;
      });
    }

    res.json({ success: true, count: subjects.length, data: subjects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
