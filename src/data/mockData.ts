
export const scheduleData = [
  {
    id: '1',
    subject: 'Advanced Algorithms',
    teacher: 'Prof. Johnson',
    location: 'Computer Science Building, Lab 102',
    time: '8:30 AM - 9:20 AM',
    day: 'Monday',
    colorClass: 'border-blue-400 bg-blue-50'
  },
  {
    id: '2',
    subject: 'Database Systems',
    teacher: 'Dr. Smith',
    location: 'Database Lab, Room 305',
    time: '9:30 AM - 10:20 AM',
    day: 'Monday',
    colorClass: 'border-purple-400 bg-purple-50'
  },
  {
    id: '3',
    subject: 'Technical Communication',
    teacher: 'Ms. Davis',
    location: 'Media Building, Room 210',
    time: '10:30 AM - 11:20 AM',
    day: 'Monday',
    colorClass: 'border-green-400 bg-green-50'
  },
  {
    id: '4',
    subject: 'Computer Architecture',
    teacher: 'Mr. Thompson',
    location: 'Hardware Lab, Room 105',
    time: '11:30 AM - 12:20 PM',
    day: 'Monday',
    colorClass: 'border-amber-400 bg-amber-50'
  },
  {
    id: '5',
    subject: 'Artificial Intelligence',
    teacher: 'Prof. Wilson',
    location: 'AI Lab, Room 401',
    time: '1:30 PM - 2:20 PM',
    day: 'Monday',
    colorClass: 'border-red-400 bg-red-50'
  },
  {
    id: '6',
    subject: 'Web Development',
    teacher: 'Dr. Clark',
    location: 'Web Lab, Room 302',
    time: '8:30 AM - 9:20 AM',
    day: 'Tuesday',
    colorClass: 'border-emerald-400 bg-emerald-50'
  },
  {
    id: '7',
    subject: 'Data Science',
    teacher: 'Prof. Roberts',
    location: 'Data Science Lab, Room 304',
    time: '9:30 AM - 10:20 AM',
    day: 'Tuesday',
    colorClass: 'border-teal-400 bg-teal-50'
  }
];

export const buildingsData = [
  {
    id: 'industrial',
    name: 'Industrial Computing Department',
    floors: 4,
    rooms: 40,
    facilities: ['Computer Labs', 'IoT Workshop', 'Lecture Halls'],
    lat: 51.505,
    lng: -0.09,
  },
  {
    id: 'multimedia',
    name: 'Computing and Multimedia Department',
    floors: 3,
    rooms: 30,
    facilities: ['Media Labs', 'Recording Studios', 'Conference Rooms'],
    lat: 51.506,
    lng: -0.091,
  },
  {
    id: 'web',
    name: 'Web Multimedia Department',
    floors: 2,
    rooms: 15,
    facilities: ['Web Development Labs', 'Design Studios', 'Digital Archives'],
    lat: 51.5055,
    lng: -0.0895,
  },
  {
    id: 'electronics',
    name: 'Electronics and Telecommunications Department',
    floors: 2,
    rooms: 10,
    facilities: ['Electronics Labs', 'Network Testing', 'Hardware Development'],
    lat: 51.5045,
    lng: -0.088,
  },
  {
    id: 'studios',
    name: 'Studios',
    floors: 2,
    rooms: 20,
    facilities: ['Animation Studios', 'Game Design Labs', 'Presentation Theater'],
    lat: 51.5065,
    lng: -0.092,
  }
];

export const attendanceData = [
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-01',
    status: 'present',
    class: 'Advanced Algorithms'
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-02',
    status: 'present',
    class: 'Database Systems'
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-03',
    status: 'absent',
    class: 'Technical Communication'
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-04',
    status: 'present',
    class: 'Computer Architecture'
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-05',
    status: 'present',
    class: 'Artificial Intelligence'
  },
  {
    studentId: 'student-2',
    studentName: 'Emily Davis',
    date: '2023-05-01',
    status: 'present',
    class: 'Advanced Algorithms'
  },
  {
    studentId: 'student-2',
    studentName: 'Emily Davis',
    date: '2023-05-02',
    status: 'present',
    class: 'Database Systems'
  }
];

export const announcementsData = [
  {
    id: '1',
    title: 'Algorithm Quiz Postponed',
    content: 'Due to faculty meeting, the algorithms quiz will be held on Wednesday instead of Tuesday.',
    author: 'Prof. Johnson',
    date: '2023-05-01',
    urgent: true,
    class: 'Advanced Algorithms'
  },
  {
    id: '2',
    title: 'Database Lab Setup',
    content: 'Please ensure you have PostgreSQL installed before tomorrow\'s database lab session.',
    author: 'Dr. Smith',
    date: '2023-05-02',
    urgent: false,
    class: 'Database Systems'
  },
  {
    id: '3',
    title: 'Tech Conference Permission',
    content: 'Submit your permission slips for the tech conference by Friday.',
    author: 'Ms. Davis',
    date: '2023-05-03',
    urgent: true,
    class: 'Technical Communication'
  }
];

export const emergencyContactsData = [
  {
    id: '1',
    name: 'IT Support Helpdesk',
    phone: '555-123-4567',
    email: 'itsupport@csuniversity.edu',
    available: '24/7'
  },
  {
    id: '2',
    name: 'Campus Security',
    phone: '555-234-5678',
    email: 'security@csuniversity.edu',
    available: '24/7'
  },
  {
    id: '3',
    name: 'Student Tech Services',
    phone: '555-345-6789',
    email: 'techhelp@csuniversity.edu',
    available: '9:00 AM - 6:00 PM'
  },
  {
    id: '4',
    name: 'Software Licensing',
    phone: '555-456-7890',
    email: 'licensing@csuniversity.edu',
    available: '8:00 AM - 6:00 PM'
  },
  {
    id: '5',
    name: 'Computer Science Department',
    phone: '555-567-8901',
    email: 'cs-admin@csuniversity.edu',
    available: '8:30 AM - 4:30 PM'
  }
];

export const calendarEventsData = [
  {
    id: '1',
    title: 'Final Programming Exams',
    date: '2023-05-15',
    location: 'Computer Science Building',
    description: 'Final examinations for all programming courses.'
  },
  {
    id: '2',
    title: 'Tech Innovation Fair',
    date: '2023-05-10',
    location: 'Technology Innovation Center',
    description: 'Annual innovation fair featuring student tech projects.'
  },
  {
    id: '3',
    title: 'Faculty-Student Code Review',
    date: '2023-05-20',
    location: 'Main Building',
    description: 'Discuss project code and progress with instructors.'
  },
  {
    id: '4',
    title: 'Hackathon',
    date: '2023-05-25',
    location: 'Multimedia Complex',
    description: 'Annual hackathon with various programming challenges.'
  },
  {
    id: '5',
    title: 'UX/UI Design Showcase',
    date: '2023-05-05',
    location: 'Design Center',
    description: 'Exhibition of student interface designs and prototypes.'
  }
];

export const studyRoomsData = [
  {
    id: '1',
    name: 'Collaborative Coding Lab',
    location: 'Computer Science Building, 1st Floor',
    capacity: 4,
    equipment: ['Whiteboard', 'Dual Monitors', 'Version Control System'],
    available: true
  },
  {
    id: '2',
    name: 'Database Research Room',
    location: 'Digital Library, 1st Floor',
    capacity: 6,
    equipment: ['Whiteboard', 'Database Servers', 'Documentation Library'],
    available: true
  },
  {
    id: '3',
    name: 'Software Development Studio',
    location: 'Digital Library, 2nd Floor',
    capacity: 8,
    equipment: ['Whiteboard', 'Testing Environment', 'Agile Management Tools'],
    available: false
  },
  {
    id: '4',
    name: 'Project Collaboration Space',
    location: 'Technology Innovation Center, 3rd Floor',
    capacity: 12,
    equipment: ['Whiteboard', 'Projector', 'Development Workstations'],
    available: true
  },
  {
    id: '5',
    name: 'Quiet Coding Area',
    location: 'Digital Library, 2nd Floor',
    capacity: 20,
    equipment: ['Individual Workstations', 'Noise Cancelling Booths'],
    available: true
  }
];

export const equipmentData = [
  {
    id: '1',
    name: 'HTC Vive VR Headset',
    type: 'VR/AR',
    location: 'Multimedia Lab',
    status: 'Available'
  },
  {
    id: '2',
    name: 'MacBook Pro M1',
    type: 'Computer',
    location: 'IT Department',
    status: 'Available'
  },
  {
    id: '3',
    name: 'NVIDIA RTX 4090 Workstation',
    type: 'Graphics',
    location: 'AI Research Lab',
    status: 'In Use'
  },
  {
    id: '4',
    name: 'iPad Pro 12.9"',
    type: 'Tablet',
    location: 'Media Design Lab',
    status: 'Available'
  },
  {
    id: '5',
    name: 'Wacom Cintiq Pro',
    type: 'Design',
    location: 'Design Center',
    status: 'In Use'
  }
];

export const libraryServicesData = [
  {
    id: '1',
    name: 'E-Book & Journal Access',
    description: 'Access to technical e-books, journals, and research papers.',
    online: true,
    inPerson: true
  },
  {
    id: '2',
    name: 'Software Licensing',
    description: 'Access to university-licensed software and development tools.',
    online: true,
    inPerson: false
  },
  {
    id: '3',
    name: 'Technical Research Assistance',
    description: 'Get help from librarians for technical research projects.',
    online: true,
    inPerson: true
  },
  {
    id: '4',
    name: 'Digital Assets Printing',
    description: 'Print and copy technical documentation and project materials.',
    online: false,
    inPerson: true
  },
  {
    id: '5',
    name: 'Inter-University Resource Sharing',
    description: 'Request technical resources from partner universities.',
    online: true,
    inPerson: true
  }
];

export const lectureNotesData = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    class: 'Artificial Intelligence',
    dateUploaded: '2023-04-15',
    fileUrl: '#',
    fileType: 'PDF'
  },
  {
    id: '2',
    title: 'Database Normalization',
    class: 'Database Systems',
    dateUploaded: '2023-04-20',
    fileUrl: '#',
    fileType: 'PPTX'
  },
  {
    id: '3',
    title: 'Software Design Patterns',
    class: 'Software Engineering',
    dateUploaded: '2023-04-25',
    fileUrl: '#',
    fileType: 'PDF'
  },
  {
    id: '4',
    title: 'Computer Architecture Overview',
    class: 'Computer Architecture',
    dateUploaded: '2023-04-28',
    fileUrl: '#',
    fileType: 'DOCX'
  },
  {
    id: '5',
    title: 'Data Structures',
    class: 'Advanced Algorithms',
    dateUploaded: '2023-05-01',
    fileUrl: '#',
    fileType: 'PDF'
  }
];

export const gradebookData = [
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    subject: 'Advanced Algorithms',
    assignments: [
      { name: 'Algorithm Analysis Quiz', score: 85, maxScore: 100 },
      { name: 'Sorting Implementation', score: 92, maxScore: 100 },
      { name: 'Midterm Exam', score: 78, maxScore: 100 }
    ]
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    subject: 'Database Systems',
    assignments: [
      { name: 'SQL Lab Report', score: 90, maxScore: 100 },
      { name: 'Database Design Quiz', score: 75, maxScore: 100 },
      { name: 'Query Optimization', score: 82, maxScore: 100 }
    ]
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    subject: 'Technical Communication',
    assignments: [
      { name: 'Technical Documentation', score: 88, maxScore: 100 },
      { name: 'API Presentation', score: 95, maxScore: 100 },
      { name: 'Code Review Paper', score: 85, maxScore: 100 }
    ]
  }
];

export const newslettersData = [
  {
    id: '1',
    title: 'Spring Semester Tech Update',
    date: '2023-03-01',
    content: 'News and updates for the spring semester computer science courses.',
    pdfUrl: '#'
  },
  {
    id: '2',
    title: 'AI Research Department Update',
    date: '2023-03-15',
    content: 'Latest research projects from the AI department.',
    pdfUrl: '#'
  },
  {
    id: '3',
    title: 'Hackathon Results',
    date: '2023-04-01',
    content: 'Results from our university hackathon competition.',
    pdfUrl: '#'
  },
  {
    id: '4',
    title: 'Tech Innovation Fair Announcement',
    date: '2023-04-15',
    content: 'Information about the upcoming tech innovation showcase.',
    pdfUrl: '#'
  },
  {
    id: '5',
    title: 'End of Year Projects',
    date: '2023-05-01',
    content: 'Details about end of year project presentations and demonstrations.',
    pdfUrl: '#'
  }
];

export const cafeteriaMenuData = [
  {
    id: '1',
    day: 'Monday',
    breakfast: 'Oatmeal with fruit, Yogurt, Toast',
    lunch: 'Grilled Chicken Sandwich, Salad, Fruit Cup',
    dinner: 'Pasta with Marinara, Garlic Bread, Vegetables'
  },
  {
    id: '2',
    day: 'Tuesday',
    breakfast: 'Pancakes, Scrambled Eggs, Fruit',
    lunch: 'Tacos, Rice, Beans',
    dinner: 'Baked Fish, Roasted Potatoes, Vegetables'
  },
  {
    id: '3',
    day: 'Wednesday',
    breakfast: 'Cereal, Fruit, Yogurt',
    lunch: 'Pizza, Salad, Fruit',
    dinner: 'Stir Fry, Rice, Vegetables'
  },
  {
    id: '4',
    day: 'Thursday',
    breakfast: 'Bagels, Cream Cheese, Fruit',
    lunch: 'Burgers, Fries, Coleslaw',
    dinner: 'Roasted Chicken, Mashed Potatoes, Vegetables'
  },
  {
    id: '5',
    day: 'Friday',
    breakfast: 'French Toast, Fruit, Yogurt',
    lunch: 'Soup, Sandwich, Chips',
    dinner: 'Pasta with Alfredo Sauce, Salad, Garlic Bread'
  }
];

export const studentProjectsData = [
  {
    id: '1',
    title: 'AI-Powered Energy Management System',
    student: 'Alex Johnson',
    class: 'Artificial Intelligence',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'A machine learning system for optimizing energy usage in smart buildings.'
  },
  {
    id: '2',
    title: 'Natural Language Code Generator',
    student: 'Emily Davis',
    class: 'Natural Language Processing',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'An NLP system that converts natural language descriptions into executable code.'
  },
  {
    id: '3',
    title: 'Augmented Reality Campus Navigation',
    student: 'Michael Smith',
    class: 'Mobile Application Development',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'An AR mobile application to help navigate the university campus.'
  }
];

export const classroomSuppliesData = [
  {
    id: '1',
    name: 'Development Boards',
    requested: 50,
    donated: 20,
    teacher: 'Ms. Rebecca Smith',
    class: 'Embedded Systems'
  },
  {
    id: '2',
    name: 'Software Licenses',
    requested: 30,
    donated: 15,
    teacher: 'Dr. Smith',
    class: 'Software Engineering'
  },
  {
    id: '3',
    name: 'Graphics Tablets',
    requested: 20,
    donated: 10,
    teacher: 'Ms. Johnson',
    class: 'Digital Media'
  },
  {
    id: '4',
    name: 'Chemistry Lab Materials',
    requested: 10,
    donated: 5,
    teacher: 'Dr. Clark',
    class: 'Computer Hardware'
  },
  {
    id: '5',
    name: 'VR Headsets',
    requested: 15,
    donated: 7,
    teacher: 'Mr. Brown',
    class: 'Virtual Reality Development'
  }
];

export const serviceIssuesData = [
  {
    id: '1',
    title: 'Wi-Fi Connectivity Issues',
    location: 'Digital Library',
    status: 'Open',
    reporter: 'Alex Johnson',
    date: '2023-05-01',
    priority: 'High'
  },
  {
    id: '2',
    title: 'Projector Not Working',
    location: 'Computer Science Building, Lab 102',
    status: 'In Progress',
    reporter: 'Emily Davis',
    date: '2023-04-28',
    priority: 'Medium'
  },
  {
    id: '3',
    title: 'Software License Expired',
    location: 'Technology Innovation Center, Room 210',
    status: 'Resolved',
    reporter: 'Michael Smith',
    date: '2023-04-25',
    priority: 'High'
  },
  {
    id: '4',
    title: 'Server Room Temperature Alert',
    location: 'Main Building, Data Center',
    status: 'Open',
    reporter: 'Sarah Wilson',
    date: '2023-05-02',
    priority: 'Critical'
  },
  {
    id: '5',
    title: 'Printer Out of Service',
    location: 'Student Center',
    status: 'In Progress',
    reporter: 'David Brown',
    date: '2023-04-30',
    priority: 'Low'
  }
];
