
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Clock, MapPin, Users } from "lucide-react";

const StudyRooms = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState("morning");
  
  const studyRooms = [
    {
      id: 1,
      name: "Main Library - Room A",
      capacity: 8,
      features: ["Whiteboard", "Projector", "Computers"],
      availability: {
        morning: "available",
        afternoon: "booked",
        evening: "available"
      },
      location: "Library, 2nd Floor",
      image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Study+Room"
    },
    {
      id: 2,
      name: "Science Building - Study Room",
      capacity: 6,
      features: ["Whiteboard", "Science Equipment"],
      availability: {
        morning: "booked",
        afternoon: "available",
        evening: "available"
      },
      location: "Science Building, 1st Floor",
      image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Science+Room"
    },
    {
      id: 3,
      name: "Student Center - Group Area",
      capacity: 12,
      features: ["Whiteboard", "Large Display", "Comfortable Seating"],
      availability: {
        morning: "available",
        afternoon: "available",
        evening: "booked"
      },
      location: "Student Center, Main Hall",
      image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Student+Center"
    },
    {
      id: 4,
      name: "Technology Pod",
      capacity: 4,
      features: ["Computers", "Video Conferencing"],
      availability: {
        morning: "available",
        afternoon: "booked",
        evening: "booked"
      },
      location: "Computer Lab, 3rd Floor",
      image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Tech+Pod"
    },
    {
      id: 5,
      name: "Quiet Study Area",
      capacity: 10,
      features: ["Individual Desks", "Silent Zone"],
      availability: {
        morning: "booked",
        afternoon: "booked",
        evening: "available"
      },
      location: "Library, 3rd Floor",
      image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Quiet+Area"
    },
    {
      id: 6,
      name: "Collaborative Space",
      capacity: 15,
      features: ["Flexible Furniture", "Multiple Whiteboards"],
      availability: {
        morning: "available",
        afternoon: "available",
        evening: "available"
      },
      location: "Learning Commons, Ground Floor",
      image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Collab+Space"
    }
  ];
  
  // Filter rooms based on selected time slot
  const filteredRooms = studyRooms.filter(room => 
    timeSlot === "all" || room.availability[timeSlot as keyof typeof room.availability] === "available"
  );
  
  const getAvailabilityColor = (status: string) => {
    return status === "available" 
      ? "bg-green-100 text-green-800 border-green-200" 
      : "bg-red-100 text-red-800 border-red-200";
  };
  
  const timeSlots = {
    morning: "8:00 AM - 12:00 PM",
    afternoon: "12:00 PM - 4:00 PM",
    evening: "4:00 PM - 8:00 PM"
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Study Rooms</h1>
        <p className="text-muted-foreground mt-2">
          Book a study room for individual or group study sessions
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Select Date & Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Time Slot</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="morning" 
                    name="timeSlot" 
                    value="morning"
                    checked={timeSlot === "morning"} 
                    onChange={() => setTimeSlot("morning")}
                    className="mr-2"
                  />
                  <label htmlFor="morning" className="text-sm">
                    Morning ({timeSlots.morning})
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="afternoon" 
                    name="timeSlot" 
                    value="afternoon"
                    checked={timeSlot === "afternoon"} 
                    onChange={() => setTimeSlot("afternoon")}
                    className="mr-2"
                  />
                  <label htmlFor="afternoon" className="text-sm">
                    Afternoon ({timeSlots.afternoon})
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="evening" 
                    name="timeSlot" 
                    value="evening"
                    checked={timeSlot === "evening"} 
                    onChange={() => setTimeSlot("evening")}
                    className="mr-2"
                  />
                  <label htmlFor="evening" className="text-sm">
                    Evening ({timeSlots.evening})
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="all" 
                    name="timeSlot" 
                    value="all"
                    checked={timeSlot === "all"} 
                    onChange={() => setTimeSlot("all")}
                    className="mr-2"
                  />
                  <label htmlFor="all" className="text-sm">
                    Show All Rooms
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="grid">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">
                Available Study Rooms
                {date && (
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    for {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                )}
              </h2>
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="grid">
              {filteredRooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredRooms.map((room) => (
                    <Card key={room.id}>
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={room.image} 
                          alt={room.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{room.name}</CardTitle>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-gray-500" />
                            <span className="text-sm">{room.capacity}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {room.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {room.location}
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <p className="text-xs text-gray-500">Morning</p>
                            <Badge variant="outline" className={getAvailabilityColor(room.availability.morning)}>
                              {room.availability.morning === "available" ? "Available" : "Booked"}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Afternoon</p>
                            <Badge variant="outline" className={getAvailabilityColor(room.availability.afternoon)}>
                              {room.availability.afternoon === "available" ? "Available" : "Booked"}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Evening</p>
                            <Badge variant="outline" className={getAvailabilityColor(room.availability.evening)}>
                              {room.availability.evening === "available" ? "Available" : "Booked"}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button className="w-full">Reserve Room</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 border rounded-lg">
                  <CalendarIcon className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <h3 className="text-lg font-medium">No Available Rooms</h3>
                  <p className="text-gray-500">
                    No study rooms are available for the selected time slot.
                    Try selecting a different time or date.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="list">
              {filteredRooms.length > 0 ? (
                <div className="space-y-3">
                  {filteredRooms.map((room) => (
                    <div key={room.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="font-medium">{room.name}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            {room.location}
                          </div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {room.features.map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-gray-500" />
                            <span className="text-sm">{room.capacity} people</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <Badge variant="outline" className={getAvailabilityColor(room.availability[timeSlot === "all" ? "morning" : timeSlot as keyof typeof room.availability])}>
                              {timeSlot === "all" 
                                ? "See Time Slots" 
                                : room.availability[timeSlot as keyof typeof room.availability] === "available" 
                                  ? "Available" 
                                  : "Booked"
                              }
                            </Badge>
                          </div>
                          <Button size="sm">Reserve</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 border rounded-lg">
                  <CalendarIcon className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <h3 className="text-lg font-medium">No Available Rooms</h3>
                  <p className="text-gray-500">
                    No study rooms are available for the selected time slot.
                    Try selecting a different time or date.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default StudyRooms;
