
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Building, ArrowRight, Phone, Clock, User } from "lucide-react";
import { buildingsData } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock Map Component
const MockMap = ({ selectedBuilding }: { selectedBuilding: (typeof buildingsData)[0] | null }) => {
  return (
    <div className="map-container relative h-[500px] rounded-xl overflow-hidden border shadow-md">
      {/* This would be replaced by a real map component in production */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <Building className="h-12 w-12 text-blue-500 mx-auto mb-2" />
          <h3 className="font-medium text-lg text-blue-800 mb-2">Interactive Campus Map</h3>
          <p className="text-sm text-blue-700 mb-4">
            {selectedBuilding 
              ? `Selected: ${selectedBuilding.name}` 
              : 'Click on a building from the list or search to select'}
          </p>
          <div className="mt-6 flex justify-center flex-wrap gap-3">
            {buildingsData.map((building) => (
              <div 
                key={building.id}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all 
                  ${selectedBuilding?.id === building.id ? 'bg-blue-500 text-white shadow-lg scale-110' : 'bg-white border shadow-sm hover:scale-105'}`}
              >
                <MapPin className="h-5 w-5" />
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-4 gap-2">
            {['Library', 'Cafeteria', 'Gym', 'Admin'].map((poi) => (
              <div key={poi} className="bg-white bg-opacity-70 rounded px-2 py-1 text-xs font-medium">
                {poi}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Building tooltip when selected */}
      {selectedBuilding && (
        <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-blue-200">
          <div className="font-bold text-blue-800">{selectedBuilding.name}</div>
          <div className="text-sm text-gray-600 mt-1">
            {selectedBuilding.floors} floors • {selectedBuilding.rooms} rooms
          </div>
          <Button size="sm" className="mt-2 bg-blue-500 hover:bg-blue-600 w-full">
            Get Directions
          </Button>
        </div>
      )}
    </div>
  );
};

const Map = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState<(typeof buildingsData)[0] | null>(null);
  const [activeTab, setActiveTab] = useState('buildings');

  const filteredBuildings = buildingsData.filter(building => 
    building.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    if (filteredBuildings.length > 0) {
      setSelectedBuilding(filteredBuildings[0]);
    }
  };

  const handleBuildingClick = (building: typeof selectedBuilding) => {
    setSelectedBuilding(building);
  };

  return (
    <>
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-800">Campus Map</h1>
        <p className="text-blue-600 mt-1 flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          Explore and locate buildings and facilities across campus
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="border-t-4 border-t-blue-500 shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
              <CardTitle className="flex items-center text-blue-800">
                <Search className="h-5 w-5 mr-2 text-blue-600" />
                Find a Building
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Search buildings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 border-blue-200 focus:border-blue-500"
                />
                <Button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <Tabs defaultValue="buildings" className="mt-4" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="buildings">Buildings</TabsTrigger>
                  <TabsTrigger value="facilities">Facilities</TabsTrigger>
                </TabsList>
                
                <TabsContent value="buildings">
                  <div className="mt-2 space-y-2 max-h-[400px] overflow-auto pr-1">
                    {filteredBuildings.map(building => (
                      <div 
                        key={building.id}
                        onClick={() => handleBuildingClick(building)}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors
                          ${selectedBuilding?.id === building.id 
                            ? 'bg-blue-50 border-blue-200 shadow-sm' 
                            : 'hover:bg-gray-50'}`}
                      >
                        <div className="font-medium flex items-center">
                          <Building className="h-4 w-4 mr-2 text-blue-600" />
                          {building.name}
                        </div>
                        <div className="text-sm text-gray-600 mt-1 flex items-center">
                          <MapPin className="h-3 w-3 mr-1 text-red-500" />
                          Central Campus
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {building.floors} floors • {building.rooms} rooms
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="facilities">
                  <div className="mt-2 space-y-2">
                    {['Library', 'Student Center', 'Cafeteria', 'Sports Complex', 'Parking Lots'].map((facility) => (
                      <div 
                        key={facility}
                        className="p-3 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium flex items-center">
                          {facility}
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="text-xs text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Open now
                          </div>
                          <Button size="sm" variant="ghost" className="h-7 text-xs flex items-center">
                            Details
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {selectedBuilding && (
            <Card className="border-t-4 border-t-blue-500 shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex items-center justify-between">
                  <CardTitle>{selectedBuilding.name}</CardTitle>
                  <Badge>{selectedBuilding.id.startsWith('academic') ? 'Academic' : 'Administrative'}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-blue-600 mb-1">Floors</div>
                    <div className="text-xl font-bold text-blue-800">{selectedBuilding.floors}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-green-600 mb-1">Rooms</div>
                    <div className="text-xl font-bold text-green-800">{selectedBuilding.rooms}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-red-500" />
                      Location
                    </h3>
                    <p className="text-sm bg-gray-50 p-2 rounded">Central Campus, East Quad</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-amber-500" />
                      Hours
                    </h3>
                    <p className="text-sm bg-gray-50 p-2 rounded">Mon-Fri: 7:00 AM - 10:00 PM</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-blue-500" />
                      Contact
                    </h3>
                    <p className="text-sm bg-gray-50 p-2 rounded">(555) 123-4567</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Facilities</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedBuilding.facilities.map((facility, index) => (
                        <li key={index} className="text-sm">{facility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Hours & Info
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <User className="h-3 w-3 mr-1" />
                    Faculty List
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="md:col-span-2">
          <MockMap selectedBuilding={selectedBuilding} />
          
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Button variant="outline" size="sm" className="flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-1" />
              Accessibility
            </Button>
            <Button variant="outline" size="sm" className="flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-1" />
              Parking
            </Button>
            <Button variant="outline" size="sm" className="flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-1" />
              Shuttle Stops
            </Button>
            <Button variant="outline" size="sm" className="flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-1" />
              Print Map
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
