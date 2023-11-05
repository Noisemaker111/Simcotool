const productData = [
    {
      Product: "Seeds", 
      "Price on Exchange": 0.22,
      "Units Per Hour": 889.63,
      "Per Unit Worker Cost": 0.12, 
      "Transport Units Required per Unit": 0.1,
      "Per Unit Admin Cost": 0,
      Ingredients: "0.1Water"
    },
    {
      Product: "Apples",
      "Price on Exchange": 1.94,
      "Units Per Hour": 202.19, 
      "Per Unit Worker Cost": 0.51,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.01,
      Ingredients: "1Seeds,3Water"
    },
    {
      Product: "Oranges",
      "Price on Exchange": 1.93,
      "Units Per Hour": 186.01,
      "Per Unit Worker Cost": 0.56,
      "Transport Units Required per Unit": 1, 
      "Per Unit Admin Cost": 0.01,
      Ingredients: "1Seeds,3Water"
    },
    {
      Product: "Grapes",
      "Price on Exchange": 2.4,
      "Units Per Hour": 161.75,
      "Per Unit Worker Cost": 0.64,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0,
      Ingredients: "1Seeds,4Water"
    },
    {
      Product: "Grain",
      "Price on Exchange": 0.55,
      "Units Per Hour": 808.75,
      "Per Unit Worker Cost": 0.13,
      "Transport Units Required per Unit": 0.1,
      "Per Unit Admin Cost": 0,
      Ingredients: "1Seeds,0.5Water"
    },
    {
      Product: "Cows",
      "Price on Exchange": 108,
      "Units Per Hour": 37.68,
      "Per Unit Worker Cost": 3.66,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.02,
      Ingredients: "12Fodder,16Water"
    },
    {
      Product: "Pigs",
      "Price on Exchange": 34,
      "Units Per Hour": 82.89, 
      "Per Unit Worker Cost": 1.66,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.01,
      Ingredients: "4Fodder,4Water"
    },
    {
      Product: "Coffee Beans",
      "Price on Exchange": 0.8,
      "Units Per Hour": 412.46,
      "Per Unit Worker Cost": 0.25,
      "Transport Units Required per Unit": 0.1,
      "Per Unit Admin Cost": 0,
      Ingredients: "1Seeds,0.5Water"
    },
    {
      Product: "Vegetables",
      "Price on Exchange": 2.05,
      "Units Per Hour": 283.06,
      "Per Unit Worker Cost": 0.37,
      "Transport Units Required per Unit": 0.2,
      "Per Unit Admin Cost": 0, 
      Ingredients: "5Seeds,2Water"
    },
    {
      Product: "Fodder",
      "Price on Exchange": 8.7,
      "Units Per Hour": 284.7,
      "Per Unit Worker Cost": 1.33,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.01,
      Ingredients: "10Grain,0.5Vegetables"
    },
    {
      Product: "Cotton",
      "Price on Exchange": 1.26,
      "Units Per Hour": 243,
      "Per Unit Worker Cost": 0.43,
      "Transport Units Required per Unit": 0.5,
      "Per Unit Admin Cost": 0,
      Ingredients: "1Seeds,1Water"
    },
    {
      Product: "SugarCane",
      "Price on Exchange": 1.3,
      "Units Per Hour": 647,
      "Per Unit Worker Cost": 0.16,
      "Transport Units Required per Unit": 0.1,
      "Per Unit Admin Cost": 0,
      Ingredients: "1Seeds,3Water"
    },
    {
      Product: "Cocoa",
      "Price on Exchange": 1.5,
      "Units Per Hour": 169.84,
      "Per Unit Worker Cost": 0.61,
      "Transport Units Required per Unit": 0.1,
      "Per Unit Admin Cost": 0,
      Ingredients: "1Seeds,1Water"
    },
    {
      Product: "Steak",
      "Price on Exchange": 33.5,
      "Units Per Hour": 25.67,
      "Per Unit Worker Cost": 16.13,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.09,
      Ingredients: "0.125Cows"
    },
    {
      Product: "Sausages",
      "Price on Exchange": 9.4,
      "Units Per Hour": 77.01,
      "Per Unit Worker Cost": 5.38,
      "Transport Units Required per Unit": 0.1,
      "Per Unit Admin Cost": 0.03,
      Ingredients: "0.0625Pigs" 
    },
    {
      Product: "Eggs",
      "Price on Exchange": 1.03,
      "Units Per Hour": 316.47,
      "Per Unit Worker Cost": 0.44,
      "Transport Units Required per Unit": 0.1, 
      "Per Unit Admin Cost": 0,
      Ingredients: "0.5Grain 0.4Water"
    },
    {
      Product: "Coffee Powder",
      "Price on Exchange": 28.75,
      "Units Per Hour": 22.96,
      "Per Unit Worker Cost": 16.53,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.1,
      Ingredients: "10Coffee Beans"
    },
    {
      Product: "Milk",
      "Price on Exchange": 6.8,
      "Units Per Hour": 120.56,
      "Per Unit Worker Cost": 1.14,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.01,
      Ingredients: "0.5Fodder,2Water"
    },
    {
      Product: "Orange Juice",
      "Price on Exchange": 31.75, 
      "Units Per Hour": 91.41,
      "Per Unit Worker Cost": 2.64,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.02,
      Ingredients: "5Oranges,1Sugar"
    },
    {
      Product: "Apple Cider",
      "Price on Exchange": 23,
      "Units Per Hour": 36.56,
      "Per Unit Worker Cost": 6.6,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.04,
      Ingredients: "8Apples"
    },
    {
      Product: "Ginger Beer",
      "Price on Exchange": 46.5,
      "Units Per Hour": 73.13,
      "Per Unit Worker Cost": 3.3, 
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.02,
      Ingredients: "3Vegetables,2Sugar,1Water"
    },
    {
      Product: "Chocolate",
      "Price on Exchange": 232,
      "Units Per Hour": 3.21,
      "Per Unit Worker Cost": 118.06,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.69,
      Ingredients: "10Cocoa,0.5Milk,1Sugar"
    },
    {
      Product: "Sugar", 
      "Price on Exchange": 17.4,
      "Units Per Hour": 41.33,
      "Per Unit Worker Cost": 9.18,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.05,
      Ingredients: "1SugarCane,0.5Power"
    },
    {
      Product: "Dough",
      "Price on Exchange": 109,
      "Units Per Hour": 11.96,
      "Per Unit Worker Cost": 37.51,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.22,
      Ingredients: "1Eggs,2Flour,0.5Butter"
    },
    {
      Product: "Sauce",
      "Price on Exchange": 1170,
      "Units Per Hour": 0.78,
      "Per Unit Worker Cost": 838.07,
      "Transport Units Required per Unit": 2, 
      "Per Unit Admin Cost": 4.93,
      Ingredients: "2Vegetables,0.5Butter,0.5Water"
    },
    {
      Product: "Flour",
      "Price on Exchange": 12.9,
      "Units Per Hour": 87.25,
      "Per Unit Worker Cost": 4.35,
      "Transport Units Required per Unit": 0.1,
      "Per Unit Admin Cost": 0.03,
      Ingredients: "15Grain"
    },
    {
      Product: "Bread",
      "Price on Exchange": 158,
      "Units Per Hour": 11.96,
      "Per Unit Worker Cost": 37.51, 
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.22,
      Ingredients: "1Dough"
    }, 
    {
      Product: "Apple Pie", 
      "Price on Exchange": 258,
      "Units Per Hour": 5.98,
      "Per Unit Worker Cost": 75.01,
      "Transport Units Required per Unit": 2,
      "Per Unit Admin Cost": 0.44, 
      Ingredients: "2Apples,1Sugar,1Dough"
    },
    {
      Product: "Frozen Pizza",
      "Price on Exchange": 438,
      "Units Per Hour": 9.18, 
      "Per Unit Worker Cost": 41.32,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.24,
      Ingredients: "2Vegetables,1Sausages,2Dough,1Cheese"
    },
    {
      Product: "Pasta",
      "Price on Exchange": 49,
      "Units Per Hour": 18.37,
      "Per Unit Worker Cost": 50.66,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.12,
      Ingredients: "2Eggs,2Flour,1Pasta"
    },
    {
      Product: "Butter",
      "Price on Exchange": 46.5,
      "Units Per Hour": 13.78,
      "Per Unit Worker Cost": 27.55,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.16,
      Ingredients: "0.5Milk"
    },
    {
      Product: "Cheese", 
      "Price on Exchange": 127,
      "Units Per Hour": 5.51,
      "Per Unit Worker Cost": 68.87,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.41,
      Ingredients: "1Milk"
    },
    {
      Product: "Hamburger",
      "Price on Exchange": 2000, 
      "Units Per Hour": 0.52,
      "Per Unit Worker Cost": 1257.11,
      "Transport Units Required per Unit": 2,
      "Per Unit Admin Cost": 7.39,
      Ingredients: "3Vegetables,4Steak,0.5Bread,1Butter,0.5Vegetable Oil"
    },
    {
      Product: "Lasagna",
      "Price on Exchange": 1940,
      "Units Per Hour": 1.56,
      "Per Unit Worker Cost": 419.04,
      "Transport Units Required per Unit": 2,
      "Per Unit Admin Cost": 2.46,
      Ingredients: "1Steak,1Sauce,0.5Cheese"
    },
    {
      Product: "Meat Balls",
      "Price on Exchange": 2160,
      "Units Per Hour": 1.04,
      "Per Unit Worker Cost": 628.55,
      "Transport Units Required per Unit": 2,
      "Per Unit Admin Cost": 3.7,
      Ingredients: "2Sausages,1Sauce,1Bread,0.5Vegetable Oil"
    },
    {
      Product: "CockTails",
      "Price on Exchange": 2110,
      "Units Per Hour": 0.52,
      "Per Unit Worker Cost": 1257.11,
      "Transport Units Required per Unit": 2,
      "Per Unit Admin Cost": 7.39,
      Ingredients: "8Coffee Powder,1Orange Juice,1Apple Cider,2Ginger Beer"
    },
    {
      Product: "Vegetable Oil",
      "Price on Exchange": 34,
      "Units Per Hour": 36.74,
      "Per Unit Worker Cost": 10.33,
      "Transport Units Required per Unit": 1, 
      "Per Unit Admin Cost": 0.06,
      Ingredients: "10Vegetables,1Power"
    },
    {
      Product: "Salad",
      "Price on Exchange": 755,
      "Units Per Hour": 2.09,
      "Per Unit Worker Cost": 314.28,
      "Transport Units Required per Unit": 2,
      "Per Unit Admin Cost": 1.85,
      Ingredients: "2Cheese,0.5Vegetable Oil"
    },
    {
      Product: "Samosa",
      "Price on Exchange": 615,
      "Units Per Hour": 1.83,
      "Per Unit Worker Cost": 359.17,
      "Transport Units Required per Unit": 2,
      "Per Unit Admin Cost": 2.11,
      Ingredients: "5Vegetables,4Flour,1Vegetable Oil"
    },
    {
      Product: "Reinforced Concrete",
      "Price on Exchange": 185,
      "Units Per Hour": 188.27,
      "Per Unit Worker Cost": 2.02,
      "Transport Units Required per Unit": 10,
      "Per Unit Admin Cost": 0.01, 
      Ingredients: "15Cement,20Water,5Steel,20Sand"
    },
    {
      Product: "Bricks",
      "Price on Exchange": 2.4,
      "Units Per Hour": 367.35,
      "Per Unit Worker Cost": 1.03,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.01,
      Ingredients: "0.5Clay"
    },
    {
      Product: "Planks",
      "Price on Exchange": 8.7,
      "Units Per Hour": 115.13,
      "Per Unit Worker Cost": 4.2,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.02,
      Ingredients: "0.5Wood"
    },
    {
      Product: "Construction Units", 
      "Price on Exchange": 2420,
      "Units Per Hour": 0.99,
      "Per Unit Worker Cost": 350,
      "Transport Units Required per Unit": 2.06,
      "Per Unit Admin Cost": 0,
      Ingredients: "8Steel Beams,4Windows,4Tools,5Diesel,0.125Bulldozer"
    },
    {
      Product: "Clay",
      "Price on Exchange": 0.9,
      "Units Per Hour": 949.32,
      "Per Unit Worker Cost": 0.29, 
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0,
      Ingredients: "1Power"
    },
    {
      Product: "Wood",
      "Price on Exchange": 3.45,
      "Units Per Hour": 76.83,
      "Per Unit Worker Cost": 1.35,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.01,
      Ingredients: "1Seeds,4Water"
    },
    {
      Product: "Cement",
      "Price on Exchange": 6.3,
      "Units Per Hour": 298.47,
      "Per Unit Worker Cost": 1.27,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0,
      Ingredients: "3Limestone"
    },
    {
      Product: "Limestone",
      "Price on Exchange": 1.6, 
      "Units Per Hour": 699.5,
      "Per Unit Worker Cost": 0.39,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0,
      Ingredients: "2Power"
    },
    {
      Product: "Steel Beams",
      "Price on Exchange": 18.6,
      "Units Per Hour": 129.98,
      "Per Unit Worker Cost": 3.72,
      "Transport Units Required per Unit": 5,
      "Per Unit Admin Cost": 0.02,
      Ingredients: "4Power,1Steel"
    },
    {
      Product: "Windows",
      "Price on Exchange": 104,
      "Units Per Hour": 16.71,
      "Per Unit Worker Cost": 28.9, 
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.17,
      Ingredients: "2Aluminium,1Glass"
    },
    {
      Product: "Tools",
      "Price on Exchange": 185,
      "Units Per Hour": 26,
      "Per Unit Worker Cost": 18.58,
      "Transport Units Required per Unit": 1,
      "Per Unit Admin Cost": 0.11,
      Ingredients: "0.5Planks,1Electronic components,1Batteries,0.5Steel"
    },
    {
      Product: "Fabric",
      "Price on Exchange": 3.75,
      "Units Per Hour": 224.24,
      "Per Unit Worker Cost": 0.62,
      "Transport Units Required per Unit": 0.5,
      "Per Unit Admin Cost": 0,
      Ingredients: "2Cotton,1Power"
    },
    {
        Product: "Leather",
        "Price on Exchange": 20.25,
        "Units Per Hour": 30.14,
        "Per Unit Worker Cost": 4.58,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0.03,
        Ingredients: "0.125Cows"
        },
        {
        Product: "Underwear",
        "Price on Exchange": 4.75,
        "Units Per Hour": 165.77,
        "Per Unit Worker Cost": 0.83,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0,
        Ingredients: "1Fabric"
        },
        {
        Product: "Gloves",
        "Price on Exchange": 14.9,
        "Units Per Hour": 143.17,
        "Per Unit Worker Cost": 0.96,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0.01,
        Ingredients: "0.5Fabric,0.5Leather"
        },
        {
        Product: "Dress",
        "Price on Exchange": 17.4,
        "Units Per Hour": 150.7,
        "Per Unit Worker Cost": 0.92,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0.01,
        Ingredients: "3Fabric,0.5Plastic"
        },
        {
        Product: "Stiletto Heel",
        "Price on Exchange": 25.75,
        "Units Per Hour": 97.96,
        "Per Unit Worker Cost": 1.41,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0.01,
        Ingredients: "1Leather,0.2Plastic"
        },
        {
        Product: "Handbags",
        "Price on Exchange": 33.5,
        "Units Per Hour": 67.82,
        "Per Unit Worker Cost": 2.03,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0.01,
        Ingredients: "1.5Leather"
        },
        {
        Product: "Sneakers",
        "Price on Exchange": 12.6,
        "Units Per Hour": 173.31,
        "Per Unit Worker Cost": 0.8,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0,
        Ingredients: "1Plastic"
        },
        {
        Product: "Luxury Watch",
        "Price on Exchange": 720,
        "Units Per Hour": 18.84,
        "Per Unit Worker Cost": 7.33,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0.04,
        Ingredients: "2Electronic components,0.5Glass,0.1Golden Bars"
        },
        {
        Product: "Necklace",
        "Price on Exchange": 1460,
        "Units Per Hour": 41.44,
        "Per Unit Worker Cost": 3.33,
        "Transport Units Required per Unit": 1,
        "Per Unit Admin Cost": 0.02,
        Ingredients: "0.25Golden Bars"
        },{
Product: "Leather",
"Price on Exchange": 20.25,
"Units Per Hour": 30.14,
"Per Unit Worker Cost": 4.58,
"Transport Units Required per Unit": 1,
"Per Unit Admin Cost": 0.03,
Ingredients: "0.125Cows"
},
{
Product: "Underwear",
"Price on Exchange": 4.75,
"Units Per Hour": 165.77,
"Per Unit Worker Cost": 0.83,
"Transport Units Required per Unit": 1,
"Per Unit Admin Cost": 0,
Ingredients: "1Fabric"
},
{
Product: "Gloves",
"Price on Exchange": 14.9,
"Units Per Hour": 143.17,
"Per Unit Worker Cost": 0.96,
"Transport Units Required per Unit": 1,
"Per Unit Admin Cost": 0.01,
Ingredients: "0.5Fabric,0.5Leather"
},
{
Product: "Dress",
"Price on Exchange": 17.4,
"Units Per Hour": 150.7,
"Per Unit Worker Cost": 0.92,
"Transport Units Required per Unit": 1,
"Per Unit Admin Cost": 0.01,
Ingredients: "3Fabric,0.5Plastic"
},
{
Product: "Stiletto Heel",
"Price on Exchange": 25.75,
"Units Per Hour": 97.96,
"Per Unit Worker Cost": 1.41,
"Transport Units Required per Unit": 1,
"Per Unit Admin Cost": 0.01,
Ingredients: "1Leather,0.2Plastic"
},
{
Product: "Handbags",
"Price on Exchange": 33.5,
"Units Per Hour": 67.82,
"Per Unit Worker Cost": 2.03,
"Transport Units Required per Unit": 1,
"Per Unit Admin Cost": 0.01,
Ingredients: "1.5Leather"
},
{
    Product: "Sneakers",
    "Price on Exchange": 12.6,
    "Units Per Hour": 173.31,
    "Per Unit Worker Cost": 0.8,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0,
    Ingredients: "1Plastic"
},
{
    Product: "Luxury Watch",
    "Price on Exchange": 720,
    "Units Per Hour": 18.84,
    "Per Unit Worker Cost": 7.33,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.04,
    Ingredients: "2Electronic components,0.5Glass,0.1Golden Bars"
},
{
    Product: "Power",
    "Price on Exchange": 0.25,
    "Units Per Hour": 2566.94, 
    "Per Unit Worker Cost": 0.16,
    "Transport Units Required per Unit": 0,
    "Per Unit Admin Cost": 0,
    Ingredients: ""
  },
  {
    Product: "Crude Oil",
    "Price on Exchange": 29.75,
    "Units Per Hour": 36.54,
    "Per Unit Worker Cost": 14.16,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.08,
    Ingredients: "25Power"
  },
  {
    Product: "Petrol",
    "Price on Exchange": 37.25,
    "Units Per Hour": 102.5,
    "Per Unit Worker Cost": 4.71,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.03, 
    Ingredients: "15Power,0.75Crude Oil,0.25Ethanol"
  },
  { 
    Product: "Diesel",
    "Price on Exchange": 38,
    "Units Per Hour": 115.13,
    "Per Unit Worker Cost": 4.2,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.02,
    Ingredients: "15Power,0.75Crude Oil,0.25Ethanol"
  },
  {
    Product: "Ethanol",
    "Price on Exchange": 23,
    "Units Per Hour": 56.67,
    "Per Unit Worker Cost": 4.26,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.03,
    Ingredients: "10SugarCane,20Power"
  },
  {
    Product: "Methane",
    "Price on Exchange": 20,
    "Units Per Hour": 48.72,
    "Per Unit Worker Cost": 10.62,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.06,
    Ingredients: "20Power"
  },
  {
    Product: "Rocket Fuel",
    "Price on Exchange": 31,
    "Units Per Hour": 77.99,
    "Per Unit Worker Cost": 6.19,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.04,
    Ingredients: "1Methane,5Power"
  },
  {
    Product: "Processors",
    "Price on Exchange": 113,
    "Units Per Hour": 9.18,
    "Per Unit Worker Cost": 41.32,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.24,
    Ingredients: "4Silicon,1Chemicals"
  },
  {
    Product: "Electronic components",
    "Price on Exchange": 54.5,
    "Units Per Hour": 41.33,
    "Per Unit Worker Cost": 9.18,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.05,
    Ingredients: "3Silicon,1Chemicals"
  },
  {
    Product: "Batteries",
    "Price on Exchange": 84,
    "Units Per Hour": 25.26,
    "Per Unit Worker Cost": 15.03,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.09, 
    Ingredients: "4Chemicals"
  },
  {
    Product: "Displays",
    "Price on Exchange": 119,
    "Units Per Hour": 32.14,
    "Per Unit Worker Cost": 11.81,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.07,
    Ingredients: "5Silicon,4Chemicals"
  },
  {
    Product: "Smart Phones",
    "Price on Exchange": 570,
    "Units Per Hour": 11.48,
    "Per Unit Worker Cost": 33.06,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.19,
    Ingredients: "2Processors,1Electronic components,1Batteries,1Displays,2Aluminium"
  },
  {
    Product: "Tablets",
    "Price on Exchange": 690,
    "Units Per Hour": 11.48,
    "Per Unit Worker Cost": 33.06, 
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.19,
    Ingredients: "2Processors,1Electronic components,1Batteries,2Displays,3Aluminium" 
  },
  {
    Product: "Laptops",
    "Price on Exchange": 1130,
    "Units Per Hour": 9.18,
    "Per Unit Worker Cost": 41.32,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.24,
    Ingredients: "4Processors,3Electronic components,2Batteries,2Displays,3Plastic"
  },
  {
    Product: "Monitors",
    "Price on Exchange": 515,
    "Units Per Hour": 18.37,
    "Per Unit Worker Cost": 20.66,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.12, 
    Ingredients: "2Electronic components,3Displays,3Plastic"
  },
  {
    Product: "Televisions",
    "Price on Exchange": 880,
    "Units Per Hour": 16.07,
    "Per Unit Worker Cost": 23.61,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.14,
    Ingredients: "1Processors,4Electronic components,4Displays,5Plastic"
  },
  {
    Product: "Robots",
    "Price on Exchange": 250,
    "Units Per Hour": 2.3,
    "Per Unit Worker Cost": 165.29,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.97,
    Ingredients: "2Processors,1Electric Motor,10Plastic"
  },
  {
    Product: "High Grade E-Comps",
    "Price on Exchange": 860,
    "Units Per Hour": 1.84, 
    "Per Unit Worker Cost": 206.61,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 1.22,
    Ingredients: "4Silicon,3Chemicals,0.0625Golden Bars"
  },
  {
    Product: "Quadcopter",
    "Price on Exchange": 815,
    "Units Per Hour": 12.45,
    "Per Unit Worker Cost": 58.21,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.34,
    Ingredients: "3Electronic components,1Batteries,1On-Board Computer,2Plastic"
  },
  {
    Product: "Bulldozer",
    "Price on Exchange": 2150,
    "Units Per Hour": 5.58,
    "Per Unit Worker Cost": 80.37,
    "Transport Units Required per Unit": 5,
    "Per Unit Admin Cost": 0.47,
    Ingredients: "2Combustion Engine,4Steel,1Car Body"
  },
  {
    Product: "On-Board Computer",
    "Price on Exchange": 446, 
    "Units Per Hour": 13.78,
    "Per Unit Worker Cost": 27.55,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.16,
    Ingredients: "2Processors,3Electronic components"
  },
  {
    Product: "Electric Motor",
    "Price on Exchange": 214,
    "Units Per Hour": 30.78,
    "Per Unit Worker Cost": 20.17,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.12,
    Ingredients: "3Electronic components,2Steel"
  },
  {
    Product: "Luxury Car Interior",
    "Price on Exchange": 880,
    "Units Per Hour": 19.93,
    "Per Unit Worker Cost": 22.5,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.13,
    Ingredients: "6Displays,2Aluminium"
  },
  {
    Product: "Basic Interior",
    "Price on Exchange": 308,
    "Units Per Hour": 31.89,
    "Per Unit Worker Cost": 14.06,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.08,
    Ingredients: "5Fabric,2Displays,2Plastic"
  },
  {
    Product: "Car Body",
    "Price on Exchange": 725,
    "Units Per Hour": 23.92,
    "Per Unit Worker Cost": 18.75,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.11, 
    Ingredients: "30Aluminium,5Steel,5Glass"
  },
  {
    Product: "Combustion Engine",
    "Price on Exchange": 580,
    "Units Per Hour": 5.6,
    "Per Unit Worker Cost": 110.96,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.65,
    Ingredients: "5Electronic components,5Chemicals,6Steel"
  },
  {
    Product: "Economy E-Car",
    "Price on Exchange": 3150,
    "Units Per Hour": 19.93,
    "Per Unit Worker Cost": 22.5,
    "Transport Units Required per Unit": 5,
    "Per Unit Admin Cost": 0.13,
    Ingredients: "15Batteries,1On-Board Computer,2Electric Motor,1Basic Interior"
  },
  {
    Product: "Luxury E-Car",
    "Price on Exchange": 6075,
    "Units Per Hour": 3.99,
    "Per Unit Worker Cost": 112.52,
    "Transport Units Required per Unit": 5,
    "Per Unit Admin Cost": 0.66,
    Ingredients: "30Batteries,2On-Board Computer,4Electric Motor,1Luxury Car Interior"
  },
  {
    Product: "Economy Car",
    "Price on Exchange": 2080,
    "Units Per Hour": 13.95,
    "Per Unit Worker Cost": 32.15,
    "Transport Units Required per Unit": 5,
    "Per Unit Admin Cost": 0.19,
    Ingredients: "1On-Board Computer,1Basic Interior,1Combustion Engine"
  },
  {
    Product: "Luxury Car", 
    "Price on Exchange": 4050,
    "Units Per Hour": 1.99,
    "Per Unit Worker Cost": 225.04,
    "Transport Units Required per Unit": 5,
    "Per Unit Admin Cost": 1.32,
    Ingredients: "5Leather,2On-Board Computer,1Luxury Car Interior,2Combustion Engine"
  },
  {
    Product: "Truck",
    "Price on Exchange": 5200,
    "Units Per Hour": 4.78,
    "Per Unit Worker Cost": 93.77,
    "Transport Units Required per Unit": 5,
    "Per Unit Admin Cost": 0.55,
    Ingredients: "1On-Board Computer,1Basic Interior,6Combustion Engine,10Steel"
  },
  {
    Product: "Fuselage",
    "Price on Exchange": 2690,
    "Units Per Hour": 3.54,
    "Per Unit Worker Cost": 165.91,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.98, 
    Ingredients: "40Carbon Composite"
  },
  {
    Product: "Wing",
    "Price on Exchange": 2030,
    "Units Per Hour": 8.11,
    "Per Unit Worker Cost": 72.32,
    "Transport Units Required per Unit": 2,
    "Per Unit Admin Cost": 0.43,
    Ingredients: "5Aluminium,30Carbon Composite"
  },
  {
    Product: "Flight Computer",
    "Price on Exchange": 4830,
    "Units Per Hour": 2.26,
    "Per Unit Worker Cost": 320.13,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 1.88,
    Ingredients: "4High Grade E-Comps,2On-Board Computer"
  },
  {
    Product: "Cockpit",
    "Price on Exchange": 5300,
    "Units Per Hour": 2.26,
    "Per Unit Worker Cost": 320.13,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 1.88,
    Ingredients: "8Displays,4High Grade E-Comps,1Basic Interior"
  },
  {
    Product: "Attitude control",
    "Price on Exchange": 1500,
    "Units Per Hour": 2.72,
    "Per Unit Worker Cost": 266.77,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 1.57, 
    Ingredients: "5Batteries,3Electric Motor,3Steel"
  },
  {
    Product: "Propellant Tank",
    "Price on Exchange": 9175,
    "Units Per Hour": 4.51,
    "Per Unit Worker Cost": 130.18,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.77,
    Ingredients: "250Rocket Fuel,50Aluminium"
  },
  {
    Product: "Solid Fuel Booster",
    "Price on Exchange": 7400,
    "Units Per Hour": 0.28,
    "Per Unit Worker Cost": 2219.19,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 13.05,
    Ingredients: "100Rocket Fuel,50Chemicals,30Aluminium"
  },
  {
    Product: "Rocket Engine",
    "Price on Exchange": 10700,
    "Units Per Hour": 0.28,
    "Per Unit Worker Cost": 2219.19, 
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 13.05,
    Ingredients: "8High Grade E-Comps,10Aluminium,20Steel"
  },
  {
    Product: "Heat Shield",
    "Price on Exchange": 420,
    "Units Per Hour": 11.17,
    "Per Unit Worker Cost": 52.49,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.31,
    Ingredients: "30Silicon,20Steel"
  },
  {
    Product: "Ion Drive",
    "Price on Exchange": 11300,
    "Units Per Hour": 0.56, 
    "Per Unit Worker Cost": 1109.59,
    "Transport Units Required per Unit": 1, 
    "Per Unit Admin Cost": 6.53,
    Ingredients: "30Batteries,8High Grade E-Comps,15Chemicals"
  },
  {
    Product: "Jet Engine",
    "Price on Exchange": 4490,
    "Units Per Hour": 0.77,
    "Per Unit Worker Cost": 804.05,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 4.73,
    Ingredients: "4High Grade E-Comps,5Aluminium"
  },
  {
    Product: "Water",
    "Price on Exchange": 0.33,
    "Units Per Hour": 1626.43,
    "Per Unit Worker Cost": 0.21,
    "Transport Units Required per Unit": 0,
    "Per Unit Admin Cost": 0,
    Ingredients: "0.5Power"
  },
  {
    Product: "Transport",
    "Price on Exchange": 0.35,
    "Units Per Hour": 3173.95,
    "Per Unit Worker Cost": 0.1,
    "Transport Units Required per Unit": 0,
    "Per Unit Admin Cost": 0,
    Ingredients: "0.0105263157894737Power,0.0052631578947368Diesel"
  },
  {
    Product: "Plastic",
    "Price on Exchange": 10.9,
    "Units Per Hour": 204.25,
    "Per Unit Worker Cost": 2.36,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.01,
    Ingredients: "5Power,0.2Crude Oil"
  },
  {
    Product: "Minerals",
    "Price on Exchange": 10.9,
    "Units Per Hour": 104.92,
    "Per Unit Worker Cost": 2.63,
    "Transport Units Required per Unit": 1, 
    "Per Unit Admin Cost": 0.02,
    Ingredients: "20Power,1Water"
  },
  {
    Product: "Bauxite",
    "Price on Exchange": 9.1,
    "Units Per Hour": 84.94,
    "Per Unit Worker Cost": 3.25,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.02,
    Ingredients: "14Power,0.5Water"
  },
  {
    Product: "Silicon",
    "Price on Exchange": 7.7,
    "Units Per Hour": 154.02,
    "Per Unit Worker Cost": 2.69,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.02,
    Ingredients: "3Power,2Sand"
  },
  {
    Product: "Chemicals",
    "Price on Exchange": 14,
    "Units Per Hour": 213.91,
    "Per Unit Worker Cost": 1.94,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.01,
    Ingredients: "0.2Power,1Minerals"
    },
    {
    Product: "Aluminium",
    "Price on Exchange": 18.6,
    "Units Per Hour": 119.79,
    "Per Unit Worker Cost": 3.46,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.02,
    Ingredients: "15Power,1Bauxite"
    },
    {
    Product: "Iron Ore",
    "Price on Exchange": 4.85,
    "Units Per Hour": 159.89,
    "Per Unit Worker Cost": 1.73,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.01,
    Ingredients: "7Power,0.5Water"
    },
    {
    Product: "Steel",
    "Price on Exchange": 11,
    "Units Per Hour": 192.52,
    "Per Unit Worker Cost": 2.15,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.01,
    Ingredients: "5Power,0.1Chemicals,1Iron Ore"
    
    },
    {
    Product: "Sand",
    "Price on Exchange": 1.16,
    "Units Per Hour": 1249.11,
    "Per Unit Worker Cost": 0.22,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0,
    Ingredients: "2Power"
    },
    {
    Product: "Glass",
    "Price on Exchange": 13.7,
    "Units Per Hour": 128.35,
    "Per Unit Worker Cost": 3.23,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.02,
    Ingredients: "2Power,1Silicon"
    },
    {
    Product: "Gold Ore",
    "Price on Exchange": 31.75,
    "Units Per Hour": 49.96,
    "Per Unit Worker Cost": 5.52,
    "Transport Units Required per Unit": 10,
    "Per Unit Admin Cost": 0.03,
    Ingredients: "80Power,2Water"
    },
    {
    Product: "Golden Bars",
    "Price on Exchange": 6275,
    "Units Per Hour": 245.11,
    "Per Unit Worker Cost": 1.97,
    "Transport Units Required per Unit": 0.1,
    "Per Unit Admin Cost": 0.01,
    Ingredients: "40Power,200Gold Ore"
    },
    {
    Product: "Carbon Fibers",
    "Price on Exchange": 6.6,
    "Units Per Hour": 252.69,
    "Per Unit Worker Cost": 1.91,
    "Transport Units Required per Unit": 0.1,
    "Per Unit Admin Cost": 0.3,
    Ingredients: "0.5Power,0.1Crude Oil"
    },
    {
    
    Product: "Carbon Composite",
    "Price on Exchange": 63,
    "Units Per Hour": 70.57,
    "Per Unit Worker Cost": 5.87,
    "Transport Units Required per Unit": 1,
    "Per Unit Admin Cost": 0.91,
    Ingredients: "8Carbon Fibers"
    }
    ];
    

    export default productData;