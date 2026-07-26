const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  board: { type: String, required: true },
  level: { type: String, enum: ['High School', 'Intermediate'], required: true },
  stream: { type: String, enum: ['General', 'Science', 'Commerce', 'Arts', 'Vocational'], default: 'General' },
  subject: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['Notes', 'Handwritten Notes', 'Books', 'Question Bank', 'Previous Papers', 'Model Papers', 'Assignments', 'Video Lecture'],
    required: true 
  },
  year: { type: Number, default: 2026 },
  chapter: { type: String, default: 'All Chapters' },
  fileUrl: { type: String, required: true },
  thumbnail: { type: String },
  rating: { type: Number, default: 4.8 },
  views: { type: Number, default: 1200 },
  downloadsCount: { type: Number, default: 450 },
  author: { type: String, default: 'EduBoard India Academic Team' },
  tags: [{ type: String }],
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Material', materialSchema);
