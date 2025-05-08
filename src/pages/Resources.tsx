import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Button 
} from "@/components/ui/button";
import { 
  Input 
} from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Upload, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const resourceSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  file: z.instanceof(File).optional(),
});

interface ResourceItem {
  id: string;
  title: string;
  description: string;
  subject: string;
  fileName: string;
  date: string;
}

const Resources = () => {
  const { toast } = useToast();
  const [uploadedResources, setUploadedResources] = useState<ResourceItem[]>([
    {
      id: "1",
      title: "Math Formulas",
      description: "Essential formulas for algebra and calculus",
      subject: "Mathematics",
      fileName: "math_formulas.pdf",
      date: "2025-05-07",
    },
    {
      id: "2",
      title: "Science Experiment",
      description: "Lab experiment instructions for chemistry class",
      subject: "Science",
      fileName: "chemistry_lab.pdf",
      date: "2025-05-06",
    },
  ]);
  
  const form = useForm<z.infer<typeof resourceSchema>>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: "",
      description: "",
      subject: "",
    },
  });
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      form.setValue("file", e.target.files[0]);
    }
  };
  
  const onSubmit = (values: z.infer<typeof resourceSchema>) => {
    const newResource: ResourceItem = {
      id: Math.random().toString(36).substring(2, 9),
      title: values.title,
      description: values.description,
      subject: values.subject,
      fileName: selectedFile ? selectedFile.name : "No file attached",
      date: new Date().toISOString().split('T')[0],
    };
    
    setUploadedResources([newResource, ...uploadedResources]);
    
    toast({
      title: "Resource uploaded successfully!",
      description: `${values.title} has been added to your resources.`,
    });
    
    form.reset();
    setSelectedFile(null);
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Teacher Resources Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Upload New Resource</CardTitle>
              <CardDescription>Share materials with your students</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Resource title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Mathematics">Mathematics</SelectItem>
                            <SelectItem value="Science">Science</SelectItem>
                            <SelectItem value="Literature">Literature</SelectItem>
                            <SelectItem value="History">History</SelectItem>
                            <SelectItem value="Art">Art</SelectItem>
                            <SelectItem value="Physical Education">Physical Education</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Brief description of the resource" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="file"
                    render={() => (
                      <FormItem>
                        <FormLabel>File</FormLabel>
                        <FormControl>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Input 
                              type="file"
                              className="hidden"
                              id="file-upload" 
                              onChange={handleFileChange}
                            />
                            <label 
                              htmlFor="file-upload" 
                              className="cursor-pointer flex flex-col items-center justify-center"
                            >
                              <Upload className="h-8 w-8 text-gray-500 mb-2" />
                              {selectedFile ? (
                                <p>{selectedFile.name}</p>
                              ) : (
                                <p>Click to upload or drag and drop</p>
                              )}
                            </label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    Upload Resource
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Your Uploaded Resources</h2>
          <div className="space-y-4">
            {uploadedResources.map((resource) => (
              <Card key={resource.id} className="shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <CardDescription className="text-sm">{resource.subject} • {resource.date}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="flex gap-2">
                      <FileText className="h-4 w-4" /> Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </CardContent>
                <CardFooter className="pt-0 text-sm text-gray-500">
                  File: {resource.fileName}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
