
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

// Mock student data for attendance
const studentsList = [
  { id: 'student-1', name: 'Alex Johnson' },
  { id: 'student-2', name: 'Emily Davis' },
  { id: 'student-3', name: 'Michael Smith' },
  { id: 'student-4', name: 'Sarah Wilson' },
  { id: 'student-5', name: 'David Brown' },
  { id: 'student-6', name: 'Jennifer Taylor' },
  { id: 'student-7', name: 'James Anderson' },
  { id: 'student-8', name: 'Lisa Martinez' },
];

// Mock class data
const classesList = [
  { id: 'class-1', name: 'Mathematics' },
  { id: 'class-2', name: 'Physics' },
  { id: 'class-3', name: 'English Literature' },
  { id: 'class-4', name: 'History' },
  { id: 'class-5', name: 'Computer Science' },
];

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [attendance, setAttendance] = useState<Record<string, boolean>>(
    studentsList.reduce((acc, student) => {
      acc[student.id] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleAttendanceChange = (studentId: string, isPresent: boolean) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: isPresent
    }));
  };

  const handleSelectAll = () => {
    const allSelected = studentsList.every(student => attendance[student.id]);
    
    const newAttendance = { ...attendance };
    studentsList.forEach(student => {
      newAttendance[student.id] = !allSelected;
    });
    
    setAttendance(newAttendance);
  };

  const handleSubmit = () => {
    if (!selectedClass) {
      toast({
        title: "Error",
        description: "Please select a class before submitting attendance.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast({
        title: "Attendance Saved",
        description: `Attendance for ${classesList.find(c => c.id === selectedClass)?.name} has been recorded successfully.`,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Take Attendance</h1>
        <p className="text-gray-500 mt-1">Record student attendance for your classes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Student Attendance</CardTitle>
              <div className="flex items-center space-x-2">
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classesList.map(cls => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              {!selectedClass ? (
                <div className="text-center py-8 text-gray-500">
                  Please select a class to take attendance
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-4 pb-2 border-b">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="select-all"
                        checked={studentsList.every(student => attendance[student.id])}
                        onCheckedChange={handleSelectAll}
                      />
                      <Label htmlFor="select-all" className="cursor-pointer font-medium">Mark all as present</Label>
                    </div>
                    <div className="text-sm text-gray-500">
                      {studentsList.filter(student => attendance[student.id]).length} of {studentsList.length} present
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {studentsList.map(student => (
                      <div key={student.id} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-3">
                          <Checkbox 
                            id={student.id} 
                            checked={attendance[student.id]} 
                            onCheckedChange={(checked) => handleAttendanceChange(student.id, !!checked)} 
                          />
                          <Label htmlFor={student.id} className="cursor-pointer">
                            {student.name}
                          </Label>
                        </div>
                        <div>
                          <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${attendance[student.id] ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {attendance[student.id] ? 'Present' : 'Absent'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button 
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Saving..." : "Save Attendance"}
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Attendance Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">QR Code Check-in</h3>
                <p className="text-sm text-gray-600 mb-2">Generate a QR code for students to scan for attendance.</p>
                <Button variant="outline" className="w-full">
                  Generate QR Code
                </Button>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">Export Options</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Download CSV
                  </Button>
                  <Button variant="outline" className="w-full">
                    Print Attendance
                  </Button>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">Previous Records</h3>
                <p className="text-sm text-gray-600 mb-2">Access attendance records from previous classes.</p>
                <Button variant="outline" className="w-full">
                  View Records
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Attendance;
