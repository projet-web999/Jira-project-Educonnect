
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, BookOpen, MapPin, User, Bell, FileText, School, MessageSquare, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const DashboardCard = ({ 
  title, 
  description, 
  icon, 
  linkText, 
  linkPath 
}: { 
  title: string; 
  description: string; 
  icon: JSX.Element; 
  linkText: string; 
  linkPath: string; 
}) => (
  <Card className="hover:shadow-md transition-shadow bg-white border-t-2 border-t-edu-primary">
    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
      <div className="p-2 bg-blue-100 rounded-md">{icon}</div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-500">{description}</p>
    </CardContent>
    <CardFooter>
      <Link to={linkPath} className="w-full">
        <Button variant="outline" className="w-full">
          {linkText}
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

const Dashboard = () => {
  const { user, userRole } = useAuth();

  useEffect(() => {
    // Demo notification for first-time visit
    const hasShownWelcome = localStorage.getItem('hasShownWelcome');
    if (!hasShownWelcome) {
      toast({
        title: "Welcome to EduConnect!",
        description: "Your educational platform for seamless learning and communication.",
      });
      localStorage.setItem('hasShownWelcome', 'true');
    }
  }, []);

  // Common cards for all user types
  const commonCards = [
    {
      title: "Campus Map",
      description: "Find buildings and navigate around the campus easily.",
      icon: <MapPin className="h-5 w-5 text-blue-500" />,
      linkText: "Open Map",
      linkPath: "/map"
    },
    {
      title: "Emergency Contacts",
      description: "Access important campus emergency contacts.",
      icon: <Bell className="h-5 w-5 text-blue-500" />,
      linkText: "View Contacts",
      linkPath: "/emergency"
    },
    {
      title: "Event Calendar",
      description: "Browse upcoming school events and activities.",
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
      linkText: "View Calendar",
      linkPath: "/calendar"
    },
    {
      title: "Cafeteria Menu",
      description: "Check daily and weekly cafeteria menus.",
      icon: <Menu className="h-5 w-5 text-blue-500" />,
      linkText: "View Menu",
      linkPath: "/cafeteria-menu"
    },
  ];

  // Role-specific cards
  const studentCards = [
    {
      title: "Class Schedule",
      description: "View your daily classes with room locations and timings.",
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
      linkText: "View Schedule",
      linkPath: "/schedule"
    },
    {
      title: "Study Rooms",
      description: "Book group study rooms and collaborative spaces.",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      linkText: "Book Room",
      linkPath: "/study-rooms"
    },
    {
      title: "QR Check-in",
      description: "Scan QR codes for quick classroom attendance.",
      icon: <School className="h-5 w-5 text-blue-500" />,
      linkText: "Scan QR",
      linkPath: "/qr-checkin"
    },
    {
      title: "Library Services",
      description: "Access digital resources and library information.",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      linkText: "Access Library",
      linkPath: "/library"
    },
    {
      title: "My Projects",
      description: "Showcase and manage your academic projects.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "View Projects",
      linkPath: "/projects"
    },
    {
      title: "Service Issues",
      description: "Report problems or give feedback on campus services.",
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
      linkText: "Report Issue",
      linkPath: "/service-issues"
    }
  ];

  const teacherCards = [
    {
      title: "Attendance",
      description: "Take and manage digital attendance for your classes.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "Take Attendance",
      linkPath: "/attendance"
    },
    {
      title: "Announcements",
      description: "Post urgent class announcements and updates.",
      icon: <Bell className="h-5 w-5 text-blue-500" />,
      linkText: "Post Announcement",
      linkPath: "/announcements"
    },
    {
      title: "Resources",
      description: "Share lecture slides and learning materials.",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      linkText: "Manage Resources",
      linkPath: "/resources"
    },
    {
      title: "Equipment",
      description: "Reserve projectors, laptops, and other equipment.",
      icon: <School className="h-5 w-5 text-blue-500" />,
      linkText: "Reserve Equipment",
      linkPath: "/equipment"
    },
    {
      title: "Gradebook",
      description: "Manage student grades and assessment records.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "Open Gradebook",
      linkPath: "/gradebook"
    },
    {
      title: "Classroom Supplies",
      description: "Track donations and manage classroom supplies.",
      icon: <User className="h-5 w-5 text-blue-500" />,
      linkText: "Manage Supplies",
      linkPath: "/supplies"
    }
  ];

  const parentCards = [
    {
      title: "Attendance Records",
      description: "Check your child's attendance records.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "View Attendance",
      linkPath: "/attendance-records"
    },
    {
      title: "Progress Reports",
      description: "View automated progress reports and grades.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "View Reports",
      linkPath: "/progress"
    },
    {
      title: "Newsletters",
      description: "Access archived school newsletters.",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      linkText: "Read Newsletters",
      linkPath: "/newsletters"
    },
    {
      title: "Video Conferences",
      description: "Schedule video conferences with teachers.",
      icon: <User className="h-5 w-5 text-blue-500" />,
      linkText: "Schedule Meeting",
      linkPath: "/conference"
    }
  ];

  // Combine role-specific cards with common cards
  const getDashboardCards = () => {
    let roleSpecificCards;
    
    switch (userRole) {
      case 'student':
        roleSpecificCards = studentCards;
        break;
      case 'teacher':
        roleSpecificCards = teacherCards;
        break;
      case 'parent':
        roleSpecificCards = parentCards;
        break;
      default:
        roleSpecificCards = [];
    }
    
    // Combine role-specific cards with common cards
    return [...roleSpecificCards, ...commonCards];
  };

  const getUserTypeText = () => {
    switch (userRole) {
      case 'student':
        return "Student Dashboard";
      case 'teacher':
        return "Teacher Dashboard";
      case 'parent':
        return "Parent Dashboard";
      default:
        return "Dashboard";
    }
  };

  const dashboardCards = getDashboardCards();

  return (
    <>
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-edu-primary">
        <h1 className="text-3xl font-bold">{getUserTypeText()}</h1>
        <p className="text-gray-500 mt-1">
          {user 
            ? `Welcome back, ${user.name}!` 
            : 'Welcome to EduConnect! Please log in to access personalized features.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            linkText={card.linkText}
            linkPath={card.linkPath}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
