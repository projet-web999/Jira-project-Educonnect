
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Search, Book, Video, Globe } from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const documentResources = [
    {
      id: 1,
      title: "Math Formula Sheet",
      description: "Comprehensive list of mathematical formulas for algebra, geometry, and calculus",
      subject: "Mathematics",
      type: "PDF",
      size: "1.2 MB",
      uploadedDate: "Apr 10, 2025"
    },
    {
      id: 2,
      title: "Literary Analysis Guide",
      description: "Step-by-step guide for analyzing literature and writing essays",
      subject: "English",
      type: "DOCX",
      size: "850 KB",
      uploadedDate: "Apr 15, 2025"
    },
    {
      id: 3,
      title: "Periodic Table Reference",
      description: "Detailed periodic table with element properties and information",
      subject: "Chemistry",
      type: "PDF",
      size: "2.1 MB",
      uploadedDate: "Apr 5, 2025"
    }
  ];
  
  const videoResources = [
    {
      id: 4,
      title: "Cell Division Process",
      description: "Visual explanation of mitosis and meiosis processes",
      subject: "Biology",
      duration: "15:32",
      type: "Video",
      uploadedDate: "Apr 12, 2025"
    },
    {
      id: 5,
      title: "World War II Overview",
      description: "Documentary-style overview of key events in World War II",
      subject: "History",
      duration: "22:45",
      type: "Video",
      uploadedDate: "Apr 8, 2025"
    },
    {
      id: 6,
      title: "Python Programming Basics",
      description: "Introduction to Python syntax and basic programming concepts",
      subject: "Computer Science",
      duration: "18:20",
      type: "Video",
      uploadedDate: "Apr 18, 2025"
    }
  ];
  
  const webResources = [
    {
      id: 7,
      title: "Khan Academy",
      description: "Free educational videos and practice exercises on various subjects",
      category: "Learning Platform",
      url: "https://www.khanacademy.org/",
      rating: 4.9
    },
    {
      id: 8,
      title: "National Geographic Education",
      description: "Educational resources focusing on geography, science, and culture",
      category: "Educational Website",
      url: "https://education.nationalgeographic.org/",
      rating: 4.7
    },
    {
      id: 9,
      title: "Desmos Graphing Calculator",
      description: "Interactive online graphing calculator for mathematics",
      category: "Math Tool",
      url: "https://www.desmos.com/calculator",
      rating: 4.8
    }
  ];
  
  const filterResources = (resources: any[]) => {
    if (!searchTerm) return resources;
    
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resource.subject && resource.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (resource.category && resource.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Educational Resources</h1>
        <p className="text-muted-foreground mt-2">
          Access study materials and learning resources
        </p>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          className="pl-10" 
          placeholder="Search for resources by title, subject, or keywords" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="grid w-full sm:w-auto grid-cols-3">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="websites">Websites</TabsTrigger>
        </TabsList>
        
        <TabsContent value="documents" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterResources(documentResources).map(resource => (
              <Card key={resource.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                      {resource.subject}
                    </Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-100">
                      {resource.type}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Size: {resource.size}</span>
                    <span>Uploaded: {resource.uploadedDate}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterResources(videoResources).map(resource => (
              <Card key={resource.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                      {resource.subject}
                    </Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-100">
                      {resource.duration}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                    <Video className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    <span>Uploaded: {resource.uploadedDate}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Watch Video
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="websites" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterResources(webResources).map(resource => (
              <Card key={resource.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100">
                      {resource.category}
                    </Badge>
                    <div className="flex items-center">
                      <span className="text-amber-500 mr-1">★</span>
                      <span className="text-sm">{resource.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="mt-2 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {resource.title}
                  </CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-sm text-blue-600 truncate">
                    {resource.url}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    Visit Website
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
