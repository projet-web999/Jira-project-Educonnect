
import React, { useState } from 'react';
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
  FileText,
  LogOut,
  Settings,
  ChevronRight,
  X
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
import { Badge } from '@/components/ui/badge';

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

  // Helper function to check if a link is active
  const isLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Navigation Bar - Fixed at top */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b shadow-sm fixed top-0 left-0 right-0 z-30">
        <button 
          onClick={toggleSidebar} 
          className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="flex items-center">
          <School className="h-7 w-7 text-edu-primary mr-2" />
          <span className="font-semibold text-xl">EduConnect</span>
        </Link>
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full">
                <Avatar>
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback className="bg-edu-primary text-white">{user?.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span>{user?.name}</span>
                  <span className="text-xs text-gray-500">{user?.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link to="/login">
            <Button variant="ghost" size="sm">Login</Button>
          </Link>
        )}
      </div>

      {/* Sidebar Navigation (Mobile) - Absolute positioned */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} 
        onClick={toggleSidebar}
      ></div>
      <div className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 lg:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
        <div className="p-4 border-b flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={toggleSidebar}>
            <School className="h-6 w-6 text-edu-primary mr-2" />
            <span className="font-semibold text-lg">EduConnect</span>
          </Link>
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {isAuthenticated && (
          <div className="p-4 border-b bg-gray-50">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-edu-primary text-white">{user?.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium text-sm">{user?.name}</p>
                <p className="text-xs text-gray-500">{userRole}</p>
              </div>
            </div>
          </div>
        )}
        
        <nav className="mt-4">
          {isAuthenticated && (
            <div className="px-4 mb-2">
              <Link
                to="/"
                className={`flex items-center p-2.5 rounded-lg ${isLinkActive('/') 
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-100'
                  }`}
                onClick={toggleSidebar}
              >
                <div className="bg-blue-100 rounded-md p-1.5">
                  <School className="h-4 w-4 text-blue-700" />
                </div>
                <span className="ml-3 font-medium">Dashboard</span>
              </Link>
            </div>
          )}
          
          <div className="px-3 mt-4 mb-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
              Menu
            </h3>
          </div>
          
          <ul className="space-y-2 px-3">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center p-2.5 rounded-lg ${isLinkActive(link.path) 
                    ? 'bg-blue-50 text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  onClick={toggleSidebar}
                >
                  <div className={`rounded-md p-1.5 ${isLinkActive(link.path) ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    {React.cloneElement(link.icon, { 
                      className: `h-4 w-4 ${isLinkActive(link.path) ? 'text-blue-700' : 'text-gray-600'}` 
                    })}
                  </div>
                  <span className="ml-3">{link.name}</span>
                  {link.path === '/emergency' && (
                    <Badge variant="outline" className="ml-auto text-xs bg-red-50 text-red-700 border-red-200">
                      Important
                    </Badge>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          {isAuthenticated && (
            <div className="px-3 mt-6 pt-4 border-t mx-3">
              <button
                onClick={logout}
                className="flex items-center p-2.5 rounded-lg w-full text-left text-red-600 hover:bg-red-50"
              >
                <div className="bg-red-100 rounded-md p-1.5">
                  <LogOut className="h-4 w-4 text-red-700" />
                </div>
                <span className="ml-3">Logout</span>
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block fixed left-0 top-0 w-64 h-full bg-white border-r shadow-sm z-20">
        {/* App Logo */}
        <div className="p-4 border-b flex items-center">
          <School className="h-7 w-7 text-edu-primary mr-2" />
          <Link to="/" className="font-semibold text-lg">EduConnect</Link>
        </div>
        
        {/* User Profile */}
        {isAuthenticated && (
          <div className="p-4 border-b bg-gray-50">
            <div className="flex items-center">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-edu-primary text-white">{user?.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="font-medium text-sm">{user?.name}</p>
                <p className="text-xs text-gray-500 capitalize">{userRole}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Navigation Links */}
        <nav className="mt-4 flex-1 overflow-y-auto h-[calc(100%-170px)]">
          {isAuthenticated && (
            <div className="px-4 mb-2">
              <Link
                to="/"
                className={`flex items-center p-2.5 rounded-lg ${isLinkActive('/') 
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-100'
                  }`}
              >
                <div className="bg-blue-100 rounded-md p-1.5">
                  <School className="h-4 w-4 text-blue-700" />
                </div>
                <span className="ml-3 font-medium">Dashboard</span>
              </Link>
            </div>
          )}
          
          <div className="px-3 mt-4 mb-1">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
              Navigation
            </h3>
          </div>
          
          <ul className="space-y-1 px-3">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center p-2.5 rounded-lg group transition-colors ${isLinkActive(link.path) 
                    ? 'bg-blue-50 text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                    }`}
                >
                  <div className={`rounded-md p-1.5 transition-colors ${isLinkActive(link.path) ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-50'}`}>
                    {React.cloneElement(link.icon, { 
                      className: `h-4 w-4 transition-colors ${isLinkActive(link.path) ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'}` 
                    })}
                  </div>
                  <span className="ml-3">{link.name}</span>
                  {link.path === '/emergency' && (
                    <Badge variant="outline" className="ml-auto text-xs bg-red-50 text-red-700 border-red-200">
                      Important
                    </Badge>
                  )}
                  {!isLinkActive(link.path) && (
                    <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-gray-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Footer with Settings/Logout */}
        {isAuthenticated && (
          <div className="px-3 py-4 border-t absolute bottom-0 left-0 right-0 bg-white">
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 text-xs"
                onClick={() => {}}
              >
                <Settings className="h-3 w-3 mr-1" />
                Settings
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 text-xs text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50"
                onClick={logout}
              >
                <LogOut className="h-3 w-3 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Top Navigation Bar (Desktop) - Fixed at top */}
      <div className="hidden lg:flex fixed top-0 left-64 right-0 h-16 border-b items-center justify-between px-6 bg-white z-10">
        <div className="flex-1 flex items-center">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="relative p-1 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">3</span>
            </button>
          </div>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-full pr-2 pl-1 py-1 transition-colors">
                  <Avatar>
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback className="bg-edu-primary text-white">{user?.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm">{user?.name}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>{user?.name}</span>
                    <span className="text-xs text-gray-500">{user?.email}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
