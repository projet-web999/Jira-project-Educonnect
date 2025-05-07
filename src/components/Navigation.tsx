
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Calendar,
  BookOpen,
  MapPin,
  User,
  Bell,
  MessageSquare,
  Menu,
  Search,
  School,
  FileText
} from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, isAuthenticated, logout, userRole } = useAuth();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Common links for all user roles
  const commonLinks = [
    { name: 'Campus Map', path: '/map', icon: <MapPin className="h-5 w-5" /> },
    { name: 'Emergency Contacts', path: '/emergency', icon: <Bell className="h-5 w-5" /> },
    { name: 'Calendar', path: '/calendar', icon: <Calendar className="h-5 w-5" /> },
    { name: 'Cafeteria Menu', path: '/cafeteria-menu', icon: <Menu className="h-5 w-5" /> },
  ];

  const studentLinks = [
    { name: 'Schedule', path: '/schedule', icon: <Calendar className="h-5 w-5" /> },
    { name: 'Study Rooms', path: '/study-rooms', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Library', path: '/library', icon: <School className="h-5 w-5" /> },
    { name: 'Projects', path: '/projects', icon: <FileText className="h-5 w-5" /> },
    { name: 'Service Issues', path: '/service-issues', icon: <MessageSquare className="h-5 w-5" /> },
  ];

  const teacherLinks = [
    { name: 'Attendance', path: '/attendance', icon: <FileText className="h-5 w-5" /> },
    { name: 'Announcements', path: '/announcements', icon: <Bell className="h-5 w-5" /> },
    { name: 'Resources', path: '/resources', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Gradebook', path: '/gradebook', icon: <School className="h-5 w-5" /> },
    { name: 'Supplies', path: '/supplies', icon: <Menu className="h-5 w-5" /> },
  ];

  const parentLinks = [
    { name: 'Attendance Records', path: '/attendance-records', icon: <FileText className="h-5 w-5" /> },
    { name: 'Progress Reports', path: '/progress', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Newsletters', path: '/newsletters', icon: <MessageSquare className="h-5 w-5" /> },
    { name: 'Conference', path: '/conference', icon: <User className="h-5 w-5" /> },
  ];

  // Get role-specific links and combine with common links
  const getLinksByRole = () => {
    let roleSpecificLinks;
    
    switch (userRole) {
      case 'student':
        roleSpecificLinks = studentLinks;
        break;
      case 'teacher':
        roleSpecificLinks = teacherLinks;
        break;
      case 'parent':
        roleSpecificLinks = parentLinks;
        break;
      default:
        roleSpecificLinks = [];
    }
    
    return [...roleSpecificLinks, ...commonLinks];
  };

  const links = getLinksByRole();

  return (
    <>
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b shadow-sm">
        <button onClick={toggleSidebar} className="text-gray-600">
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="flex items-center">
          <School className="h-7 w-7 text-edu-primary mr-2" />
          <span className="font-semibold text-xl">EduConnect</span>
        </Link>
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user?.avatar} />
                <AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
        )}
      </div>

      {/* Sidebar Navigation (Mobile) */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      <div className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <School className="h-6 w-6 text-edu-primary mr-2" />
              <span className="font-semibold text-lg">EduConnect</span>
            </Link>
            <button onClick={toggleSidebar} className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2 px-4">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center p-2.5 rounded-lg ${location.pathname === link.path
                    ? 'bg-edu-primary text-white'
                    : 'hover:bg-gray-100'
                    }`}
                  onClick={toggleSidebar}
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex h-screen">
        {/* Sidebar */}
        <div className="w-64 border-r bg-white shadow-sm">
          <div className="p-4 border-b flex items-center">
            <School className="h-6 w-6 text-edu-primary mr-2" />
            <Link to="/" className="font-semibold text-lg">EduConnect</Link>
          </div>
          <nav className="mt-4">
            <ul className="space-y-2 px-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center p-2.5 rounded-lg ${location.pathname === link.path
                      ? 'bg-edu-primary text-white'
                      : 'hover:bg-gray-100'
                      }`}
                  >
                    {link.icon}
                    <span className="ml-3">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Top Bar */}
          <div className="h-16 border-b flex items-center justify-between px-4 bg-white">
            <div className="flex-1 flex items-center">
              <div className="relative w-64 mr-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-edu-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="notification-badge">3</span>
              </button>

              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src={user?.avatar} />
                        <AvatarFallback>{user?.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user?.name}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </div>
          </div>

          {/* Page Content */}
          <div className="flex-1 p-6 bg-gray-50"></div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
