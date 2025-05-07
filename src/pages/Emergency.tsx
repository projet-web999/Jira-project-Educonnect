
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { emergencyContactsData } from '@/data/mockData';
import { Bell, Phone, Mail, Clock, Shield, AlertCircle, MapPin, User, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Emergency = () => {
  return (
    <>
      <div className="mb-8 bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl shadow-sm border border-red-100">
        <h1 className="text-3xl font-bold text-red-800">Emergency Contacts</h1>
        <p className="text-red-600 mt-1 flex items-center">
          <AlertCircle className="h-4 w-4 mr-2" />
          Access important campus emergency resources
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="border-t-4 border-t-red-500 shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
              <CardTitle className="text-red-800 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-600" />
                Campus Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="campus" className="w-full">
                <div className="border-b">
                  <TabsList className="w-full h-auto rounded-none bg-transparent p-0">
                    <TabsTrigger 
                      value="campus" 
                      className="flex-1 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-500"
                    >
                      Campus Security
                    </TabsTrigger>
                    <TabsTrigger 
                      value="medical" 
                      className="flex-1 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-500"
                    >
                      Medical
                    </TabsTrigger>
                    <TabsTrigger 
                      value="crisis" 
                      className="flex-1 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-red-500"
                    >
                      Crisis Support
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="campus" className="m-0 p-4">
                  <div className="space-y-4">
                    {emergencyContactsData.map(contact => (
                      <div key={contact.id} className="p-4 rounded-lg border hover:shadow-md transition-shadow bg-white">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-lg flex items-center">
                              {contact.name}
                              <Badge className="ml-2 bg-red-500">Emergency</Badge>
                            </h3>
                            <div className="flex items-center mt-2 text-gray-600">
                              <Phone className="h-4 w-4 mr-2 text-red-500" />
                              <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                                {contact.phone}
                              </a>
                            </div>
                            <div className="flex items-center mt-1 text-gray-600">
                              <Mail className="h-4 w-4 mr-2 text-blue-500" />
                              <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                                {contact.email}
                              </a>
                            </div>
                            <div className="flex items-center mt-1 text-gray-600">
                              <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm">Campus Security Office, Building A</span>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-4 w-4 mr-1 text-amber-500" />
                            <span className="text-sm font-medium">{contact.available}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex space-x-2">
                          <Button size="sm" className="bg-red-500 hover:bg-red-600">
                            <Phone className="h-4 w-4 mr-1" />
                            Call Now
                          </Button>
                          <Button size="sm" variant="outline">
                            Text Alert
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="medical" className="m-0 p-4">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border hover:shadow-md transition-shadow bg-white">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-lg">Campus Health Center</h3>
                          <div className="flex items-center mt-2 text-gray-600">
                            <Phone className="h-4 w-4 mr-2 text-red-500" />
                            <a href="tel:555-123-7890" className="text-blue-600 hover:underline">
                              555-123-7890
                            </a>
                          </div>
                          <div className="flex items-center mt-1 text-gray-600">
                            <Mail className="h-4 w-4 mr-2 text-blue-500" />
                            <a href="mailto:health@campus.edu" className="text-blue-600 hover:underline">
                              health@campus.edu
                            </a>
                          </div>
                          <div className="flex items-center mt-1 text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">Student Center, First Floor</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1 text-amber-500" />
                          <span className="text-sm font-medium">Mon-Fri, 8am-5pm</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Badge className="bg-blue-500">Nurse on duty</Badge>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                          <Phone className="h-4 w-4 mr-1" />
                          Call Health Center
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border hover:shadow-md transition-shadow bg-white">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-lg">Local Hospital</h3>
                          <div className="flex items-center mt-2 text-gray-600">
                            <Phone className="h-4 w-4 mr-2 text-red-500" />
                            <a href="tel:555-555-5555" className="text-blue-600 hover:underline">
                              555-555-5555
                            </a>
                          </div>
                          <div className="flex items-center mt-1 text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">2.5 miles from campus</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1 text-amber-500" />
                          <span className="text-sm font-medium">24/7</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Badge className="bg-green-500">Emergency Room</Badge>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="crisis" className="m-0 p-4">
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border hover:shadow-md transition-shadow bg-white">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-lg">Crisis Counseling Center</h3>
                          <div className="flex items-center mt-2 text-gray-600">
                            <Phone className="h-4 w-4 mr-2 text-red-500" />
                            <a href="tel:555-123-4567" className="text-blue-600 hover:underline">
                              555-123-4567
                            </a>
                          </div>
                          <div className="flex items-center mt-1 text-gray-600">
                            <User className="h-4 w-4 mr-2 text-gray-500" />
                            <span className="text-sm">24/7 Crisis Counselor Available</span>
                          </div>
                        </div>
                        <Badge className="bg-purple-500">Confidential</Badge>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-600">
                          Professional mental health support available for all students 
                          and staff. All conversations are confidential.
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg border hover:shadow-md transition-shadow bg-white">
                      <h3 className="font-medium text-lg">National Hotlines</h3>
                      <div className="space-y-2 mt-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-blue-500" />
                            <span>Crisis Text Line</span>
                          </div>
                          <span className="text-sm">Text HOME to 741741</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-blue-500" />
                            <span>Suicide & Crisis Lifeline</span>
                          </div>
                          <span className="text-sm">988</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-red-50 border-red-200 border-t-4 border-t-red-500 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700">
                <AlertCircle className="h-5 w-5 mr-2" />
                Emergency Procedures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start bg-white p-3 rounded-lg border border-red-100">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-2">
                    1
                  </div>
                  <span>Stay calm and assess the situation</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg border border-red-100">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-2">
                    2
                  </div>
                  <span>For immediate emergencies, call Campus Security at 555-123-4567</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg border border-red-100">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-2">
                    3
                  </div>
                  <span>Follow instructions from campus safety personnel</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg border border-red-100">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center mr-2">
                    4
                  </div>
                  <span>For medical emergencies, proceed to the Health Center or call 911</span>
                </li>
              </ul>
              
              <div className="mt-4">
                <Button variant="destructive" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Services
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="flex items-center text-blue-800">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Safety Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full flex justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Campus Safety Guide
              </Button>
              <Button variant="outline" className="w-full flex justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Emergency Alert Settings
              </Button>
              <Button variant="outline" className="w-full flex justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Safety Training Videos
              </Button>
              
              <div className="pt-3 border-t mt-3">
                <h3 className="text-sm font-medium mb-2">Emergency Locations</h3>
                <div className="bg-blue-50 rounded-lg p-3 text-sm">
                  <div className="flex items-start mb-2">
                    <MapPin className="h-4 w-4 mr-1 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Emergency Call Boxes</p>
                      <p className="text-xs text-gray-600">Located throughout campus, marked in blue</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-1 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium">AED Locations</p>
                      <p className="text-xs text-gray-600">Available in all main buildings</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-amber-500 shadow-md">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
              <CardTitle className="flex items-center text-amber-800">
                <Bell className="h-5 w-5 mr-2 text-amber-600" />
                Weather Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-3 rounded-lg bg-green-50 border border-green-200 mb-4">
                <div className="font-medium text-green-800 flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-600" />
                  Current Status: Normal
                </div>
                <div className="text-sm text-green-700">No weather alerts at this time</div>
              </div>
              
              <div className="pt-3 space-y-3">
                <h3 className="text-sm font-medium">Recent Updates</h3>
                <div className="flex items-center justify-between text-sm border-b pb-2">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>July 12</span>
                  </div>
                  <span>All Clear</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>July 10</span>
                  </div>
                  <span>Thunderstorm Warning</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Subscribe to Weather Alerts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Emergency;
