
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Apple, Coffee, Salad, UtensilsCrossed, Clock, CalendarDays, AlarmClock } from "lucide-react";

const CafeteriaMenu = () => {
  const [selectedDay, setSelectedDay] = useState<string>("monday");
  
  const menuItems = {
    monday: [
      {
        id: 1,
        mealType: "Breakfast",
        timeRange: "7:30 AM - 9:00 AM",
        items: [
          { name: "Scrambled Eggs", type: "Main", dietary: ["protein", "gluten-free"] },
          { name: "Pancakes", type: "Main", dietary: ["vegetarian"] },
          { name: "Fresh Fruit", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Yogurt", type: "Side", dietary: ["vegetarian"] },
          { name: "Orange Juice", type: "Drink", dietary: ["vegan", "gluten-free"] },
          { name: "Coffee/Tea", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Gluten-free pancakes available upon request."
      },
      {
        id: 2,
        mealType: "Lunch",
        timeRange: "11:30 AM - 1:30 PM",
        items: [
          { name: "Grilled Chicken Sandwich", type: "Main", dietary: ["protein"] },
          { name: "Vegetable Pasta", type: "Main", dietary: ["vegetarian"] },
          { name: "Garden Salad", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Sweet Potato Fries", type: "Side", dietary: ["vegan"] },
          { name: "Apple", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Water/Juice", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Whole grain bread option available."
      },
      {
        id: 3,
        mealType: "Dinner",
        timeRange: "5:30 PM - 7:30 PM",
        items: [
          { name: "Roast Beef", type: "Main", dietary: ["protein", "gluten-free"] },
          { name: "Vegetable Curry", type: "Main", dietary: ["vegan"] },
          { name: "Mashed Potatoes", type: "Side", dietary: ["vegetarian", "gluten-free"] },
          { name: "Steamed Vegetables", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Rice Pudding", type: "Dessert", dietary: ["vegetarian"] },
          { name: "Water/Tea/Coffee", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Dairy-free options available for mashed potatoes."
      }
    ],
    tuesday: [
      {
        id: 1,
        mealType: "Breakfast",
        timeRange: "7:30 AM - 9:00 AM",
        items: [
          { name: "Oatmeal Bar", type: "Main", dietary: ["vegetarian"] },
          { name: "Breakfast Burrito", type: "Main", dietary: ["protein"] },
          { name: "Fresh Fruit", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Yogurt", type: "Side", dietary: ["vegetarian"] },
          { name: "Orange Juice", type: "Drink", dietary: ["vegan", "gluten-free"] },
          { name: "Coffee/Tea", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Gluten-free wrap available upon request."
      },
      {
        id: 2,
        mealType: "Lunch",
        timeRange: "11:30 AM - 1:30 PM",
        items: [
          { name: "Turkey & Cheese Wrap", type: "Main", dietary: ["protein"] },
          { name: "Quinoa Bowl", type: "Main", dietary: ["vegan", "gluten-free"] },
          { name: "Caesar Salad", type: "Side", dietary: ["vegetarian"] },
          { name: "Potato Chips", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Banana", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Water/Juice", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Vegan Caesar dressing available."
      },
      {
        id: 3,
        mealType: "Dinner",
        timeRange: "5:30 PM - 7:30 PM",
        items: [
          { name: "Baked Salmon", type: "Main", dietary: ["protein", "gluten-free"] },
          { name: "Spinach Lasagna", type: "Main", dietary: ["vegetarian"] },
          { name: "Roasted Potatoes", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Green Beans", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Chocolate Pudding", type: "Dessert", dietary: ["vegetarian"] },
          { name: "Water/Tea/Coffee", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Dairy-free chocolate pudding available."
      }
    ],
    wednesday: [
      {
        id: 1,
        mealType: "Breakfast",
        timeRange: "7:30 AM - 9:00 AM",
        items: [
          { name: "French Toast", type: "Main", dietary: ["vegetarian"] },
          { name: "Veggie Omelet", type: "Main", dietary: ["vegetarian", "gluten-free"] },
          { name: "Fresh Fruit", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Yogurt Parfait", type: "Side", dietary: ["vegetarian"] },
          { name: "Apple Juice", type: "Drink", dietary: ["vegan", "gluten-free"] },
          { name: "Coffee/Tea", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Sugar-free syrup available."
      },
      {
        id: 2,
        mealType: "Lunch",
        timeRange: "11:30 AM - 1:30 PM",
        items: [
          { name: "Pizza Bar", type: "Main", dietary: ["vegetarian"] },
          { name: "Black Bean Burger", type: "Main", dietary: ["vegan"] },
          { name: "Mixed Greens", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Baked Chips", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Orange", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Water/Juice", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Gluten-free pizza crust available."
      },
      {
        id: 3,
        mealType: "Dinner",
        timeRange: "5:30 PM - 7:30 PM",
        items: [
          { name: "Stir-Fry Station", type: "Main", dietary: ["customizable"] },
          { name: "Tofu Option", type: "Main", dietary: ["vegan", "gluten-free"] },
          { name: "Chicken Option", type: "Main", dietary: ["protein", "gluten-free"] },
          { name: "Brown Rice", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Fresh Fruit", type: "Dessert", dietary: ["vegan", "gluten-free"] },
          { name: "Water/Tea/Coffee", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Allergen-free stir-fry station available."
      }
    ],
    thursday: [
      {
        id: 1,
        mealType: "Breakfast",
        timeRange: "7:30 AM - 9:00 AM",
        items: [
          { name: "Breakfast Sandwich", type: "Main", dietary: ["protein"] },
          { name: "Waffles", type: "Main", dietary: ["vegetarian"] },
          { name: "Fresh Fruit", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Yogurt", type: "Side", dietary: ["vegetarian"] },
          { name: "Orange Juice", type: "Drink", dietary: ["vegan", "gluten-free"] },
          { name: "Coffee/Tea", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Egg-free waffles available upon request."
      },
      {
        id: 2,
        mealType: "Lunch",
        timeRange: "11:30 AM - 1:30 PM",
        items: [
          { name: "Taco Bar", type: "Main", dietary: ["customizable"] },
          { name: "Bean Option", type: "Main", dietary: ["vegan", "gluten-free"] },
          { name: "Beef Option", type: "Main", dietary: ["protein", "gluten-free"] },
          { name: "Spanish Rice", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Corn", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Water/Juice", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Corn tortillas available for gluten-free option."
      },
      {
        id: 3,
        mealType: "Dinner",
        timeRange: "5:30 PM - 7:30 PM",
        items: [
          { name: "Roast Turkey", type: "Main", dietary: ["protein", "gluten-free"] },
          { name: "Eggplant Parmesan", type: "Main", dietary: ["vegetarian"] },
          { name: "Mashed Sweet Potatoes", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Broccoli", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Apple Crisp", type: "Dessert", dietary: ["vegetarian"] },
          { name: "Water/Tea/Coffee", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Vegan apple crisp available."
      }
    ],
    friday: [
      {
        id: 1,
        mealType: "Breakfast",
        timeRange: "7:30 AM - 9:00 AM",
        items: [
          { name: "Cereal Bar", type: "Main", dietary: ["vegetarian"] },
          { name: "Breakfast Potatoes", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Fresh Fruit", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Yogurt", type: "Side", dietary: ["vegetarian"] },
          { name: "Orange Juice", type: "Drink", dietary: ["vegan", "gluten-free"] },
          { name: "Coffee/Tea", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Gluten-free cereal options available."
      },
      {
        id: 2,
        mealType: "Lunch",
        timeRange: "11:30 AM - 1:30 PM",
        items: [
          { name: "Fish & Chips", type: "Main", dietary: ["protein"] },
          { name: "Falafel Wrap", type: "Main", dietary: ["vegan"] },
          { name: "Coleslaw", type: "Side", dietary: ["vegetarian", "gluten-free"] },
          { name: "French Fries", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Grapes", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Water/Juice", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Baked fish option available."
      },
      {
        id: 3,
        mealType: "Dinner",
        timeRange: "5:30 PM - 7:30 PM",
        items: [
          { name: "BBQ Chicken", type: "Main", dietary: ["protein", "gluten-free"] },
          { name: "Veggie Burger", type: "Main", dietary: ["vegan"] },
          { name: "Corn on the Cob", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Baked Beans", type: "Side", dietary: ["vegan", "gluten-free"] },
          { name: "Brownies", type: "Dessert", dietary: ["vegetarian"] },
          { name: "Water/Tea/Coffee", type: "Drink", dietary: ["vegan", "gluten-free"] }
        ],
        specialNote: "Vegan brownies available."
      }
    ]
  };

  const getDietaryBadge = (dietary: string) => {
    switch (dietary) {
      case "vegan":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Vegan</Badge>;
      case "vegetarian":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">Vegetarian</Badge>;
      case "gluten-free":
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">Gluten-Free</Badge>;
      case "protein":
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Protein</Badge>;
      case "customizable":
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">Customizable</Badge>;
      default:
        return null;
    }
  };

  const getMealIcon = (mealType: string) => {
    switch (mealType.toLowerCase()) {
      case "breakfast":
        return <Coffee className="h-5 w-5" />;
      case "lunch":
        return <UtensilsCrossed className="h-5 w-5" />;
      case "dinner":
        return <Salad className="h-5 w-5" />;
      default:
        return <Apple className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Cafeteria Menu</h1>
        <p className="text-muted-foreground mt-2">
          View this week's cafeteria menu and nutritional information
        </p>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <CalendarDays className="h-5 w-5 text-muted-foreground" />
        <span className="text-muted-foreground">Weekly Menu: May 6 - May 10, 2025</span>
      </div>

      <Tabs defaultValue="monday" value={selectedDay} onValueChange={setSelectedDay} className="w-full">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="monday">Monday</TabsTrigger>
          <TabsTrigger value="tuesday">Tuesday</TabsTrigger>
          <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
          <TabsTrigger value="thursday">Thursday</TabsTrigger>
          <TabsTrigger value="friday">Friday</TabsTrigger>
        </TabsList>

        {Object.keys(menuItems).map((day) => (
          <TabsContent key={day} value={day} className="space-y-6">
            {menuItems[day as keyof typeof menuItems].map((meal) => (
              <Card key={meal.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 pb-3 flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getMealIcon(meal.mealType)}
                    <CardTitle className="text-lg">{meal.mealType}</CardTitle>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {meal.timeRange}
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <UtensilsCrossed className="h-4 w-4" /> Main Options
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {meal.items
                          .filter((item) => item.type === "Main")
                          .map((item, idx) => (
                            <li key={idx} className="flex flex-col">
                              <span>{item.name}</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.dietary.map((diet, dietIdx) => (
                                  <span key={dietIdx}>{getDietaryBadge(diet)}</span>
                                ))}
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Apple className="h-4 w-4" /> Sides & Drinks
                      </h3>
                      <ul className="space-y-2 text-sm">
                        {meal.items
                          .filter((item) => item.type === "Side" || item.type === "Drink")
                          .map((item, idx) => (
                            <li key={idx} className="flex flex-col">
                              <span>{item.name}</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.dietary.map((diet, dietIdx) => (
                                  <span key={dietIdx}>{getDietaryBadge(diet)}</span>
                                ))}
                              </div>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <AlarmClock className="h-4 w-4" /> Notes & Dessert
                      </h3>
                      {meal.items.filter((item) => item.type === "Dessert").length > 0 && (
                        <ul className="space-y-2 text-sm mb-3">
                          {meal.items
                            .filter((item) => item.type === "Dessert")
                            .map((item, idx) => (
                              <li key={idx} className="flex flex-col">
                                <span>{item.name}</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {item.dietary.map((diet, dietIdx) => (
                                    <span key={dietIdx}>{getDietaryBadge(diet)}</span>
                                  ))}
                                </div>
                              </li>
                            ))}
                        </ul>
                      )}
                      <div className="text-sm italic text-muted-foreground">
                        <p>{meal.specialNote}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Dietary Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center gap-2">
              {getDietaryBadge("vegan")}
              <span className="text-sm">Vegan</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              {getDietaryBadge("vegetarian")}
              <span className="text-sm">Vegetarian</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              {getDietaryBadge("gluten-free")}
              <span className="text-sm">Gluten-Free</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              {getDietaryBadge("protein")}
              <span className="text-sm">Protein</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              {getDietaryBadge("customizable")}
              <span className="text-sm">Customizable</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            For specific allergen information or special dietary accommodations, please contact the cafeteria staff at least 24 hours in advance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CafeteriaMenu;
