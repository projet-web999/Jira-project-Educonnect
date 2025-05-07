
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { emergencyContactsData } from '@/data/mockData';
import { Bell, Phone, Mail, Clock, Shield, AlertCircle } from 'lucide-react';

const Emergency = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Emergency Contacts</h1>
        <p className="text-gray-500 mt-1">Access important campus emergency contacts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Campus Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyContactsData.map(contact => (
                  <div key={contact.id} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-lg">{contact.name}</h3>
                        <div className="flex items-center mt-2 text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                            {contact.phone}
                          </a>
                        </div>
                        <div className="flex items-center mt-1 text-gray-600">
                          <Mail className="h-4 w-4 mr-2" />
                          <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                            {contact.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">{contact.available}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700">
                <AlertCircle className="h-5 w-5 mr-2" />
                Emergency Procedures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-2 text-center">1.</div>
                  <span>Stay calm and assess the situation</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-2 text-center">2.</div>
                  <span>For immediate emergencies, call Campus Security at 555-123-4567</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-2 text-center">3.</div>
                  <span>Follow instructions from campus safety personnel</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[24px] mr-2 text-center">4.</div>
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
          
          <Card>
            <CardHeader>
              <CardTitle>Safety Resources</CardTitle>
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
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Weather Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 mb-4">
                <div className="font-medium">Current Status: Normal</div>
                <div className="text-sm text-gray-600">No weather alerts at this time</div>
              </div>
              <Button variant="outline" className="w-full">
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
