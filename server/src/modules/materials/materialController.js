const Material = require('../../models/Material');
const { materialsData } = require('../../utils/mockData');

exports.getAllMaterials = async (req, res) => {
  try {
    const { board, level, stream, subject, type, year, q } = req.query;
    let materials = [];
    try {
      let query = {};
      if (board) query.board = board;
      if (level) query.level = level;
      if (stream) query.stream = stream;
      if (type) query.type = type;
      if (year) query.year = Number(year);
      if (q) query.title = { $regex: q, $options: 'i' };
      materials = await Material.find(query);
    } catch (e) {}

    if (!materials || materials.length === 0) {
      materials = materialsData.filter(m => {
        if (board && m.board !== board) return false;
        if (level && m.level !== level) return false;
        if (stream && m.stream !== stream && m.stream !== 'General') return false;
        if (type && m.type.toLowerCase() !== type.toLowerCase()) return false;
        if (year && Number(m.year) !== Number(year)) return false;
        if (q) {
          const queryStr = q.toLowerCase();
          const matchesTitle = m.title.toLowerCase().includes(queryStr);
          const matchesSubject = m.subject.toLowerCase().includes(queryStr);
          const matchesTags = m.tags.some(t => t.toLowerCase().includes(queryStr));
          if (!matchesTitle && !matchesSubject && !matchesTags) return false;
        }
        return true;
      });
    }

    res.json({ success: true, count: materials.length, data: materials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMaterialById = async (req, res) => {
  try {
    const { id } = req.params;
    let item = materialsData.find(m => m.id === id);
    if (!item) return res.status(404).json({ success: false, message: 'Material not found' });
    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createMaterial = async (req, res) => {
  try {
    const materialData = req.body;
    let newMaterial;
    try {
      newMaterial = await Material.create(materialData);
    } catch (e) {
      newMaterial = { ...materialData, id: "mat_" + Date.now(), downloadsCount: 0, views: 1 };
      materialsData.unshift(newMaterial);
    }
    res.status(201).json({ success: true, message: 'Study material uploaded successfully!', data: newMaterial });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
