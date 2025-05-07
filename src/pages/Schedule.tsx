
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, User } from 'lucide-react';
import { scheduleData } from '@/data/mockData';

const Schedule = () => {
  const [currentDay, setCurrentDay] = useState('Monday');
  
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const filteredSchedule = scheduleData.filter(item => item.day === currentDay);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Class Schedule</h1>
        <p className="text-gray-500 mt-1">View your daily class schedule with locations</p>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Schedule for {currentDay}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="Monday" onValueChange={setCurrentDay}>
            <TabsList className="mb-4 overflow-x-auto flex-nowrap w-full">
              {daysOfWeek.map(day => (
                <TabsTrigger key={day} value={day} className="flex-1">
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>

            {daysOfWeek.map(day => (
              <TabsContent key={day} value={day} className="space-y-4">
                {filteredSchedule.length > 0 ? (
                  filteredSchedule.map(item => (
                    <div 
                      key={item.id} 
                      className={`schedule-item ${item.colorClass} transition-shadow hover:shadow-md`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{item.subject}</h3>
                          <div className="flex items-center text-gray-600 mt-1">
                            <User className="h-4 w-4 mr-1" />
                            <span className="text-sm">{item.teacher}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="text-sm">{item.time}</span>
                          </div>
                          <div className="flex items-center justify-end text-gray-600 mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No classes scheduled for {day}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="p-3 border rounded-lg bg-amber-50 border-amber-200">
                <div className="font-medium">Physics Quiz</div>
                <div className="text-sm text-gray-600">Tomorrow, 9:30 AM</div>
              </li>
              <li className="p-3 border rounded-lg">
                <div className="font-medium">Math Midterm</div>
                <div className="text-sm text-gray-600">Friday, 8:30 AM</div>
              </li>
              <li className="p-3 border rounded-lg">
                <div className="font-medium">English Essay Deadline</div>
                <div className="text-sm text-gray-600">Next Monday, 11:59 PM</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border p-3 bg-blue-50 border-blue-200">
              <div className="font-medium">Notice</div>
              <div className="text-sm text-gray-600">
                Math class on Wednesday will be held in Room 105 instead of Room 102 due to renovations.
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
