import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, Search, MapPin, Building, Clock, ArrowRight, Phone, User } from "lucide-react";
import { buildingsData } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from "@/components/ui/slider";

// Translations for the map locations
const locationTranslations = {
  "Entrée / Sortie services et logement de fonction": "Entrance / Exit Services and Staff Housing",
  "Services généraux": "General Services",
  "Logement de fonction": "Staff Housing",
  "Studios": "Studios",
  "Poste transfo L. Surpresseur": "Transformer Station",
  "Département Info Industrielle": "Industrial Computing Department",
  "Département Info et Multimédia": "Computing and Multimedia Department",
  "Département élec et télécommunication": "Electronics and Telecommunications Department",
  "Département de Multimédia web": "Web Multimedia Department",
  "Secretariat Général": "General Secretariat",
  "Accueil": "Reception",
  "Entrée Administration": "Administration Entrance",
  "Entrée Principale": "Main Entrance",
  "Entrée Parking": "Parking Entrance"
};

// Interactive Campus Map Component
const InteractiveMap = ({ selectedBuilding, setSelectedBuilding }) => {
  const mapContainerRef = useRef(null);
  const mapImageRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [locations] = useState([
    { id: "services", name: "General Services", x: 32, y: 27, width: 10, height: 5 },
    { id: "staff_housing1", name: "Staff Housing", x: 46, y: 25, width: 8, height: 5 },
    { id: "studios", name: "Studios", x: 60, y: 25, width: 6, height: 5 },
    { id: "staff_housing2", name: "Staff Housing", x: 72, y: 30, width: 8, height: 5 },
    { id: "industrial", name: "Industrial Computing Department", x: 25, y: 50, width: 15, height: 7 },
    { id: "multimedia", name: "Computing and Multimedia Department", x: 65, y: 50, width: 15, height: 7 },
    { id: "electronics", name: "Electronics and Telecommunications Department", x: 25, y: 74, width: 15, height: 7 },
    { id: "web", name: "Web Multimedia Department", x: 65, y: 74, width: 15, height: 7 },
    { id: "secretariat", name: "General Secretariat", x: 25, y: 90, width: 10, height: 7 },
    { id: "reception", name: "Reception", x: 50, y: 90, width: 8, height: 5 }
  ]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleLocationClick = (location) => {
    // Find the corresponding building in the buildingsData or create a placeholder
    const building = buildingsData.find(b => b.name.includes(location.name)) || {
      id: location.id,
      name: location.name,
      floors: 2,
      rooms: 15,
      facilities: ["Computers", "Wi-Fi", "Projectors"]
    };
    setSelectedBuilding(building);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (mapContainerRef.current && mapContainerRef.current.contains(e.target)) {
        e.preventDefault();
        if (e.deltaY < 0) {
          handleZoomIn();
        } else {
          handleZoomOut();
        }
      }
    };

    const container = mapContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden border shadow-md bg-gray-50">
      <div
        ref={mapContainerRef}
        className="absolute inset-0 overflow-hidden cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          className="relative"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: '0 0',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          <img
            ref={mapImageRef}
            src="lovable-uploads/2b0d9c4f-7284-411d-b828-faf28ef42945.png"
            alt="Campus Map"
            className="max-w-none"
            style={{ width: '100%', height: 'auto' }}
          />
          
          {/* Location markers */}
          {locations.map((location) => (
            <div
              key={location.id}
              className={`absolute cursor-pointer hover:bg-blue-200 hover:bg-opacity-30 border-2 border-transparent 
                ${selectedBuilding?.id === location.id ? 'border-blue-500 bg-blue-100 bg-opacity-30' : ''}`}
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                width: `${location.width}%`,
                height: `${location.height}%`,
              }}
              onClick={() => handleLocationClick(location)}
            />
          ))}
        </div>
      </div>

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-lg">
        <Button variant="outline" size="icon" onClick={handleZoomIn} className="h-8 w-8">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleZoomOut} className="h-8 w-8">
          <ZoomOut className="h-4 w-4" />
        </Button>
      </div>

      {/* Zoom level slider */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-3">
        <ZoomOut className="h-4 w-4 text-gray-500" />
        <Slider
          value={[scale * 100]}
          min={50}
          max={200}
          step={10}
          onValueChange={(value) => setScale(value[0] / 100)}
          className="w-32"
        />
        <ZoomIn className="h-4 w-4 text-gray-500" />
        <span className="text-xs text-gray-500 ml-2">{Math.round(scale * 100)}%</span>
      </div>

      {/* Map legend */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg text-xs">
        <h4 className="font-semibold mb-1">Legend</h4>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Departments</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>Entrances</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span>Facilities</span>
        </div>
      </div>
    </div>
  );
};

const Map = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [activeTab, setActiveTab] = useState('buildings');

  const filteredBuildings = buildingsData.filter(building => 
    building.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    if (filteredBuildings.length > 0) {
      setSelectedBuilding(filteredBuildings[0]);
    }
  };

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building);
  };

  return (
    <>
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-800">Campus Map</h1>
        <p className="text-blue-600 mt-1 flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          Explore and locate buildings and facilities across the Computer Science University campus
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
          <InteractiveMap selectedBuilding={selectedBuilding} setSelectedBuilding={setSelectedBuilding} />
          
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
              Computer Labs
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
