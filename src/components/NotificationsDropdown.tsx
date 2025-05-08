
import React from 'react';
import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Exam Schedule Posted',
    message: 'Final exam schedule has been published',
    time: '10 min ago',
    read: false,
  },
  {
    id: '2',
    title: 'Assignment Due',
    message: 'Mathematics assignment due tonight',
    time: '1 hour ago',
    read: false,
  },
  {
    id: '3',
    title: 'Report Cards',
    message: 'Report cards will be distributed next week',
    time: '2 hours ago',
    read: false,
  },
];

export const NotificationsDropdown: React.FC = () => {
  const unreadCount = mockNotifications.filter(n => !n.read).length;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative p-1 rounded-full hover:bg-gray-100 flex items-center justify-center">
          <Bell className="h-6 w-6 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
              {unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="font-normal">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Notifications</h3>
            <Badge variant="outline" className="text-xs">
              {unreadCount} new
            </Badge>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {mockNotifications.length > 0 ? (
          mockNotifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="cursor-pointer p-0">
              <div className={`w-full px-3 py-2 ${!notification.read ? 'bg-blue-50' : ''}`}>
                <div className="flex justify-between items-start">
                  <span className="font-medium">{notification.title}</span>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              </div>
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuItem disabled className="text-center py-6">
            <p className="text-gray-500 text-sm">No notifications</p>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer flex justify-center">
          <p className="text-blue-600 text-sm font-medium">View all notifications</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
