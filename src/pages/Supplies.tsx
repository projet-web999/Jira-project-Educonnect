
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Laptop, 
  PlusCircle, 
  Microchip, 
  Database, 
  Server, 
  CheckCircle,
  Calendar 
} from 'lucide-react';

// Mock data for tech supplies needed
const suppliesNeeded = [
  { id: 1, name: 'Raspberry Pi 4 Kits', quantity: 30, requestedDate: '2023-05-02', status: 'needed' },
  { id: 2, name: 'USB Type-C Cables', quantity: 50, requestedDate: '2023-05-05', status: 'needed' },
  { id: 3, name: 'Arduino Sensors', quantity: 15, requestedDate: '2023-05-10', status: 'needed' },
  { id: 4, name: 'HDMI Cables', quantity: 20, requestedDate: '2023-05-15', status: 'needed' },
];

// Mock data for tech supplies donated
const suppliesDonated = [
  { id: 1, name: 'USB Drives (32GB)', quantity: 50, donatedBy: 'Tech Solutions Inc.', donationDate: '2023-04-15', status: 'received' },
  { id: 2, name: 'Wireless Mice', quantity: 30, donatedBy: 'Computing Systems Ltd.', donationDate: '2023-04-20', status: 'received' },
  { id: 3, name: 'Laptop Cooling Pads', quantity: 25, donatedBy: 'Digital Hardware Corp.', donationDate: '2023-04-28', status: 'received' },
];

const Supplies = () => {
  const [supplyName, setSupplyName] = useState('');
  const [supplyQuantity, setSupplyQuantity] = useState('');
  const [activeTab, setActiveTab] = useState('needed');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleAddSupply = () => {
    if (!supplyName || !supplyQuantity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Supply Request Added",
        description: `${supplyQuantity} ${supplyName} have been added to your needs list.`,
      });
      
      setSupplyName('');
      setSupplyQuantity('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tech Equipment Supplies</h1>
        <p className="text-gray-500 mt-1">Track and manage computer science lab equipment and technical supplies</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Equipment Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="needed" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="needed">Supplies Needed</TabsTrigger>
                  <TabsTrigger value="donated">Donations Received</TabsTrigger>
                </TabsList>
                
                <TabsContent value="needed" className="pt-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-4 bg-muted/50 font-medium">
                      <div className="col-span-5">Item</div>
                      <div className="col-span-2 text-center">Quantity</div>
                      <div className="col-span-3">Requested Date</div>
                      <div className="col-span-2">Status</div>
                    </div>
                    
                    {suppliesNeeded.map(item => (
                      <div key={item.id} className="grid grid-cols-12 p-4 border-t items-center">
                        <div className="col-span-5">{item.name}</div>
                        <div className="col-span-2 text-center">{item.quantity}</div>
                        <div className="col-span-3">{item.requestedDate}</div>
                        <div className="col-span-2">
                          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800">
                            Needed
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="donated" className="pt-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 p-4 bg-muted/50 font-medium">
                      <div className="col-span-4">Item</div>
                      <div className="col-span-2 text-center">Quantity</div>
                      <div className="col-span-3">Donated By</div>
                      <div className="col-span-3">Status</div>
                    </div>
                    
                    {suppliesDonated.map(item => (
                      <div key={item.id} className="grid grid-cols-12 p-4 border-t items-center">
                        <div className="col-span-4">{item.name}</div>
                        <div className="col-span-2 text-center">{item.quantity}</div>
                        <div className="col-span-3">{item.donatedBy}</div>
                        <div className="col-span-3">
                          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                            Received
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Supply Need</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="supply-name" className="text-sm font-medium">Supply Name</label>
                  <Input 
                    id="supply-name" 
                    placeholder="e.g., Hard Drives, Monitors, Cables"
                    value={supplyName}
                    onChange={(e) => setSupplyName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="quantity" className="text-sm font-medium">Quantity Needed</label>
                  <Input 
                    id="quantity" 
                    type="number"
                    placeholder="Enter quantity" 
                    value={supplyQuantity}
                    onChange={(e) => setSupplyQuantity(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full"
                  onClick={handleAddSupply}
                  disabled={isSubmitting}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Adding..." : "Add to Needs List"}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Supply Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex items-center space-x-2">
                    <Microchip className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Needed</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">4 items</div>
                </div>
                <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Received</span>
                  </div>
                  <div className="text-2xl font-bold mt-2">3 items</div>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-medium mb-2">Most Needed Items</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between text-sm">
                    <span>Raspberry Pi 4 Kits</span>
                    <span className="font-medium">30</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>USB Type-C Cables</span>
                    <span className="font-medium">50</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>HDMI Cables</span>
                    <span className="font-medium">20</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Donation Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Drop-off Times</h3>
                  <p className="text-sm text-gray-600">Mon-Fri, 8:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Laptop className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">How to Donate</h3>
                  <p className="text-sm text-gray-600">
                    Bring equipment to the IT Department labeled with lab name and room number.
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Print Equipment List
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Supplies;
