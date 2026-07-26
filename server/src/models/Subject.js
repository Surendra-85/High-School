const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
  level: { type: String, enum: ['High School', 'Intermediate'], required: true },
  stream: { type: String, enum: ['All', 'Science', 'Commerce', 'Arts', 'Vocational'], default: 'All' },
  icon: { type: String, default: 'BookOpen' },
  color: { type: String, default: 'from-blue-500 to-indigo-600' },
  chaptersCount: { type: Number, default: 15 },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
