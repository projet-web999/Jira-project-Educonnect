
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Check, Clock, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Equipment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const techEquipment = [
    {
      id: 1,
      name: "VR Development Kit",
      type: "Virtual Reality",
      location: "Interactive Media Lab",
      status: "Available",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=VR+Kit"
    },
    {
      id: 2,
      name: "DSLR Camera",
      type: "Media",
      location: "Multimedia Studio",
      status: "Checked Out",
      dueDate: "May 15, 2025",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Camera"
    },
    {
      id: 3,
      name: "Raspberry Pi Kit",
      type: "IoT",
      location: "Embedded Systems Lab",
      status: "Available",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Pi+Kit"
    },
    {
      id: 4,
      name: "MacBook Pro",
      type: "Computer",
      location: "Mobile Development Lab",
      status: "Reserved",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=MacBook"
    }
  ];
  
  const hardwareEquipment = [
    {
      id: 5,
      name: "NVIDIA GPU Server",
      type: "Hardware",
      location: "AI Research Lab",
      status: "Available",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=GPU"
    },
    {
      id: 6,
      name: "Arduino Kits",
      type: "Hardware",
      location: "Robotics Lab",
      status: "Available",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Arduino"
    },
    {
      id: 7,
      name: "Network Testing Kit",
      type: "Hardware",
      location: "Networking Lab",
      status: "Checked Out",
      dueDate: "May 10, 2025",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Network"
    }
  ];
  
  const audiovisualEquipment = [
    {
      id: 8,
      name: "Audio Recording Kit",
      type: "Multimedia",
      location: "Sound Studio",
      status: "Available",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=Audio"
    },
    {
      id: 9,
      name: "Motion Capture System",
      type: "Multimedia",
      location: "Animation Lab",
      status: "Checked Out",
      dueDate: "May 12, 2025",
      image: "https://placehold.co/100x100/e2e8f0/1e293b?text=MoCap"
    }
  ];
  
  const filterEquipment = (equipment: any[]) => {
    if (!searchTerm) return equipment;
    
    return equipment.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tech Equipment</h1>
        <p className="text-muted-foreground mt-2">
          Browse and check out available equipment for your programming and multimedia projects
        </p>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          className="pl-10" 
          placeholder="Search equipment by name, type, or location" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="tech" className="w-full">
        <TabsList className="grid w-full sm:w-auto grid-cols-3">
          <TabsTrigger value="tech">Tech Equipment</TabsTrigger>
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
          <TabsTrigger value="av">Audiovisual</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tech" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterEquipment(techEquipment).map(item => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="hardware" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterEquipment(hardwareEquipment).map(item => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="av" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterEquipment(audiovisualEquipment).map(item => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface EquipmentCardProps {
  item: {
    id: number;
    name: string;
    type: string;
    location: string;
    status: string;
    dueDate?: string;
    image: string;
  };
}

const EquipmentCard = ({ item }: EquipmentCardProps) => {
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200";
      case "Checked Out":
        return "bg-red-100 text-red-800 border-red-200";
      case "Reserved":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case "Available":
        return <Check className="h-4 w-4" />;
      case "Checked Out":
        return <X className="h-4 w-4" />;
      case "Reserved":
        return <Clock className="h-4 w-4" />;
      default:
        return null;
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{item.name}</CardTitle>
          <Badge variant="outline" className={getStatusColor(item.status)}>
            <span className="flex items-center gap-1">
              {getStatusIcon(item.status)}
              {item.status}
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-2 pb-0">
        <div className="flex space-x-4">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-20 h-20 rounded-md object-cover"
          />
          <div>
            <div className="text-sm mb-1">
              <span className="font-medium">Type:</span> {item.type}
            </div>
            <div className="text-sm mb-1">
              <span className="font-medium">Location:</span> {item.location}
            </div>
            {item.dueDate && (
              <div className="text-sm text-amber-600 flex items-center mt-2">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span>Due: {item.dueDate}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button 
          className="w-full" 
          disabled={item.status !== "Available"}
        >
          {item.status === "Available" ? "Check Out" : "Not Available"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Equipment;
