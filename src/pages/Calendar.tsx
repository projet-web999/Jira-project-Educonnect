
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
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
      id: 3,
      title: "Basketball Practice",
      date: new Date(2025, 4, 9, 16, 0),
      location: "Gymnasium",
      category: "Sports",
      description: "Regular team practice and drills",
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
  
  // Filter events for the selected date
  const selectedDateEvents = events.filter(
    event => 
      date && 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
  );
  
  const getEventDates = () => {
    return events.map(event => 
      new Date(event.date.getFullYear(), event.date.getMonth(), event.date.getDate())
    );
  };
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Academic":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Sports":
        return "bg-green-100 text-green-800 border-green-200";
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
      <div>
        <h1 className="text-3xl font-bold tracking-tight">School Calendar</h1>
        <p className="text-muted-foreground mt-2">
          View and manage your academic and extracurricular events
        </p>
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
              highlightedDates={getEventDates()}
            />
            <Button className="w-full mt-4" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Set Reminder
            </Button>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              {date ? (
                <>Events for {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</>
              ) : (
                <>Select a date to view events</>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map(event => (
                  <div
                    key={event.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{event.title}</h3>
                      <Badge variant="outline" className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {formatTime(event.date)}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-center">
                <CalendarIcon className="h-12 w-12 text-gray-300 mb-2" />
                <p className="text-gray-500 mb-1">No events scheduled for this day</p>
                <p className="text-sm text-gray-400">Select another date or create a new event</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
