
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();
  
  const events = [
    {
      id: 1,
      title: "Math Quiz",
      date: new Date(2025, 4, 8, 10, 0),
      location: "Room 203",
      category: "Academic",
      description: "Quiz on algebraic expressions and equations",
    },
    {
      id: 2,
      title: "Science Lab",
      date: new Date(2025, 4, 8, 14, 30),
      location: "Science Lab 1",
      category: "Academic",
      description: "Physics lab experiment on motion and gravity",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: new Date(2025, 4, 10, 18, 0),
      location: "Multi-purpose Hall",
      category: "Meeting",
      description: "Quarterly progress review meeting with parents",
    },
    {
      id: 5,
      title: "Art Exhibition",
      date: new Date(2025, 4, 15, 13, 0),
      location: "Art Center",
      category: "Event",
      description: "Student art showcase and exhibition",
    }
  ];
  
  // Notifications data
  const notifications = [
    {
      id: 1,
      title: "Math Quiz Tomorrow",
      description: "Reminder: Math quiz scheduled for tomorrow at 10:00 AM",
      time: "5 minutes ago"
    },
    {
      id: 2,
      title: "Science Lab Materials",
      description: "Please bring your lab manual for today's science lab",
      time: "2 hours ago"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      description: "Your parent-teacher meeting has been scheduled for May 10th",
      time: "Yesterday"
    }
  ];
  
  // Function to handle marking a notification as read
  const markAsRead = (id: number) => {
    toast({
      title: "Notification marked as read",
      description: `Notification #${id} has been marked as read`,
    });
  };
  
  // Filter events for the selected date
  const selectedDateEvents = events.filter(
    event => 
      date && 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
  );
  
  // Get all event dates for styling in the calendar
  const getEventDates = () => {
    return events.map(event => 
      new Date(event.date.getFullYear(), event.date.getMonth(), event.date.getDate())
    );
  };
  
  // Custom day rendering function for highlighting event dates
  const modifiersStyles = {
    event: { 
      fontWeight: 'bold',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 0.5)'
    }
  };
  
  // Custom day renderer
  const modifiers = {
    event: getEventDates()
  };
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Academic":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Meeting":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Event":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">School Calendar</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your academic and extracurricular events
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                {notifications.length}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <div className="p-2 font-medium border-b">Notifications</div>
            <div className="max-h-80 overflow-auto">
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="p-0">
                  <div className="p-3 w-full border-b border-gray-100 hover:bg-gray-50 cursor-pointer" onClick={() => markAsRead(notification.id)}>
                    <div className="font-medium">{notification.title}</div>
                    <div className="text-sm text-gray-500 mt-1">{notification.description}</div>
                    <div className="text-xs text-gray-400 mt-1">{notification.time}</div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <div className="p-2 text-center border-t">
              <Button variant="ghost" size="sm" className="w-full">
                Mark all as read
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
            />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              {date ? date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No Date Selected'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No events scheduled for this date.
              </div>
            ) : (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="border rounded-lg p-4 transition-colors hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{formatTime(event.date)}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events
              .sort((a, b) => a.date.getTime() - b.date.getTime())
              .slice(0, 3)
              .map((event) => (
                <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg border transition-colors hover:bg-gray-50">
                  <div className="bg-gray-100 p-2 rounded-lg text-center min-w-[60px]">
                    <span className="block text-sm font-medium">
                      {event.date.toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="block text-xl font-bold">
                      {event.date.getDate()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{formatTime(event.date)}</span>
                      <span>•</span>
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                </div>
              ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Button variant="outline">View All Events</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar;
