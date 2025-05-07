
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from "lucide-react";
import { buildingsData } from '@/data/mockData';

// Mock Map Component
const MockMap = ({ selectedBuilding }: { selectedBuilding: (typeof buildingsData)[0] | null }) => {
  return (
    <div className="map-container relative">
      {/* This would be replaced by a real map component in production */}
      <div className="absolute inset-0 bg-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h3 className="font-medium mb-2">Interactive Campus Map</h3>
          <p className="text-sm text-gray-600">
            {selectedBuilding 
              ? `Selected: ${selectedBuilding.name}` 
              : 'Click on a building from the list or search to select'}
          </p>
          <div className="mt-4 flex justify-center">
            {buildingsData.map((building) => (
              <div 
                key={building.id}
                className={`w-8 h-8 mx-1 rounded-full flex items-center justify-center 
                  ${selectedBuilding?.id === building.id ? 'bg-edu-primary text-white' : 'bg-white border'}`}
              >
                <MapPin className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Map = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState<(typeof buildingsData)[0] | null>(null);

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Campus Map</h1>
        <p className="text-gray-500 mt-1">Search and locate buildings on campus</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Find a Building</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  placeholder="Search buildings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-4 space-y-2 max-h-[400px] overflow-auto">
                {filteredBuildings.map(building => (
                  <div 
                    key={building.id}
                    onClick={() => handleBuildingClick(building)}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors
                      ${selectedBuilding?.id === building.id 
                        ? 'bg-blue-50 border-blue-200' 
                        : 'hover:bg-gray-50'}`}
                  >
                    <div className="font-medium">{building.name}</div>
                    <div className="text-sm text-gray-600">
                      {building.floors} floors • {building.rooms} rooms
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedBuilding && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedBuilding.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Floors</dt>
                    <dd>{selectedBuilding.floors}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Total Rooms</dt>
                    <dd>{selectedBuilding.rooms}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Facilities</dt>
                    <dd>
                      <ul className="list-disc list-inside">
                        {selectedBuilding.facilities.map((facility, index) => (
                          <li key={index} className="text-sm">{facility}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="md:col-span-2">
          <MockMap selectedBuilding={selectedBuilding} />
        </div>
      </div>
    </>
  );
};

export default Map;
