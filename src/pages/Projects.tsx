
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Users } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  
  const ongoingProjects = [
    {
      id: 1,
      title: "Science Fair Research",
      description: "Research on renewable energy sources and their applications",
      dueDate: "June 15, 2025",
      members: 4,
      documents: 8,
      status: "In Progress",
      completion: 65,
    },
    {
      id: 2,
      title: "Literary Analysis",
      description: "Critical analysis of Shakespeare's Macbeth",
      dueDate: "May 28, 2025",
      members: 3,
      documents: 5,
      status: "In Progress",
      completion: 40,
    },
    {
      id: 3,
      title: "Math Modeling",
      description: "Creating mathematical models for real-world problems",
      dueDate: "June 5, 2025",
      members: 5,
      documents: 12,
      status: "In Review",
      completion: 85,
    }
  ];
  
  const completedProjects = [
    {
      id: 4,
      title: "History Documentary",
      description: "Documentary on local historical landmarks",
      dueDate: "April 10, 2025",
      members: 6,
      documents: 15,
      status: "Completed",
      completion: 100,
    },
    {
      id: 5,
      title: "Geography Research",
      description: "Analysis of climate patterns in urban areas",
      dueDate: "March 22, 2025",
      members: 4,
      documents: 9,
      status: "Completed",
      completion: 100,
    }
  ];
  
  const upcomingProjects = [
    {
      id: 6,
      title: "Computer Science Project",
      description: "Developing a mobile app for school events",
      dueDate: "July 30, 2025",
      members: 5,
      documents: 3,
      status: "Not Started",
      completion: 0,
    },
    {
      id: 7,
      title: "Art Exhibition",
      description: "Creating and curating digital art for virtual exhibition",
      dueDate: "August 15, 2025",
      members: 8,
      documents: 2,
      status: "Planning",
      completion: 5,
    }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-2">
          Manage your school projects and assignments
        </p>
      </div>
      
      <Tabs defaultValue="ongoing" className="w-full" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="grid grid-cols-3 mb-6 w-full sm:w-auto">
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ongoing" className="space-y-4">
          {ongoingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {completedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
        
        <TabsContent value="upcoming" className="space-y-4">
          {upcomingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    members: number;
    documents: number;
    status: string;
    completion: number;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "In Review":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Not Started":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "Planning":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between mb-2">
          <CardTitle>{project.title}</CardTitle>
          <Badge variant="outline" className={`ml-2 ${getStatusColor(project.status)}`}>
            {project.status}
          </Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between mb-1 text-sm">
            <span>Progress</span>
            <span>{project.completion}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${
                project.completion === 100 
                  ? 'bg-green-500' 
                  : project.completion > 65 
                  ? 'bg-blue-500' 
                  : 'bg-amber-500'
              }`}
              style={{ width: `${project.completion}%` }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
            <span>{project.dueDate}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>{project.members} members</span>
          </div>
          <div className="flex items-center">
            <FileText className="h-4 w-4 mr-2 text-gray-500" />
            <span>{project.documents} files</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-1">
        <Button size="sm" className="mr-2">View Details</Button>
        <Button size="sm" variant="outline">Add Files</Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
