
export const scheduleData = [
  {
    id: '1',
    subject: 'Mathematics',
    teacher: 'Prof. Johnson',
    location: 'Building A, Room 102',
    time: '8:30 AM - 9:20 AM',
    day: 'Monday',
    colorClass: 'border-blue-400 bg-blue-50'
  },
  {
    id: '2',
    subject: 'Physics',
    teacher: 'Dr. Smith',
    location: 'Science Lab, Room 305',
    time: '9:30 AM - 10:20 AM',
    day: 'Monday',
    colorClass: 'border-purple-400 bg-purple-50'
  },
  {
    id: '3',
    subject: 'English Literature',
    teacher: 'Ms. Davis',
    location: 'Building B, Room 210',
    time: '10:30 AM - 11:20 AM',
    day: 'Monday',
    colorClass: 'border-green-400 bg-green-50'
  },
  {
    id: '4',
    subject: 'History',
    teacher: 'Mr. Thompson',
    location: 'Building C, Room 105',
    time: '11:30 AM - 12:20 PM',
    day: 'Monday',
    colorClass: 'border-amber-400 bg-amber-50'
  },
  {
    id: '5',
    subject: 'Computer Science',
    teacher: 'Prof. Wilson',
    location: 'IT Lab, Room 401',
    time: '1:30 PM - 2:20 PM',
    day: 'Monday',
    colorClass: 'border-red-400 bg-red-50'
  },
  {
    id: '6',
    subject: 'Biology',
    teacher: 'Dr. Clark',
    location: 'Science Lab, Room 302',
    time: '8:30 AM - 9:20 AM',
    day: 'Tuesday',
    colorClass: 'border-emerald-400 bg-emerald-50'
  },
  {
    id: '7',
    subject: 'Chemistry',
    teacher: 'Prof. Roberts',
    location: 'Science Lab, Room 304',
    time: '9:30 AM - 10:20 AM',
    day: 'Tuesday',
    colorClass: 'border-teal-400 bg-teal-50'
  }
];

export const buildingsData = [
  {
    id: '1',
    name: 'Main Building',
    floors: 4,
    rooms: 40,
    facilities: ['Administration', 'Cafeteria', 'Auditorium'],
    lat: 51.505,
    lng: -0.09,
  },
  {
    id: '2',
    name: 'Science Building',
    floors: 3,
    rooms: 30,
    facilities: ['Laboratories', 'Research Center', 'Lecture Halls'],
    lat: 51.506,
    lng: -0.091,
  },
  {
    id: '3',
    name: 'Library',
    floors: 2,
    rooms: 15,
    facilities: ['Study Rooms', 'Computer Lab', 'Archives'],
    lat: 51.5055,
    lng: -0.0895,
  },
  {
    id: '4',
    name: 'Sports Complex',
    floors: 2,
    rooms: 10,
    facilities: ['Gymnasium', 'Swimming Pool', 'Tennis Courts'],
    lat: 51.5045,
    lng: -0.088,
  },
  {
    id: '5',
    name: 'Arts Center',
    floors: 2,
    rooms: 20,
    facilities: ['Art Studios', 'Music Rooms', 'Theater'],
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
    class: 'Mathematics'
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-02',
    status: 'present',
    class: 'Physics'
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-03',
    status: 'absent',
    class: 'English Literature'
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-04',
    status: 'present',
    class: 'History'
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    date: '2023-05-05',
    status: 'present',
    class: 'Computer Science'
  },
  {
    studentId: 'student-2',
    studentName: 'Emily Davis',
    date: '2023-05-01',
    status: 'present',
    class: 'Mathematics'
  },
  {
    studentId: 'student-2',
    studentName: 'Emily Davis',
    date: '2023-05-02',
    status: 'present',
    class: 'Physics'
  }
];

export const announcementsData = [
  {
    id: '1',
    title: 'Math Quiz Postponed',
    content: 'Due to faculty meeting, the math quiz will be held on Wednesday instead of Tuesday.',
    author: 'Prof. Johnson',
    date: '2023-05-01',
    urgent: true,
    class: 'Mathematics'
  },
  {
    id: '2',
    title: 'Physics Lab Equipment',
    content: 'Please bring safety goggles for tomorrow\'s physics lab session.',
    author: 'Dr. Smith',
    date: '2023-05-02',
    urgent: false,
    class: 'Physics'
  },
  {
    id: '3',
    title: 'Field Trip Permission',
    content: 'Submit your permission slips for the museum field trip by Friday.',
    author: 'Ms. Davis',
    date: '2023-05-03',
    urgent: true,
    class: 'History'
  }
];

export const emergencyContactsData = [
  {
    id: '1',
    name: 'Campus Security',
    phone: '555-123-4567',
    email: 'security@school.edu',
    available: '24/7'
  },
  {
    id: '2',
    name: 'Health Center',
    phone: '555-234-5678',
    email: 'health@school.edu',
    available: '8:00 AM - 5:00 PM'
  },
  {
    id: '3',
    name: 'Counseling Services',
    phone: '555-345-6789',
    email: 'counseling@school.edu',
    available: '9:00 AM - 4:00 PM'
  },
  {
    id: '4',
    name: 'IT Support',
    phone: '555-456-7890',
    email: 'itsupport@school.edu',
    available: '8:00 AM - 6:00 PM'
  },
  {
    id: '5',
    name: 'Administration Office',
    phone: '555-567-8901',
    email: 'admin@school.edu',
    available: '8:30 AM - 4:30 PM'
  }
];

export const calendarEventsData = [
  {
    id: '1',
    title: 'Final Exams',
    date: '2023-05-15',
    location: 'Multiple Buildings',
    description: 'Final examinations for all subjects.'
  },
  {
    id: '2',
    title: 'Science Fair',
    date: '2023-05-10',
    location: 'Science Building',
    description: 'Annual science fair featuring student projects.'
  },
  {
    id: '3',
    title: 'Parent-Teacher Conference',
    date: '2023-05-20',
    location: 'Main Building',
    description: 'Discuss student progress with teachers.'
  },
  {
    id: '4',
    title: 'Sports Day',
    date: '2023-05-25',
    location: 'Sports Complex',
    description: 'Annual sports day with various athletic competitions.'
  },
  {
    id: '5',
    title: 'Art Exhibition',
    date: '2023-05-05',
    location: 'Arts Center',
    description: 'Exhibition of student artwork.'
  }
];

export const studyRoomsData = [
  {
    id: '1',
    name: 'Study Room A',
    location: 'Library, 1st Floor',
    capacity: 4,
    equipment: ['Whiteboard', 'Projector'],
    available: true
  },
  {
    id: '2',
    name: 'Study Room B',
    location: 'Library, 1st Floor',
    capacity: 6,
    equipment: ['Whiteboard', 'TV Screen'],
    available: true
  },
  {
    id: '3',
    name: 'Study Room C',
    location: 'Library, 2nd Floor',
    capacity: 8,
    equipment: ['Whiteboard', 'Projector', 'Conference System'],
    available: false
  },
  {
    id: '4',
    name: 'Collaboration Space',
    location: 'Science Building, 3rd Floor',
    capacity: 12,
    equipment: ['Whiteboard', 'Projector', 'Computers'],
    available: true
  },
  {
    id: '5',
    name: 'Quiet Study Area',
    location: 'Library, 2nd Floor',
    capacity: 20,
    equipment: ['Individual Desks', 'Power Outlets'],
    available: true
  }
];

export const equipmentData = [
  {
    id: '1',
    name: 'Projector HD-100',
    type: 'Projector',
    location: 'IT Department',
    status: 'Available'
  },
  {
    id: '2',
    name: 'Laptop Dell XPS 13',
    type: 'Laptop',
    location: 'IT Department',
    status: 'Available'
  },
  {
    id: '3',
    name: 'Projector Sony VPL-FX30',
    type: 'Projector',
    location: 'Science Building',
    status: 'In Use'
  },
  {
    id: '4',
    name: 'iPad Pro 12.9"',
    type: 'Tablet',
    location: 'IT Department',
    status: 'Available'
  },
  {
    id: '5',
    name: 'Surface Book 3',
    type: 'Laptop',
    location: 'IT Department',
    status: 'In Use'
  }
];

export const libraryServicesData = [
  {
    id: '1',
    name: 'Book Borrowing',
    description: 'Borrow books for up to 2 weeks with student ID.',
    online: true,
    inPerson: true
  },
  {
    id: '2',
    name: 'Digital Resources',
    description: 'Access e-books, journals, and academic databases.',
    online: true,
    inPerson: false
  },
  {
    id: '3',
    name: 'Research Assistance',
    description: 'Get help from librarians for research projects.',
    online: true,
    inPerson: true
  },
  {
    id: '4',
    name: 'Printing & Copying',
    description: 'Print and copy documents at the library.',
    online: false,
    inPerson: true
  },
  {
    id: '5',
    name: 'Inter-Library Loans',
    description: 'Request books from other libraries.',
    online: true,
    inPerson: true
  }
];

export const lectureNotesData = [
  {
    id: '1',
    title: 'Introduction to Calculus',
    class: 'Mathematics',
    dateUploaded: '2023-04-15',
    fileUrl: '#',
    fileType: 'PDF'
  },
  {
    id: '2',
    title: 'Newton\'s Laws of Motion',
    class: 'Physics',
    dateUploaded: '2023-04-20',
    fileUrl: '#',
    fileType: 'PPTX'
  },
  {
    id: '3',
    title: 'Shakespeare\'s Hamlet',
    class: 'English Literature',
    dateUploaded: '2023-04-25',
    fileUrl: '#',
    fileType: 'PDF'
  },
  {
    id: '4',
    title: 'World War II Overview',
    class: 'History',
    dateUploaded: '2023-04-28',
    fileUrl: '#',
    fileType: 'DOCX'
  },
  {
    id: '5',
    title: 'Data Structures',
    class: 'Computer Science',
    dateUploaded: '2023-05-01',
    fileUrl: '#',
    fileType: 'PDF'
  }
];

export const gradebookData = [
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    subject: 'Mathematics',
    assignments: [
      { name: 'Quiz 1', score: 85, maxScore: 100 },
      { name: 'Homework 1', score: 92, maxScore: 100 },
      { name: 'Midterm', score: 78, maxScore: 100 }
    ]
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    subject: 'Physics',
    assignments: [
      { name: 'Lab Report 1', score: 90, maxScore: 100 },
      { name: 'Quiz 1', score: 75, maxScore: 100 },
      { name: 'Midterm', score: 82, maxScore: 100 }
    ]
  },
  {
    studentId: 'student-1',
    studentName: 'Alex Johnson',
    subject: 'English Literature',
    assignments: [
      { name: 'Essay 1', score: 88, maxScore: 100 },
      { name: 'Presentation', score: 95, maxScore: 100 },
      { name: 'Midterm', score: 85, maxScore: 100 }
    ]
  }
];

export const newslettersData = [
  {
    id: '1',
    title: 'Spring Semester Newsletter',
    date: '2023-03-01',
    content: 'News and updates for the spring semester.',
    pdfUrl: '#'
  },
  {
    id: '2',
    title: 'Science Department Update',
    date: '2023-03-15',
    content: 'Latest news from the science department.',
    pdfUrl: '#'
  },
  {
    id: '3',
    title: 'Sports Teams Results',
    date: '2023-04-01',
    content: 'Recent results from our school sports teams.',
    pdfUrl: '#'
  },
  {
    id: '4',
    title: 'Arts Festival Announcement',
    date: '2023-04-15',
    content: 'Information about the upcoming arts festival.',
    pdfUrl: '#'
  },
  {
    id: '5',
    title: 'End of Year Celebrations',
    date: '2023-05-01',
    content: 'Details about end of year events and celebrations.',
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
    title: 'Renewable Energy Solutions',
    student: 'Alex Johnson',
    class: 'Science',
    thumbnail: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'A project exploring solar and wind energy solutions for urban environments.'
  },
  {
    id: '2',
    title: 'Analysis of Hamlet',
    student: 'Emily Davis',
    class: 'English Literature',
    thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'An in-depth analysis of Shakespeare\'s Hamlet and its themes.'
  },
  {
    id: '3',
    title: 'Mobile App for Campus Navigation',
    student: 'Michael Smith',
    class: 'Computer Science',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'A mobile application to help students navigate the campus.'
  }
];

export const classroomSuppliesData = [
  {
    id: '1',
    name: 'Pencils',
    requested: 50,
    donated: 20,
    teacher: 'Ms. Rebecca Smith',
    class: 'Mathematics'
  },
  {
    id: '2',
    name: 'Notebooks',
    requested: 30,
    donated: 15,
    teacher: 'Dr. Smith',
    class: 'Physics'
  },
  {
    id: '3',
    name: 'Art Supplies',
    requested: 20,
    donated: 10,
    teacher: 'Ms. Johnson',
    class: 'Art'
  },
  {
    id: '4',
    name: 'Science Lab Materials',
    requested: 10,
    donated: 5,
    teacher: 'Dr. Clark',
    class: 'Biology'
  },
  {
    id: '5',
    name: 'Sports Equipment',
    requested: 15,
    donated: 7,
    teacher: 'Mr. Brown',
    class: 'Physical Education'
  }
];

export const serviceIssuesData = [
  {
    id: '1',
    title: 'Wi-Fi Connectivity Issues',
    location: 'Library',
    status: 'Open',
    reporter: 'Alex Johnson',
    date: '2023-05-01',
    priority: 'High'
  },
  {
    id: '2',
    title: 'Broken Desk',
    location: 'Building A, Room 102',
    status: 'In Progress',
    reporter: 'Emily Davis',
    date: '2023-04-28',
    priority: 'Medium'
  },
  {
    id: '3',
    title: 'Projector Not Working',
    location: 'Building B, Room 210',
    status: 'Resolved',
    reporter: 'Michael Smith',
    date: '2023-04-25',
    priority: 'High'
  },
  {
    id: '4',
    title: 'Bathroom Needs Cleaning',
    location: 'Main Building, 1st Floor',
    status: 'Open',
    reporter: 'Sarah Wilson',
    date: '2023-05-02',
    priority: 'Medium'
  },
  {
    id: '5',
    title: 'Vending Machine Out of Order',
    location: 'Student Center',
    status: 'In Progress',
    reporter: 'David Brown',
    date: '2023-04-30',
    priority: 'Low'
  }
];
