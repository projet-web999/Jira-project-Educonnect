
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Download, FileText, Search } from "lucide-react";
import { useState } from "react";

const Newsletters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const newsletters = [
    {
      id: 1,
      title: "May 2025 School Newsletter",
      description: "Monthly update with information about upcoming events, student achievements, and important announcements.",
      date: "May 1, 2025",
      category: "Monthly",
      thumbnail: "https://placehold.co/300x200/e2e8f0/1e293b?text=May+2025",
      fileSize: "2.4 MB",
      featured: true
    },
    {
      id: 2,
      title: "April 2025 School Newsletter",
      description: "Monthly update with spring activities, sports highlights, and academic achievements.",
      date: "April 1, 2025",
      category: "Monthly",
      thumbnail: "https://placehold.co/300x200/e2e8f0/1e293b?text=April+2025",
      fileSize: "2.2 MB",
      featured: false
    },
    {
      id: 3,
      title: "March 2025 School Newsletter",
      description: "Monthly update featuring student art showcase, science fair results, and parent-teacher conferences.",
      date: "March 1, 2025",
      category: "Monthly",
      thumbnail: "https://placehold.co/300x200/e2e8f0/1e293b?text=March+2025",
      fileSize: "2.5 MB",
      featured: false
    },
    {
      id: 4,
      title: "Spring 2025 Semester Special Edition",
      description: "Special newsletter covering major events, achievements, and updates for the Spring 2025 semester.",
      date: "February 15, 2025",
      category: "Special Edition",
      thumbnail: "https://placehold.co/300x200/e2e8f0/1e293b?text=Spring+2025",
      fileSize: "3.8 MB",
      featured: true
    },
    {
      id: 5,
      title: "February 2025 School Newsletter",
      description: "Monthly update with winter activities, Valentine's Day events, and educational initiatives.",
      date: "February 1, 2025",
      category: "Monthly",
      thumbnail: "https://placehold.co/300x200/e2e8f0/1e293b?text=Feb+2025",
      fileSize: "2.3 MB",
      featured: false
    },
    {
      id: 6,
      title: "January 2025 School Newsletter",
      description: "First newsletter of the year with new semester information, winter sports updates, and upcoming events.",
      date: "January 1, 2025",
      category: "Monthly",
      thumbnail: "https://placehold.co/300x200/e2e8f0/1e293b?text=Jan+2025",
      fileSize: "2.1 MB",
      featured: false
    },
    {
      id: 7,
      title: "Winter Break 2024-2025 Edition",
      description: "Special edition with holiday event recaps, student spotlights, and return-to-school information.",
      date: "December 15, 2024",
      category: "Special Edition",
      thumbnail: "https://placehold.co/300x200/e2e8f0/1e293b?text=Winter+Break",
      fileSize: "3.5 MB",
      featured: false
    }
  ];
  
  const specialAnnouncements = [
    {
      id: 8,
      title: "End-of-Year Schedule Changes",
      description: "Important changes to the exam schedule and end-of-year activities.",
      date: "May 5, 2025",
      category: "Announcement",
      fileSize: "640 KB"
    },
    {
      id: 9,
      title: "Summer Program Registration",
      description: "Information about summer enrichment programs and registration details.",
      date: "April 22, 2025",
      category: "Announcement",
      fileSize: "580 KB"
    },
    {
      id: 10,
      title: "Graduation Ceremony Details",
      description: "Complete information about the upcoming graduation ceremony, including schedule and protocols.",
      date: "April 15, 2025",
      category: "Announcement",
      fileSize: "720 KB"
    }
  ];
  
  // Filter newsletters based on search
  const filteredNewsletters = newsletters.filter(newsletter => 
    searchTerm === "" || 
    newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsletter.date.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredAnnouncements = specialAnnouncements.filter(announcement => 
    searchTerm === "" || 
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.date.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const featuredNewsletters = newsletters.filter(newsletter => newsletter.featured);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">School Newsletters</h1>
        <p className="text-muted-foreground mt-2">
          Access our school newsletters and important announcements
        </p>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          className="pl-10" 
          placeholder="Search newsletters by title, description, or date" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {featuredNewsletters.length > 0 && searchTerm === "" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNewsletters.map(newsletter => (
              <Card key={newsletter.id} className="overflow-hidden">
                <div className="aspect-[2/1] overflow-hidden">
                  <img 
                    src={newsletter.thumbnail} 
                    alt={newsletter.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{newsletter.title}</CardTitle>
                    <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-600 mb-2">{newsletter.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {newsletter.date}
                    </div>
                    <div>
                      {newsletter.fileSize}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Read Newsletter
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Newsletters</TabsTrigger>
          <TabsTrigger value="announcements">Special Announcements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          {filteredNewsletters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNewsletters.map(newsletter => (
                <Card key={newsletter.id}>
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      src={newsletter.thumbnail} 
                      alt={newsletter.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-1">
                      <CardTitle className="text-lg">{newsletter.title}</CardTitle>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                        {newsletter.category}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {newsletter.date}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-600 text-sm mb-2">{newsletter.description}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>PDF Document</span>
                      <span>{newsletter.fileSize}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" className="flex-1">
                        <FileText className="h-4 w-4 mr-2" />
                        Read
                      </Button>
                      <Button className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-8 border rounded-lg">
              <FileText className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <h3 className="text-lg font-medium">No Newsletters Found</h3>
              <p className="text-gray-500">
                No newsletters match your search criteria. Try a different search term.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="announcements" className="mt-6">
          {filteredAnnouncements.length > 0 ? (
            <div className="space-y-4">
              {filteredAnnouncements.map(announcement => (
                <Card key={announcement.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle>{announcement.title}</CardTitle>
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-100">
                        {announcement.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-600 mb-3">{announcement.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {announcement.date}
                      </div>
                      <div>
                        PDF • {announcement.fileSize}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" className="flex-1">
                        <FileText className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-8 border rounded-lg">
              <FileText className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <h3 className="text-lg font-medium">No Announcements Found</h3>
              <p className="text-gray-500">
                No special announcements match your search criteria. Try a different search term.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Newsletters;
