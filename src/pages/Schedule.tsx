
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, User, Calendar, Bell } from 'lucide-react';
import { scheduleData } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Schedule = () => {
  const [currentDay, setCurrentDay] = useState('Monday');
  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const filteredSchedule = scheduleData.filter(item => item.day === currentDay);

  // Helper functions to determine class timing status
  const isCurrentClass = (item: any) => {
    // In a real app, this would compare with current time
    return item.id === 'math-monday'; // Mock current class
  };
  
  const isUpcoming = (item: any) => {
    // In a real app, this would check if class is starting soon
    return item.id === 'english-monday'; // Mock upcoming class
  };
  
  // Function to get border color class based on subject
  const getBorderClass = (subject: string) => {
    const subjectMap: {[key: string]: string} = {
      'Mathematics': 'border-blue-500',
      'Physics': 'border-purple-500',
      'English': 'border-green-500',
      'History': 'border-amber-500',
      'Chemistry': 'border-red-500',
      'Biology': 'border-emerald-500',
      'Computer Science': 'border-cyan-500'
    };
    
    return subjectMap[subject] || 'border-gray-300';
  };

  return (
    <>
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-800">Class Schedule</h1>
        <p className="text-blue-600 mt-1 flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          Your personalized weekly schedule with locations and times
        </p>
      </div>

      <Card className="mb-6 overflow-hidden border-t-4 border-t-blue-500 shadow-md">
        <CardHeader className="pb-3 bg-gradient-to-r from-blue-50 to-blue-100">
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-blue-700" />
            Schedule for {currentDay}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="Monday" onValueChange={setCurrentDay} className="w-full">
            <div className="bg-gray-50 border-b">
              <TabsList className="w-full justify-start p-0 h-auto bg-transparent">
                {daysOfWeek.map(day => (
                  <TabsTrigger 
                    key={day} 
                    value={day} 
                    className={`px-6 py-3 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:shadow-none rounded-none`}
                  >
                    {day}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {daysOfWeek.map(day => (
              <TabsContent key={day} value={day} className="p-0 m-0">
                <div className="p-4">
                  {filteredSchedule.length > 0 ? (
                    filteredSchedule.map((item, index) => (
                      <div 
                        key={item.id} 
                        className={`schedule-item mb-4 p-4 rounded-lg border border-l-4 ${getBorderClass(item.subject)} bg-white hover:shadow-md transition-shadow`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg flex items-center">
                              {item.subject}
                              {isCurrentClass(item) && (
                                <Badge className="ml-2 bg-green-500">Current</Badge>
                              )}
                              {isUpcoming(item) && (
                                <Badge className="ml-2 bg-amber-500">Up Next</Badge>
                              )}
                            </h3>
                            <div className="flex items-center text-gray-600 mt-1">
                              <User className="h-4 w-4 mr-1" />
                              <span className="text-sm">{item.teacher}</span>
                            </div>
                            <div className="mt-2 flex items-start space-x-3">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="text-xs flex items-center"
                              >
                                Class Material
                              </Button>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end text-gray-600 bg-blue-50 px-2 py-1 rounded-md">
                              <Clock className="h-4 w-4 mr-1 text-blue-700" />
                              <span className="text-sm font-medium">{item.time}</span>
                            </div>
                            <div className="flex items-center justify-end text-gray-600 mt-2">
                              <MapPin className="h-4 w-4 mr-1 text-red-500" />
                              <span className="text-sm">{item.location}</span>
                            </div>
                            <div className="mt-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-xs"
                              >
                                View on Map
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500 font-medium">No classes scheduled for {day}</p>
                      <p className="text-gray-400 text-sm mt-1">Enjoy your free day!</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden border-t-4 border-t-amber-500 shadow-md">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-amber-700" />
              Upcoming Tests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-3">
              <li className="p-4 border rounded-lg bg-amber-50 border-amber-200 flex items-center justify-between">
                <div>
                  <div className="font-medium text-amber-900">Physics Quiz: Thermodynamics</div>
                  <div className="text-sm text-amber-700 flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    Tomorrow, 9:30 AM
                  </div>
                  <div className="text-xs text-amber-600 mt-1">Room 203</div>
                </div>
                <Badge className="bg-red-500">High Priority</Badge>
              </li>
              <li className="p-4 border rounded-lg bg-white border-gray-200 flex items-center justify-between">
                <div>
                  <div className="font-medium">Math Midterm: Calculus</div>
                  <div className="text-sm text-gray-600 flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    Friday, 8:30 AM
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Main Hall</div>
                </div>
                <Badge className="bg-amber-500">Medium Priority</Badge>
              </li>
              <li className="p-4 border rounded-lg bg-white border-gray-200 flex items-center justify-between">
                <div>
                  <div className="font-medium">English Essay Deadline</div>
                  <div className="text-sm text-gray-600 flex items-center mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    Next Monday, 11:59 PM
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Submit Online</div>
                </div>
                <Badge className="bg-blue-500">Low Priority</Badge>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <Button variant="outline" size="sm" className="w-full">
                View All Upcoming Tests
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-t-4 border-t-blue-500 shadow-md">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-blue-700" />
              Schedule Changes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="rounded-lg border p-4 bg-blue-50 border-blue-200">
              <div className="font-medium text-blue-900 flex items-center">
                <Bell className="h-4 w-4 mr-1 text-blue-700" />
                Notice
              </div>
              <div className="text-sm text-blue-700 mt-1">
                Math class on Wednesday will be held in Room 105 instead of Room 102 due to ongoing renovations.
              </div>
            </div>
            
            <div className="rounded-lg border p-4 mt-3 bg-white">
              <div className="font-medium flex items-center">
                <Clock className="h-4 w-4 mr-1 text-gray-700" />
                Time Change
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Biology lab on Thursday will start 30 minutes later (10:30 AM) due to faculty meeting.
              </div>
            </div>
            
            <div className="rounded-lg border p-4 mt-3 bg-green-50 border-green-200">
              <div className="font-medium text-green-900 flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-green-700" />
                New Event Added
              </div>
              <div className="text-sm text-green-700 mt-1">
                Guest lecture on Climate Science added to your schedule this Friday at 2:00 PM in the Auditorium.
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">Enable push notifications</span>
              <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Schedule;
