
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, ChevronUp, Clock, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Progress = () => {
  const [currentReport, setCurrentReport] = useState("spring2025");
  
  const progressData = [
    {
      id: 1,
      subject: "Mathematics",
      teacher: "Dr. Sarah Johnson",
      grade: "A-",
      percentage: 91,
      strengths: ["Algebra", "Problem Solving", "Critical Thinking"],
      improvement: ["Geometry", "Showing Work"],
      comments: "Emma demonstrates strong analytical skills and excels at abstract mathematical concepts. She should focus on showing her work more clearly and continue practicing geometry concepts.",
      attendance: { present: 58, absent: 2, tardy: 1 }
    },
    {
      id: 2,
      subject: "Science",
      teacher: "Mr. Robert Chen",
      grade: "B+",
      percentage: 87,
      strengths: ["Lab Work", "Scientific Method", "Research"],
      improvement: ["Test Preparation", "Written Explanations"],
      comments: "Emma shows curiosity and aptitude for scientific exploration. Her lab work is thorough and well-documented. She should focus on improving test preparation strategies and practice explaining scientific concepts in writing.",
      attendance: { present: 59, absent: 1, tardy: 1 }
    },
    {
      id: 3,
      subject: "English Literature",
      teacher: "Ms. Elizabeth Taylor",
      grade: "A",
      percentage: 94,
      strengths: ["Critical Analysis", "Writing", "Vocabulary"],
      improvement: ["Verbal Participation"],
      comments: "Emma's writing shows exceptional depth and analysis. She demonstrates strong comprehension of complex texts and effectively articulates her thoughts in writing. I encourage her to participate more actively in class discussions.",
      attendance: { present: 60, absent: 1, tardy: 0 }
    },
    {
      id: 4,
      subject: "History",
      teacher: "Dr. Michael Brown",
      grade: "B",
      percentage: 83,
      strengths: ["Understanding Concepts", "Research Skills"],
      improvement: ["Memorization", "Connecting Events"],
      comments: "Emma has a good grasp of historical concepts and shows interest in the subject. She should work on memorizing key dates and making connections between historical events. Her research projects demonstrate careful thought and preparation.",
      attendance: { present: 56, absent: 3, tardy: 2 }
    }
  ];
  
  const reports = [
    {
      id: "spring2025",
      name: "Spring Semester 2025",
      date: "May 7, 2025",
      type: "Current"
    },
    {
      id: "fall2024",
      name: "Fall Semester 2024",
      date: "December 15, 2024",
      type: "Previous"
    },
    {
      id: "spring2024",
      name: "Spring Semester 2024",
      date: "May 10, 2024",
      type: "Previous"
    }
  ];
  
  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-blue-600";
    if (percentage >= 70) return "text-amber-600";
    return "text-red-600";
  };
  
  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-600";
    if (percentage >= 80) return "bg-blue-600";
    if (percentage >= 70) return "bg-amber-600";
    return "bg-red-600";
  };
  
  const selectedReport = reports.find(report => report.id === currentReport) || reports[0];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Progress Reports</h1>
        <p className="text-muted-foreground mt-2">
          View detailed academic progress and teacher feedback
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Report History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {reports.map((report) => (
              <div 
                key={report.id}
                className={`p-3 rounded-md cursor-pointer border transition-colors ${
                  currentReport === report.id 
                    ? 'bg-blue-50 border-blue-200' 
                    : 'hover:bg-gray-50 border-transparent'
                }`}
                onClick={() => setCurrentReport(report.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {report.date}
                    </div>
                  </div>
                  {report.type === "Current" && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100">
                      Current
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{selectedReport.name}</CardTitle>
                  <CardDescription>Generated on {selectedReport.date}</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Save PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">GPA</p>
                  <p className="text-2xl font-bold">3.7</p>
                  <div className="flex items-center justify-center mt-1 text-xs text-green-600">
                    <ChevronUp className="h-3 w-3" />
                    <span>+0.1</span>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">Overall Grade</p>
                  <p className="text-2xl font-bold">A-</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">Attendance</p>
                  <p className="text-2xl font-bold">97%</p>
                </div>
              </div>
              
              <Tabs defaultValue={progressData[0]?.subject.toLowerCase().replace(/\s+/g, '-')}>
                <TabsList className="mb-4 flex-wrap">
                  {progressData.map((subject) => (
                    <TabsTrigger 
                      key={subject.id} 
                      value={subject.subject.toLowerCase().replace(/\s+/g, '-')}
                    >
                      {subject.subject}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {progressData.map((subject) => (
                  <TabsContent 
                    key={subject.id} 
                    value={subject.subject.toLowerCase().replace(/\s+/g, '-')}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold">{subject.subject}</h3>
                        <p className="text-sm text-gray-500">Instructor: {subject.teacher}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl font-bold ${getGradeColor(subject.percentage)}`}>{subject.grade}</p>
                        <p className="text-sm text-gray-500">{subject.percentage}%</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="mb-1 text-sm">Overall Performance</p>
                      <ProgressBar 
                        value={subject.percentage} 
                        className={getProgressColor(subject.percentage)} 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100 mr-2">
                            Strengths
                          </Badge>
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {subject.strengths.map((strength, idx) => (
                            <li key={idx}>{strength}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2 flex items-center">
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-100 mr-2">
                            Areas for Improvement
                          </Badge>
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {subject.improvement.map((area, idx) => (
                            <li key={idx}>{area}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Teacher Comments
                      </h4>
                      <p className="text-sm">{subject.comments}</p>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <h4 className="font-medium mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Attendance Summary
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-2 bg-green-50 rounded-md">
                          <p className="text-sm text-gray-500">Present</p>
                          <p className="font-semibold">{subject.attendance.present}</p>
                        </div>
                        <div className="text-center p-2 bg-red-50 rounded-md">
                          <p className="text-sm text-gray-500">Absent</p>
                          <p className="font-semibold">{subject.attendance.absent}</p>
                        </div>
                        <div className="text-center p-2 bg-amber-50 rounded-md">
                          <p className="text-sm text-gray-500">Tardy</p>
                          <p className="font-semibold">{subject.attendance.tardy}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Progress;
