
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

const Gradebook = () => {
  const subjects = [
    {
      name: "Mathematics",
      teacher: "Dr. Sarah Johnson",
      currentGrade: "A-",
      percentage: 91,
      trend: "up",
      assignments: [
        { id: 1, name: "Algebra Quiz", score: 88, totalPoints: 100, date: "Apr 15, 2025" },
        { id: 2, name: "Probability Assignment", score: 95, totalPoints: 100, date: "Apr 22, 2025" },
        { id: 3, name: "Geometry Test", score: 92, totalPoints: 100, date: "May 1, 2025" },
      ]
    },
    {
      name: "Science",
      teacher: "Mr. Robert Chen",
      currentGrade: "B+",
      percentage: 87,
      trend: "stable",
      assignments: [
        { id: 4, name: "Physics Lab Report", score: 85, totalPoints: 100, date: "Apr 10, 2025" },
        { id: 5, name: "Chemistry Quiz", score: 88, totalPoints: 100, date: "Apr 25, 2025" },
        { id: 6, name: "Biology Project", score: 90, totalPoints: 100, date: "May 3, 2025" },
      ]
    },
    {
      name: "English Literature",
      teacher: "Ms. Elizabeth Taylor",
      currentGrade: "A",
      percentage: 94,
      trend: "up",
      assignments: [
        { id: 7, name: "Essay Analysis", score: 95, totalPoints: 100, date: "Apr 12, 2025" },
        { id: 8, name: "Reading Comprehension", score: 92, totalPoints: 100, date: "Apr 20, 2025" },
        { id: 9, name: "Poetry Presentation", score: 96, totalPoints: 100, date: "May 5, 2025" },
      ]
    },
    {
      name: "History",
      teacher: "Dr. Michael Brown",
      currentGrade: "B",
      percentage: 83,
      trend: "down",
      assignments: [
        { id: 10, name: "World War II Essay", score: 80, totalPoints: 100, date: "Apr 8, 2025" },
        { id: 11, name: "Civil Rights Movement Quiz", score: 85, totalPoints: 100, date: "Apr 18, 2025" },
        { id: 12, name: "Ancient Civilizations Test", score: 82, totalPoints: 100, date: "May 2, 2025" },
      ]
    }
  ];
  
  const gpaCalculation = {
    currentGPA: 3.7,
    previousGPA: 3.6,
    change: "+0.1",
    letterGrade: "A-"
  };
  
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
  
  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case "up":
        return <ArrowUp className="h-4 w-4 text-green-600" />;
      case "down":
        return <ArrowDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gradebook</h1>
        <p className="text-muted-foreground mt-2">
          Track your academic performance and assignments
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Current GPA</CardDescription>
            <CardTitle className="text-2xl">{gpaCalculation.currentGPA}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm flex items-center">
              <span className="text-green-600 mr-1">{gpaCalculation.change}</span> 
              from last semester
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Letter Grade</CardDescription>
            <CardTitle className="text-2xl">{gpaCalculation.letterGrade}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">Overall academic standing</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed Assignments</CardDescription>
            <CardTitle className="text-2xl">32/35</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">3 assignments pending</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Academic Year</CardDescription>
            <CardTitle className="text-2xl">2024-2025</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">Spring Semester</div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="subjects">
        <TabsList>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="recent">Recent Grades</TabsTrigger>
        </TabsList>
        
        <TabsContent value="subjects" className="space-y-6 mt-6">
          {subjects.map((subject) => (
            <Card key={subject.name}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{subject.name}</CardTitle>
                    <CardDescription>{subject.teacher}</CardDescription>
                  </div>
                  <div className="flex items-center">
                    <span className={`text-xl font-semibold ${getGradeColor(subject.percentage)}`}>
                      {subject.currentGrade}
                    </span>
                    <span className="ml-2">{getTrendIcon(subject.trend)}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Overall</span>
                    <span>{subject.percentage}%</span>
                  </div>
                  <Progress value={subject.percentage} className={getProgressColor(subject.percentage)} />
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2">Recent Assignments</h4>
                  <div className="space-y-3">
                    {subject.assignments.map((assignment) => (
                      <div key={assignment.id} className="flex justify-between text-sm border-b pb-2">
                        <div>
                          <p>{assignment.name}</p>
                          <p className="text-gray-500 text-xs">{assignment.date}</p>
                        </div>
                        <p className={getGradeColor((assignment.score / assignment.totalPoints) * 100)}>
                          {assignment.score}/{assignment.totalPoints}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="recent" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Grades</CardTitle>
              <CardDescription>Your most recent assignment grades across all subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjects.flatMap(subject => 
                  subject.assignments
                    .slice(0, 1)
                    .map(assignment => ({...assignment, subject: subject.name}))
                ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(assignment => (
                  <div key={assignment.id} className="flex justify-between pb-3 border-b">
                    <div>
                      <p className="font-medium">{assignment.name}</p>
                      <p className="text-sm text-gray-500">{assignment.subject}</p>
                      <p className="text-xs text-gray-400">{assignment.date}</p>
                    </div>
                    <p className={`font-semibold ${getGradeColor((assignment.score / assignment.totalPoints) * 100)}`}>
                      {assignment.score}/{assignment.totalPoints}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gradebook;
