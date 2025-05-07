
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, BookOpen, MapPin, User, Bell, FileText, School, MessageSquare, Menu, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';

const DashboardCard = ({ 
  title, 
  description, 
  icon, 
  linkText, 
  linkPath,
  badge,
  color = 'blue'
}: { 
  title: string; 
  description: string; 
  icon: JSX.Element; 
  linkText: string; 
  linkPath: string;
  badge?: string;
  color?: 'blue' | 'amber' | 'green' | 'purple' | 'red';
}) => {
  const colorClasses = {
    blue: {
      border: 'border-t-blue-500',
      bg: 'from-blue-50 to-blue-100',
      hover: 'hover:border-blue-600',
      text: 'text-blue-800'
    },
    amber: {
      border: 'border-t-amber-500',
      bg: 'from-amber-50 to-amber-100',
      hover: 'hover:border-amber-600',
      text: 'text-amber-800'
    },
    green: {
      border: 'border-t-green-500',
      bg: 'from-green-50 to-green-100',
      hover: 'hover:border-green-600',
      text: 'text-green-800'
    },
    purple: {
      border: 'border-t-purple-500',
      bg: 'from-purple-50 to-purple-100',
      hover: 'hover:border-purple-600',
      text: 'text-purple-800'
    },
    red: {
      border: 'border-t-red-500',
      bg: 'from-red-50 to-red-100',
      hover: 'hover:border-red-600',
      text: 'text-red-800'
    }
  };

  return (
    <Card className={`hover:shadow-lg transition-all bg-white border-t-4 ${colorClasses[color].border} ${colorClasses[color].hover}`}>
      <CardHeader className={`pb-2 space-y-0 bg-gradient-to-r ${colorClasses[color].bg}`}>
        <div className="flex justify-between items-start">
          <CardTitle className={`text-lg font-medium ${colorClasses[color].text}`}>{title}</CardTitle>
          <div className="p-2 bg-white bg-opacity-70 rounded-md shadow-sm">
            {icon}
          </div>
        </div>
        {badge && (
          <Badge className="mt-1 w-fit" variant="outline">{badge}</Badge>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-gray-600">{description}</p>
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
};

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
      linkPath: "/map",
      color: 'blue' as const
    },
    {
      title: "Emergency Contacts",
      description: "Access important campus emergency contacts.",
      icon: <Bell className="h-5 w-5 text-red-500" />,
      linkText: "View Contacts",
      linkPath: "/emergency",
      badge: "Important",
      color: 'red' as const
    },
    {
      title: "Event Calendar",
      description: "Browse upcoming school events and activities.",
      icon: <Calendar className="h-5 w-5 text-purple-500" />,
      linkText: "View Calendar",
      linkPath: "/calendar",
      color: 'purple' as const
    },
    {
      title: "Cafeteria Menu",
      description: "Check daily and weekly cafeteria menus.",
      icon: <Menu className="h-5 w-5 text-green-500" />,
      linkText: "View Menu",
      linkPath: "/cafeteria-menu",
      badge: "Today's Special",
      color: 'green' as const
    },
  ];

  // Role-specific cards
  const studentCards = [
    {
      title: "Class Schedule",
      description: "View your daily classes with room locations and timings.",
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
      linkText: "View Schedule",
      linkPath: "/schedule",
      badge: "Today: 4 Classes",
      color: 'blue' as const
    },
    {
      title: "Study Rooms",
      description: "Book group study rooms and collaborative spaces.",
      icon: <BookOpen className="h-5 w-5 text-amber-500" />,
      linkText: "Book Room",
      linkPath: "/study-rooms",
      color: 'amber' as const
    },
    {
      title: "QR Check-in",
      description: "Scan QR codes for quick classroom attendance.",
      icon: <School className="h-5 w-5 text-green-500" />,
      linkText: "Scan QR",
      linkPath: "/qr-checkin",
      color: 'green' as const
    },
    {
      title: "Library Services",
      description: "Access digital resources and library information.",
      icon: <BookOpen className="h-5 w-5 text-purple-500" />,
      linkText: "Access Library",
      linkPath: "/library",
      color: 'purple' as const
    },
    {
      title: "My Projects",
      description: "Showcase and manage your academic projects.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "View Projects",
      linkPath: "/projects",
      badge: "2 Due Soon",
      color: 'blue' as const
    },
    {
      title: "Service Issues",
      description: "Report problems or give feedback on campus services.",
      icon: <MessageSquare className="h-5 w-5 text-red-500" />,
      linkText: "Report Issue",
      linkPath: "/service-issues",
      color: 'red' as const
    }
  ];

  const teacherCards = [
    {
      title: "Attendance",
      description: "Take and manage digital attendance for your classes.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "Take Attendance",
      linkPath: "/attendance",
      badge: "Next Class: 10:30 AM",
      color: 'blue' as const
    },
    {
      title: "Announcements",
      description: "Post urgent class announcements and updates.",
      icon: <Bell className="h-5 w-5 text-amber-500" />,
      linkText: "Post Announcement",
      linkPath: "/announcements",
      color: 'amber' as const
    },
    {
      title: "Resources",
      description: "Share lecture slides and learning materials.",
      icon: <BookOpen className="h-5 w-5 text-green-500" />,
      linkText: "Manage Resources",
      linkPath: "/resources",
      color: 'green' as const
    },
    {
      title: "Equipment",
      description: "Reserve projectors, laptops, and other equipment.",
      icon: <School className="h-5 w-5 text-purple-500" />,
      linkText: "Reserve Equipment",
      linkPath: "/equipment",
      color: 'purple' as const
    },
    {
      title: "Gradebook",
      description: "Manage student grades and assessment records.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "Open Gradebook",
      linkPath: "/gradebook",
      badge: "20 Pending Reviews",
      color: 'blue' as const
    },
    {
      title: "Classroom Supplies",
      description: "Track donations and manage classroom supplies.",
      icon: <User className="h-5 w-5 text-amber-500" />,
      linkText: "Manage Supplies",
      linkPath: "/supplies",
      color: 'amber' as const
    }
  ];

  const parentCards = [
    {
      title: "Attendance Records",
      description: "Check your child's attendance records.",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      linkText: "View Attendance",
      linkPath: "/attendance-records",
      badge: "96% Attendance Rate",
      color: 'blue' as const
    },
    {
      title: "Progress Reports",
      description: "View automated progress reports and grades.",
      icon: <FileText className="h-5 w-5 text-green-500" />,
      linkText: "View Reports",
      linkPath: "/progress",
      badge: "New Report Available",
      color: 'green' as const
    },
    {
      title: "Newsletters",
      description: "Access archived school newsletters.",
      icon: <BookOpen className="h-5 w-5 text-amber-500" />,
      linkText: "Read Newsletters",
      linkPath: "/newsletters",
      color: 'amber' as const
    },
    {
      title: "Video Conferences",
      description: "Schedule video conferences with teachers.",
      icon: <User className="h-5 w-5 text-purple-500" />,
      linkText: "Schedule Meeting",
      linkPath: "/conference",
      color: 'purple' as const
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
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-xl shadow-sm border border-blue-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">{getUserTypeText()}</h1>
            <p className="text-blue-600 mt-1">
              {user 
                ? `Welcome back, ${user.name}!` 
                : 'Welcome to EduConnect! Please log in to access personalized features.'}
            </p>
          </div>
          
          {user && (
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="hidden md:block bg-white bg-opacity-70 px-3 py-2 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                  </span>
                </div>
              </div>
              <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 border">
                <Bell className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Notifications</span>
                <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-white bg-red-500 rounded-full">
                  3
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {user && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-800">Today's Classes</p>
                <p className="text-2xl font-bold text-blue-900">4</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-800">Assignments</p>
                <p className="text-2xl font-bold text-green-900">2</p>
              </div>
              <FileText className="h-8 w-8 text-green-500" />
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-amber-800">Events</p>
                <p className="text-2xl font-bold text-amber-900">1</p>
              </div>
              <Bell className="h-8 w-8 text-amber-500" />
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-800">Messages</p>
                <p className="text-2xl font-bold text-purple-900">5</p>
              </div>
              <MessageSquare className="h-8 w-8 text-purple-500" />
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            linkText={card.linkText}
            linkPath={card.linkPath}
            badge={card.badge}
            color={card.color}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
