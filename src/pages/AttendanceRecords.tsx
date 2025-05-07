
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from "lucide-react";
import { attendanceData } from '@/data/mockData';
import { Button } from '@/components/ui/button';

const AttendanceRecords = () => {
  const [period, setPeriod] = useState('week');
  
  // Filter data for a specific student (in a real app, this would come from auth or params)
  const studentId = 'student-1';
  const studentName = 'Alex Johnson';
  
  // Calculate attendance statistics
  const studentAttendance = attendanceData.filter(record => record.studentId === studentId);
  const totalDays = studentAttendance.length;
  const presentDays = studentAttendance.filter(record => record.status === 'present').length;
  const absentDays = totalDays - presentDays;
  const attendanceRate = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Attendance Records</h1>
        <p className="text-gray-500 mt-1">View your child's attendance history</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Attendance History for {studentName}</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="week" onValueChange={setPeriod}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="semester">Semester</TabsTrigger>
                </TabsList>
                
                <TabsContent value="week">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="text-left py-3 px-4 border-b">Date</th>
                          <th className="text-left py-3 px-4 border-b">Class</th>
                          <th className="text-left py-3 px-4 border-b">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studentAttendance.map((record, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                            <td className="py-3 px-4">{record.date}</td>
                            <td className="py-3 px-4">{record.class}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${record.status === 'present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {record.status === 'present' ? 'Present' : 'Absent'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="month">
                  <div className="text-center py-8 text-gray-500">
                    Monthly view would show a calendar with present/absent days marked
                  </div>
                </TabsContent>
                
                <TabsContent value="semester">
                  <div className="text-center py-8 text-gray-500">
                    Semester view would show attendance trends over the semester
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Attendance Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Attendance Rate</span>
                    <span className="text-sm font-medium">{attendanceRate.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${attendanceRate}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                    <div className="text-2xl font-bold text-green-600">{presentDays}</div>
                    <div className="text-sm text-gray-600">Days Present</div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-50 border border-red-100">
                    <div className="text-2xl font-bold text-red-600">{absentDays}</div>
                    <div className="text-sm text-gray-600">Days Absent</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <h3 className="font-medium">Notes</h3>
                <p className="text-sm text-gray-600">
                  Regular attendance is important for academic success. If your child must be absent, 
                  please notify the school in advance.
                </p>
                
                <div className="flex items-center p-3 rounded-lg bg-amber-50 border border-amber-200">
                  <Calendar className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm">
                    School policy requires a minimum attendance rate of 80%
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  Download Attendance Report
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Report an Absence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                If your child will be absent, please notify the school.
              </p>
              <Button className="w-full">Report Absence</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AttendanceRecords;
