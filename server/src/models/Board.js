const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  code: { type: String, required: true },
  state: { type: String, required: true },
  logo: { type: String, required: true },
  banner: { type: String, required: true },
  studentsCount: { type: String, default: '1.2M+' },
  subjectsCount: { type: Number, default: 24 },
  description: { type: String, required: true },
  established: { type: Number, default: 1929 },
  website: { type: String, default: 'https://cbse.gov.in' },
  isPopular: { type: Boolean, default: false },
  streams: [{ type: String, default: ['Science', 'Commerce', 'Arts', 'Vocational'] }]
}, { timestamps: true });

module.exports = mongoose.model('Board', boardSchema);
