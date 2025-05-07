
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Bell, CheckCircle2, Clock } from 'lucide-react';
import { announcementsData } from '@/data/mockData';

// Mock class data
const classesList = [
  { id: 'class-1', name: 'Mathematics' },
  { id: 'class-2', name: 'Physics' },
  { id: 'class-3', name: 'English Literature' },
  { id: 'class-4', name: 'History' },
  { id: 'class-5', name: 'Computer Science' },
];

const Announcements = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content || !selectedClass) {
      toast({
        title: "Missing Information",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast({
        title: "Announcement Posted",
        description: "Your announcement has been successfully posted.",
      });
      
      // Reset form
      setTitle('');
      setContent('');
      setSelectedClass('');
      setIsUrgent(false);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Class Announcements</h1>
        <p className="text-gray-500 mt-1">Post important announcements for your students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Announcement</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Announcement Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Quiz Postponed"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="class">Class</Label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      {classesList.map(cls => (
                        <SelectItem key={cls.id} value={cls.id}>{cls.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="content">Announcement Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Enter your announcement details..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={5}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="urgent"
                    checked={isUrgent}
                    onCheckedChange={setIsUrgent}
                  />
                  <Label htmlFor="urgent">Mark as urgent</Label>
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Posting..." : "Post Announcement"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Previous Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {announcementsData.map(announcement => (
                  <div 
                    key={announcement.id} 
                    className={`p-4 rounded-lg border ${announcement.urgent ? 'bg-red-50 border-red-200' : 'bg-white'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium flex items-center">
                          {announcement.title}
                          {announcement.urgent && (
                            <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs font-semibold rounded">
                              URGENT
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {announcement.content}
                        </p>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {announcement.date}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      Class: {announcement.class} | Posted by: {announcement.author}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Announcement Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Keep announcements clear and concise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Only mark truly time-sensitive information as urgent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Include all necessary details (what, when, where)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm">Proofread before posting</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <Label>Push Notifications</Label>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <Label>Email Notifications</Label>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-gray-500" />
                  <Label>SMS Notifications</Label>
                </div>
                <Switch />
              </div>
              
              <Button variant="outline" className="w-full">Manage Notification Settings</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Announcements;
