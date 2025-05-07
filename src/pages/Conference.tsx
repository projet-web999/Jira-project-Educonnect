import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarIcon, Clock, Plus, User, Users, Video } from "lucide-react";

const Conference = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const upcomingConferences = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      date: new Date(2025, 4, 15, 14, 0), // May 15, 2025, 2:00 PM
      duration: "30 minutes",
      teacher: "Ms. Elizabeth Taylor",
      subject: "English Literature",
      status: "Scheduled",
      link: "https://example.com/meet/123456"
    },
    {
      id: 2,
      title: "Math Progress Review",
      date: new Date(2025, 4, 16, 16, 30), // May 16, 2025, 4:30 PM
      duration: "20 minutes",
      teacher: "Dr. Sarah Johnson",
      subject: "Mathematics",
      status: "Scheduled",
      link: "https://example.com/meet/789012"
    }
  ];
  
  const pastConferences = [
    {
      id: 3,
      title: "Science Project Discussion",
      date: new Date(2025, 4, 1, 15, 0), // May 1, 2025, 3:00 PM
      duration: "25 minutes",
      teacher: "Mr. Robert Chen",
      subject: "Science",
      status: "Completed",
      recording: true
    },
    {
      id: 4,
      title: "Quarterly Progress Review",
      date: new Date(2025, 3, 20, 13, 15), // April 20, 2025, 1:15 PM
      duration: "45 minutes",
      teacher: "Multiple Teachers",
      subject: "General",
      status: "Completed",
      recording: true
    },
    {
      id: 5,
      title: "History Project Feedback",
      date: new Date(2025, 3, 10, 11, 0), // April 10, 2025, 11:00 AM
      duration: "20 minutes",
      teacher: "Dr. Michael Brown",
      subject: "History",
      status: "Completed",
      recording: false
    }
  ];
  
  const availableSlots = [
    {
      id: 6,
      teacher: "Ms. Elizabeth Taylor",
      subject: "English Literature",
      slots: [
        { id: "et-1", time: "May 20, 2025 - 2:00 PM", duration: "20 minutes" },
        { id: "et-2", time: "May 20, 2025 - 2:30 PM", duration: "20 minutes" },
        { id: "et-3", time: "May 22, 2025 - 3:00 PM", duration: "20 minutes" }
      ]
    },
    {
      id: 7,
      teacher: "Dr. Sarah Johnson",
      subject: "Mathematics",
      slots: [
        { id: "sj-1", time: "May 21, 2025 - 1:00 PM", duration: "30 minutes" },
        { id: "sj-2", time: "May 23, 2025 - 2:00 PM", duration: "30 minutes" }
      ]
    },
    {
      id: 8,
      teacher: "Mr. Robert Chen",
      subject: "Science",
      slots: [
        { id: "rc-1", time: "May 19, 2025 - 4:00 PM", duration: "25 minutes" },
        { id: "rc-2", time: "May 24, 2025 - 10:00 AM", duration: "25 minutes" }
      ]
    }
  ];
  
  const formatDateTime = (date: Date) => {
    return date.toLocaleString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Scheduled":
        return "bg-green-100 text-green-800 border-green-200";
      case "Completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  // Get conference dates for calendar highlighting
  const getConferenceDates = () => {
    const dates = [...upcomingConferences, ...pastConferences].map(conference => 
      new Date(conference.date.getFullYear(), conference.date.getMonth(), conference.date.getDate())
    );
    return dates;
  };
  
  // Custom modifiers for calendar
  const modifiersStyles = {
    conference: { 
      fontWeight: 'bold',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 0.5)'
    }
  };
  
  const modifiers = {
    conference: getConferenceDates()
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Video Conferences</h1>
        <p className="text-muted-foreground mt-2">
          Schedule and join virtual meetings with teachers
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Conference Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={modifiers}
              modifiersStyles={modifiersStyles}
            />
            <Button className="w-full mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Schedule New Meeting
            </Button>
          </CardContent>
        </Card>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="upcoming">
            <TabsList className="grid grid-cols-3 w-full sm:w-auto">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="available">Available Slots</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="space-y-4 mt-4">
              <h2 className="text-xl font-semibold">Upcoming Conferences</h2>
              
              {upcomingConferences.length > 0 ? (
                <div className="space-y-4">
                  {upcomingConferences.map(conference => (
                    <Card key={conference.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{conference.title}</CardTitle>
                            <div className="text-sm text-gray-500 mt-1">with {conference.teacher}</div>
                          </div>
                          <Badge variant="outline" className={getStatusColor(conference.status)}>
                            {conference.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{formatDateTime(conference.date)}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{conference.duration}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-2">
                              <User className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{conference.teacher}</span>
                            </div>
                            <div className="flex items-center">
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                                {conference.subject}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex gap-2 w-full">
                          <Button className="flex-1">
                            <Video className="h-4 w-4 mr-2" />
                            Join Meeting
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Reschedule
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 border rounded-lg">
                  <Video className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <h3 className="text-lg font-medium">No Upcoming Conferences</h3>
                  <p className="text-gray-500">
                    You don't have any scheduled conferences. Book a time slot with a teacher.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="space-y-4 mt-4">
              <h2 className="text-xl font-semibold">Past Conferences</h2>
              
              {pastConferences.length > 0 ? (
                <div className="space-y-4">
                  {pastConferences.map(conference => (
                    <Card key={conference.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{conference.title}</CardTitle>
                            <div className="text-sm text-gray-500 mt-1">with {conference.teacher}</div>
                          </div>
                          <Badge variant="outline" className={getStatusColor(conference.status)}>
                            {conference.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <CalendarIcon className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{formatDateTime(conference.date)}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{conference.duration}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center mb-2">
                              <User className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{conference.teacher}</span>
                            </div>
                            <div className="flex items-center">
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                                {conference.subject}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant={conference.recording ? "default" : "outline"} 
                          className="w-full" 
                          disabled={!conference.recording}
                        >
                          {conference.recording ? "View Recording" : "No Recording Available"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 border rounded-lg">
                  <Video className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <h3 className="text-lg font-medium">No Past Conferences</h3>
                  <p className="text-gray-500">
                    You don't have any past conferences on record.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="available" className="space-y-4 mt-4">
              <h2 className="text-xl font-semibold">Available Time Slots</h2>
              
              {availableSlots.map(teacher => (
                <Card key={teacher.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{teacher.teacher}</CardTitle>
                        <div className="text-sm text-gray-500 mt-1">{teacher.subject} Teacher</div>
                      </div>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                        {teacher.subject}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      {teacher.slots.map(slot => (
                        <div key={slot.id} className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50">
                          <div>
                            <div className="font-medium">{slot.time}</div>
                            <div className="text-sm text-gray-500">{slot.duration}</div>
                          </div>
                          <Button size="sm">Book Slot</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Users className="h-4 w-4 mr-2" />
                      View Teacher Schedule
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Conference;
