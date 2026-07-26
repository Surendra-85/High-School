const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  board: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Exam Notice', 'Result', 'Holiday', 'Scholarship', 'Admission', 'Circular'],
    default: 'Exam Notice' 
  },
  content: { type: String, required: true },
  pdfUrl: { type: String },
  isUrgent: { type: Boolean, default: false },
  publishDate: { type: Date, default: Date.now },
  expiresAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Notice', noticeSchema);
