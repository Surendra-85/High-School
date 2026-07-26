export const boardsData = [
  {
    id: "up-board",
    name: "UP Board (Uttar Pradesh)",
    code: "UPMSP",
    state: "Uttar Pradesh",
    logo: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=150&q=80",
    banner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    studentsCount: "5.5M+",
    subjectsCount: 32,
    description: "Board of High School and Intermediate Education Uttar Pradesh, Allahabad. Asia's largest exam conducting board.",
    established: 1921,
    website: "https://upmsp.edu.in",
    isPopular: true,
    streams: ["High School", "Intermediate Science", "Intermediate Commerce", "Intermediate Arts", "Vocational"]
  },
  {
    id: "cbse",
    name: "CBSE (Central Board)",
    code: "CBSE",
    state: "All India & Global",
    logo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=150&q=80",
    banner: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    studentsCount: "3.2M+",
    subjectsCount: 45,
    description: "Central Board of Secondary Education. Premier national level education board under Union Government of India.",
    established: 1929,
    website: "https://cbse.gov.in",
    isPopular: true,
    streams: ["High School", "Intermediate Science", "Intermediate Commerce", "Intermediate Arts"]
  },
  {
    id: "icse",
    name: "ICSE / ISC (CISCE)",
    code: "CISCE",
    state: "All India",
    logo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=150&q=80",
    banner: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    studentsCount: "1.8M+",
    subjectsCount: 38,
    description: "Council for the Indian School Certificate Examinations. Renowned for rigorous English curriculum and application concepts.",
    established: 1958,
    website: "https://cisce.org",
    isPopular: true,
    streams: ["High School (ICSE)", "Intermediate Science (ISC)", "Intermediate Commerce", "Intermediate Humanities"]
  },
  {
    id: "bihar-board",
    name: "Bihar Board (BSEB)",
    code: "BSEB",
    state: "Bihar",
    logo: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=150&q=80",
    banner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    studentsCount: "3.8M+",
    subjectsCount: 28,
    description: "Bihar School Examination Board, Patna. Known for high competitive success rates in JEE and NEET exams.",
    established: 1952,
    website: "http://biharboardonline.bihar.gov.in",
    isPopular: true,
    streams: ["Matric (High School)", "Inter Science", "Inter Commerce", "Inter Arts"]
  },
  {
    id: "nios",
    name: "NIOS (Open Schooling)",
    code: "NIOS",
    state: "National Open",
    logo: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=150&q=80",
    banner: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    studentsCount: "2.7M+",
    subjectsCount: 40,
    description: "National Institute of Open Schooling. Flexible educational board empowering self-paced learning nationwide.",
    established: 1989,
    website: "https://nios.ac.in",
    isPopular: true,
    streams: ["Secondary (Class 10)", "Senior Secondary (Class 12)", "Vocational Education"]
  },
  {
    id: "rbse",
    name: "Rajasthan Board (RBSE)",
    code: "BSER",
    state: "Rajasthan",
    logo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=150&q=80",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    studentsCount: "2.1M+",
    subjectsCount: 30,
    description: "Board of Secondary Education Rajasthan, Ajmer. Pioneer in quality state education and model papers.",
    established: 1957,
    website: "rajeduboard.rajasthan.gov.in",
    isPopular: true,
    streams: ["High School", "Science", "Commerce", "Arts", "Agriculture"]
  },
  {
    id: "mp-board",
    name: "MP Board (MPBSE)",
    code: "MPBSE",
    state: "Madhya Pradesh",
    logo: "https://images.unsplash.com/photo-1517842835261-2661858a7e02?auto=format&fit=crop&w=150&q=80",
    banner: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    studentsCount: "2.4M+",
    subjectsCount: 29,
    description: "Madhya Pradesh Board of Secondary Education, Bhopal.",
    established: 1965,
    website: "mpbse.nic.in",
    isPopular: false,
    streams: ["High School", "Science", "Commerce", "Arts", "Agriculture"]
  },
  {
    id: "maharashtra-board",
    name: "Maharashtra State Board (MSBSHSE)",
    code: "MSBSHSE",
    state: "Maharashtra",
    logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=150&q=80",
    banner: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    studentsCount: "3.5M+",
    subjectsCount: 36,
    description: "Maharashtra State Board of Secondary and Higher Secondary Education, Pune. SSC and HSC examinations.",
    established: 1965,
    website: "mahahsscboard.in",
    isPopular: true,
    streams: ["SSC (Class 10)", "HSC Science", "HSC Commerce", "HSC Arts"]
  }
];

export const subjectsData = [
  // High School
  { id: "hs-hindi", name: "Hindi (हिंदी)", code: "HS-01", level: "High School", stream: "All", color: "from-amber-500 to-red-600", chaptersCount: 18, description: "गद्य, काव्य, संस्कृत खंड एवं व्याकरण" },
  { id: "hs-english", name: "English", code: "HS-02", level: "High School", stream: "All", color: "from-blue-500 to-indigo-600", chaptersCount: 16, description: "Prose, Poetry, Footprints Without Feet, Grammar & Composition" },
  { id: "hs-science", name: "Science (विज्ञान)", code: "HS-03", level: "High School", stream: "All", color: "from-emerald-500 to-teal-700", chaptersCount: 16, description: "Physics, Chemistry, and Biology combined fundamentals" },
  { id: "hs-math", name: "Mathematics (गणित)", code: "HS-04", level: "High School", stream: "All", color: "from-violet-500 to-purple-700", chaptersCount: 15, description: "Algebra, Geometry, Trigonometry, Statistics & Coordinate Geometry" },
  { id: "hs-sst", name: "Social Science (सामाजिक विज्ञान)", code: "HS-05", level: "High School", stream: "All", color: "from-orange-500 to-amber-700", chaptersCount: 22, description: "History, Geography, Political Science, and Economics" },
  { id: "hs-computer", name: "Computer Application (कंप्यूटर)", code: "HS-06", level: "High School", stream: "All", color: "from-cyan-500 to-blue-700", chaptersCount: 12, description: "Python, Cyber Ethics, HTML/CSS Web Development" },

  // Intermediate Science
  { id: "inter-physics", name: "Physics (भौतिक विज्ञान)", code: "INT-PHY", level: "Intermediate", stream: "Science", color: "from-sky-400 to-blue-600", chaptersCount: 14, description: "Electrostatics, Optics, Quantum Physics & Semiconductors" },
  { id: "inter-chemistry", name: "Chemistry (रसायन विज्ञान)", code: "INT-CHE", level: "Intermediate", stream: "Science", color: "from-emerald-400 to-green-600", chaptersCount: 10, description: "Physical, Organic & Inorganic Chemistry with numerical problems" },
  { id: "inter-bio", name: "Biology (जीव विज्ञान)", code: "INT-BIO", level: "Intermediate", stream: "Science", color: "from-rose-500 to-pink-600", chaptersCount: 16, description: "Genetics, Human Physiology, Biotechnology & Ecology" },
  { id: "inter-math", name: "Mathematics (उच्च गणित)", code: "INT-MATH", level: "Intermediate", stream: "Science", color: "from-purple-500 to-indigo-700", chaptersCount: 13, description: "Calculus, 3D Geometry, Vectors, Matrices & Probability" },

  // Intermediate Commerce
  { id: "inter-accountancy", name: "Accountancy (लेखाशास्त्र)", code: "INT-ACC", level: "Intermediate", stream: "Commerce", color: "from-teal-500 to-cyan-700", chaptersCount: 12, description: "Partnership, Company Accounts & Financial Statement Analysis" },
  { id: "inter-bst", name: "Business Studies (व्यवसाय अध्ययन)", code: "INT-BST", level: "Intermediate", stream: "Commerce", color: "from-amber-500 to-orange-600", chaptersCount: 12, description: "Principles of Management, Marketing & Financial Markets" },
  { id: "inter-eco", name: "Economics (अर्थशास्त्र)", code: "INT-ECO", level: "Intermediate", stream: "Commerce", color: "from-indigo-500 to-blue-700", chaptersCount: 14, description: "Microeconomics, Macroeconomics & Indian Economic Development" },

  // Intermediate Arts
  { id: "inter-history", name: "History (इतिहास)", code: "INT-HIS", level: "Intermediate", stream: "Arts", color: "from-stone-500 to-amber-900", chaptersCount: 15, description: "Ancient, Medieval & Modern Indian History with Map Work" },
  { id: "inter-polsci", name: "Political Science (राजनीति विज्ञान)", code: "INT-POL", level: "Intermediate", stream: "Arts", color: "from-blue-600 to-slate-800", chaptersCount: 16, description: "Contemporary World Politics & Politics in India since Independence" }
];

export const materialsData = [
  {
    id: "mat-01",
    title: "Class 12 Physics Complete Handwritten Master Revision Notes",
    board: "up-board",
    level: "Intermediate",
    stream: "Science",
    subject: "Physics (भौतिक विज्ञान)",
    type: "Handwritten Notes",
    year: 2026,
    chapter: "All 14 Chapters Formulae & Derivations",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    views: 18400,
    downloadsCount: 12900,
    author: "System Admin",
    tags: ["Physics", "Class 12", "Handwritten", "Formula Sheet"],
    description: "Ultra high-quality handwritten notes covering all 14 chapters including Gauss Theorem, Optics Derivations, and Semiconductors."
  },
  {
    id: "mat-02",
    title: "CBSE Class 10 Science Last 10 Years Solved Question Papers (2015-2025)",
    board: "cbse",
    level: "High School",
    stream: "General",
    subject: "Science (विज्ञान)",
    type: "Previous Papers",
    year: 2025,
    chapter: "All Chapters Pyq Solutions",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80",
    rating: 4.95,
    views: 24200,
    downloadsCount: 19800,
    author: "EduBoard Academic Council",
    tags: ["CBSE", "Class 10", "PYQ", "Science"],
    description: "Official CBSE Class 10 Board Exam Solved Papers with step-by-step marking scheme solutions."
  },
  {
    id: "mat-03",
    title: "Class 12 Chemistry NCERT Line-by-Line Chapterwise Question Bank",
    board: "cbse",
    level: "Intermediate",
    stream: "Science",
    subject: "Chemistry (रसायन विज्ञान)",
    type: "Question Bank",
    year: 2026,
    chapter: "Organic & Physical Chemistry",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=400&q=80",
    rating: 4.88,
    views: 15600,
    downloadsCount: 11400,
    author: "System Admin",
    tags: ["Chemistry", "NCERT", "Question Bank"],
    description: "Comprehensive NCERT extract question bank with solved numericals and named organic reactions."
  },
  {
    id: "mat-04",
    title: "Bihar Board Class 12 Inter Math 100 Objective Questions & PYQ 2026",
    board: "bihar-board",
    level: "Intermediate",
    stream: "Science",
    subject: "Mathematics (उच्च गणित)",
    type: "Model Papers",
    year: 2026,
    chapter: "Calculus & Matrix Determinants",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80",
    rating: 4.92,
    views: 21000,
    downloadsCount: 16500,
    author: "EduBoard Math Council",
    tags: ["BSEB", "Inter Math", "Objective"],
    description: "Specially prepared 100 MCQ objective paper set following Bihar Board pattern."
  },
  {
    id: "mat-05",
    title: "Class 10 Mathematics Standard & Basic NCERT PDF Textbook Solution",
    board: "cbse",
    level: "High School",
    stream: "General",
    subject: "Mathematics (गणित)",
    type: "Books",
    year: 2026,
    chapter: "Complete Book Solutions",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80",
    rating: 4.97,
    views: 31000,
    downloadsCount: 26400,
    author: "EduBoard Math Faculty",
    tags: ["Class 10", "Maths NCERT", "Textbook PDF"],
    description: "Complete NCERT Mathematics Solutions with alternate short methods."
  },
  {
    id: "mat-06",
    title: "UP Board Class 10 Hindi (गद्य एवं काव्य) Important Questions & Notes 2026",
    board: "up-board",
    level: "High School",
    stream: "General",
    subject: "Hindi (हिंदी)",
    type: "Notes",
    year: 2026,
    chapter: "जीवन परिचय एवं रस-छंद-अलंकार",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80",
    rating: 4.89,
    views: 19500,
    downloadsCount: 14200,
    author: "Academic Director",
    tags: ["UP MSP", "Hindi", "Life Sketch"],
    description: "All author life sketches (जीवन परिचय), poem summaries, and Hindi grammar shortcuts."
  }
];

export const noticesData = [
  {
    id: "not-01",
    title: "UP MSP High School & Intermediate Examination Date Sheet 2026 Released",
    board: "up-board",
    category: "Exam Notice",
    content: "The Board of High School and Intermediate Education UP Allahabad has officially released the exam schedule. Practical examinations commence from January 20th and theory papers begin from February 16th, 2026.",
    pdfUrl: "#",
    isUrgent: true,
    publishDate: "2026-07-24T10:00:00Z"
  },
  {
    id: "not-02",
    title: "CBSE Class 10 & 12 Sample Question Papers & Marking Scheme 2026 Available",
    board: "cbse",
    category: "Circular",
    content: "Central Board of Secondary Education has published official sample papers for session 2025-26 along with chapter-wise weightage and blue prints.",
    pdfUrl: "#",
    isUrgent: false,
    publishDate: "2026-07-22T14:30:00Z"
  },
  {
    id: "not-03",
    title: "Bihar Board Matric & Inter Model Paper 2026 Free Download Alert",
    board: "bihar-board",
    category: "Result",
    content: "BSEB Patna has released official 100 objective model sets. Download chapter wise PDFs directly on EduBoard India.",
    pdfUrl: "#",
    isUrgent: true,
    publishDate: "2026-07-21T09:15:00Z"
  }
];

export const testUsersData = [
  {
    name: "Aarav Sharma (Student)",
    email: "student@eduboard.in",
    role: "student",
    targetBoard: "UP Board (Uttar Pradesh)",
    targetClass: "High School (Class 10)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    bookmarks: ["mat-01", "mat-02", "mat-05"],
    downloads: ["mat-01", "mat-02"]
  },
  {
    name: "System Admin (EduBoard Director)",
    email: "admin@eduboard.in",
    role: "admin",
    targetBoard: "All Indian Boards",
    targetClass: "High School & Intermediate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    bookmarks: [],
    downloads: []
  }
];
