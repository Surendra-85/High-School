const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Board = require('../models/Board');
const Subject = require('../models/Subject');
const Material = require('../models/Material');
const Notice = require('../models/Notice');
const User = require('../models/User');
const { boardsData, subjectsData, materialsData, noticesData, testUsersData } = require('./mockData');

dotenv.config();

const seedDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/eduboard_india';
    await mongoose.connect(mongoUri);
    console.log('[Seeder] Connected to MongoDB.');

    await Board.deleteMany({});
    await Subject.deleteMany({});
    await Material.deleteMany({});
    await Notice.deleteMany({});
    await User.deleteMany({});

    await Board.insertMany(boardsData);
    await Subject.insertMany(subjectsData);
    await Material.insertMany(materialsData);
    await Notice.insertMany(noticesData);

    for (const u of testUsersData) {
      await User.create({
        ...u,
        password: 'password123'
      });
    }

    console.log('✅ [Seeder] Database seeded successfully with 20+ Indian Boards, Subjects, Materials, Notices, and Demo Users!');
    process.exit(0);
  } catch (error) {
    console.error('❌ [Seeder] Seed Error:', error.message);
    process.exit(1);
  }
};

seedDB();
