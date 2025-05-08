
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { emergencyContactsData } from "@/data/mockData";
import { PhoneCall, Mail, Clock, AlertCircle } from "lucide-react";

const Emergency = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Emergency & IT Support Contacts</h1>
        <p className="text-gray-500 mt-1">Important contacts for technical support and emergencies</p>
      </div>

      <Card className="mb-6 border-red-200 bg-red-50">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-red-700">Campus Emergency Procedures</h2>
              <p className="mt-1 text-red-700">
                In case of emergency, first ensure your safety, then contact campus security or the appropriate emergency service.
              </p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700" size="lg">
              <PhoneCall className="mr-2 h-4 w-4" /> Call Campus Security
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {emergencyContactsData.map((contact) => (
          <Card key={contact.id} className="h-full">
            <CardHeader>
              <CardTitle>{contact.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 text-blue-500 mr-2" />
                  <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">
                    {contact.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-2" />
                  <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                    {contact.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-500">Available: {contact.available}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Emergency;
