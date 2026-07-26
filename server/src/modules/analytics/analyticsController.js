const { boardsData, materialsData, testUsersData } = require('../../utils/mockData');

exports.getPlatformAnalytics = async (req, res) => {
  try {
    const stats = {
      totalBoards: boardsData.length,
      totalMaterials: materialsData.length + 1500,
      totalUsers: testUsersData.length + 142000,
      totalDownloads: "1.45M+",
      monthlyGrowth: "+24.8%",
      recentUploads: materialsData.slice(0, 5),
      activeStudents: "85,400",
      activeTeachers: "3,120",
      systemHealth: "99.99%"
    };
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
