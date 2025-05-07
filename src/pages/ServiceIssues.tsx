
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle, Clock, MessageSquare, Plus, Search } from "lucide-react";

const ServiceIssues = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample service issues data
  const activeIssues = [
    {
      id: 1,
      title: "Projector not working in Room 203",
      description: "The projector in Room 203 isn't turning on. We've tried resetting it but there's still no response.",
      category: "Equipment",
      status: "In Progress",
      priority: "High",
      submittedDate: "May 5, 2025",
      lastUpdated: "May 6, 2025",
      assignee: "Tech Support",
      responses: 2
    },
    {
      id: 2,
      title: "Water fountain leaking near gym entrance",
      description: "The water fountain near the gym entrance has been leaking for two days and creating a slipping hazard.",
      category: "Facilities",
      status: "Open",
      priority: "Medium",
      submittedDate: "May 6, 2025",
      lastUpdated: "May 6, 2025",
      assignee: "Maintenance",
      responses: 1
    },
    {
      id: 3,
      title: "Library computer #8 keyboard not functioning",
      description: "Several keys on library computer #8 are not responding when pressed.",
      category: "Equipment",
      status: "Open",
      priority: "Low",
      submittedDate: "May 6, 2025",
      lastUpdated: "May 6, 2025",
      assignee: "Unassigned",
      responses: 0
    }
  ];
  
  const resolvedIssues = [
    {
      id: 4,
      title: "AC not working in Science Lab",
      description: "The air conditioning in the Science Lab is not cooling properly. Room temperature is too high for comfortable learning.",
      category: "Facilities",
      status: "Resolved",
      priority: "High",
      submittedDate: "Apr 28, 2025",
      lastUpdated: "May 2, 2025",
      assignee: "Facilities Management",
      responses: 3,
      resolution: "HVAC system serviced and coolant recharged. System now functioning properly."
    },
    {
      id: 5,
      title: "Wi-Fi connectivity issues in Student Center",
      description: "Students are experiencing intermittent Wi-Fi disconnections in the Student Center during peak hours.",
      category: "IT",
      status: "Resolved",
      priority: "Medium",
      submittedDate: "Apr 25, 2025",
      lastUpdated: "May 1, 2025",
      assignee: "IT Support",
      responses: 4,
      resolution: "Additional Wi-Fi access point installed to handle increased load."
    }
  ];
  
  // Filter issues based on search query
  const filteredActiveIssues = activeIssues.filter(issue => 
    searchQuery === "" || 
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredResolvedIssues = resolvedIssues.filter(issue => 
    searchQuery === "" || 
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200";
      case "Medium":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Low":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Open":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "In Progress":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Resolved":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Service Issues</h1>
        <p className="text-muted-foreground mt-2">
          Report and track maintenance and service issues
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            className="pl-10" 
            placeholder="Search issues by title, description, or category" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button className="whitespace-nowrap">
          <Plus className="h-4 w-4 mr-2" />
          New Issue
        </Button>
      </div>
      
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full sm:w-auto grid-cols-2">
          <TabsTrigger value="active">Active Issues</TabsTrigger>
          <TabsTrigger value="resolved">Resolved Issues</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="mt-6">
          {filteredActiveIssues.length > 0 ? (
            <div className="space-y-4">
              {filteredActiveIssues.map((issue) => (
                <Card key={issue.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between flex-wrap gap-2">
                      <div className="space-x-2">
                        <Badge variant="outline" className={getStatusColor(issue.status)}>
                          {issue.status}
                        </Badge>
                        <Badge variant="outline" className={getPriorityColor(issue.priority)}>
                          {issue.priority} Priority
                        </Badge>
                        <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                          {issue.category}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        Reported: {issue.submittedDate}
                      </div>
                    </div>
                    <CardTitle className="mt-2">{issue.title}</CardTitle>
                    <CardDescription className="mt-1">{issue.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap justify-between gap-2">
                      <div className="text-sm">
                        <span className="font-medium">Assignee:</span>{" "}
                        {issue.assignee === "Unassigned" ? (
                          <span className="text-amber-600">Unassigned</span>
                        ) : (
                          <span>{issue.assignee}</span>
                        )}
                      </div>
                      <div className="flex items-center text-sm">
                        <MessageSquare className="h-3.5 w-3.5 mr-1 text-gray-500" />
                        {issue.responses} {issue.responses === 1 ? "response" : "responses"}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" className="flex-1">View Details</Button>
                      <Button className="flex-1">Add Comment</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-8 border rounded-lg">
              <AlertCircle className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <h3 className="text-lg font-medium">No Active Issues Found</h3>
              <p className="text-gray-500">
                {searchQuery 
                  ? "No matching issues found. Try a different search." 
                  : "There are currently no active service issues."}
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="resolved" className="mt-6">
          {filteredResolvedIssues.length > 0 ? (
            <div className="space-y-4">
              {filteredResolvedIssues.map((issue) => (
                <Card key={issue.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between flex-wrap gap-2">
                      <div className="space-x-2">
                        <Badge variant="outline" className={getStatusColor(issue.status)}>
                          {issue.status}
                        </Badge>
                        <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-200">
                          {issue.category}
                        </Badge>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="h-3.5 w-3.5 mr-1 text-green-600" />
                        Resolved: {issue.lastUpdated}
                      </div>
                    </div>
                    <CardTitle className="mt-2">{issue.title}</CardTitle>
                    <CardDescription className="mt-1">{issue.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-2 p-3 bg-green-50 rounded-md">
                      <h4 className="text-sm font-medium flex items-center">
                        <CheckCircle className="h-3.5 w-3.5 mr-1.5 text-green-600" />
                        Resolution
                      </h4>
                      <p className="mt-1 text-sm">{issue.resolution}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center p-8 border rounded-lg">
              <CheckCircle className="h-12 w-12 mx-auto text-gray-300 mb-2" />
              <h3 className="text-lg font-medium">No Resolved Issues Found</h3>
              <p className="text-gray-500">
                {searchQuery 
                  ? "No matching resolved issues found. Try a different search." 
                  : "There are currently no resolved service issues."}
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Report a New Issue</CardTitle>
          <CardDescription>Submit a new service or maintenance issue to be addressed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="issue-title" className="text-sm font-medium block mb-1">
              Issue Title
            </label>
            <Input id="issue-title" placeholder="Brief description of the issue" />
          </div>
          <div>
            <label htmlFor="issue-description" className="text-sm font-medium block mb-1">
              Description
            </label>
            <Textarea 
              id="issue-description" 
              placeholder="Provide detailed information about the issue"
              className="min-h-[100px]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="issue-category" className="text-sm font-medium block mb-1">
                Category
              </label>
              <select 
                id="issue-category" 
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Equipment">Equipment</option>
                <option value="Facilities">Facilities</option>
                <option value="IT">IT</option>
                <option value="Safety">Safety</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="issue-priority" className="text-sm font-medium block mb-1">
                Priority
              </label>
              <select 
                id="issue-priority" 
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="issue-location" className="text-sm font-medium block mb-1">
              Location
            </label>
            <Input id="issue-location" placeholder="Where is this issue located?" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit Issue</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ServiceIssues;
