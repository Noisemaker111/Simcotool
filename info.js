import productData from './productData.js';

let isAscending = true; // To toggle between ascending and descending sorts

// Helper function to sort array of objects by key
function sortArrayByKey(array, key, ascending = true) {
  return array.sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });
}

// Function to find the cost of a single unit of a given product
function findProductCost(productName) {
  const product = productData.find(p => p.Product === productName);
  if (!product) {
    throw new Error(`Product not found: ${productName}`);
  }
  return product["Price on Exchange"];
}
// Function to calculate ingredient costs
function calculateIngredientCost(ingredientString) {
  const ingredients = ingredientString.split(',');
  let totalIngredientCost = 0;
  
    for (const ingredient of ingredients) {
      // Use regular expression to extract the amount and name
      const amountMatch = ingredient.match(/(\d*\.?\d+|\d+)/);
      const nameMatch = ingredient.match(/[a-zA-Z\s-]+/);  // Updated to include spaces and hyphens in names
  
      // Validate the format and extract values
      if (!amountMatch || !nameMatch) {
        console.error(`Invalid ingredient format: ${ingredient}`);
        continue;
      }
  
      const amount = parseFloat(amountMatch[0]);
      const name = nameMatch[0].trim();
  
      // Validate the amount and name
      if (isNaN(amount) || !name) {
        console.error(`Error calculating cost for ingredient: ${name}, amount: ${amount}`);
        continue;
      }
  
      // Find the cost from product data
      const cost = findProductCost(name);
  
      if (isNaN(cost) || cost === 0) {
        console.error(`Error calculating cost for ingredient: ${name}, cost: ${cost}`);
        continue;
      }
  
      // Calculate the total ingredient cost
      totalIngredientCost += cost * amount;
    }
  
    return totalIngredientCost;
}
// Function to calculate total cost
function calculateTotalCost(product) {
  const workerCost = product["Per Unit Worker Cost"];
  const adminCost = product["Per Unit Admin Cost"];
  const transportUnits = product["Transport Units Required per Unit"];
  const transportCost = findProductCost("Transport");
  const ingredientCost = calculateIngredientCost(product.Ingredients);
  return workerCost + adminCost + (transportUnits * transportCost) + ingredientCost;
}
// function to render table
function renderTable(sortedData) {
    let resultsHTML = "";
  
    for (const product of sortedData) {
      const workerCost = product["Per Unit Worker Cost"];
      const adminCost = product["Per Unit Admin Cost"];
      const transportUnits = product["Transport Units Required per Unit"];
      const transportCost = findProductCost("Transport");
      const ingredientCost = calculateIngredientCost(product.Ingredients);
      const totalCost = workerCost + adminCost + (transportUnits * transportCost) + ingredientCost;
      const netProfit = product["Price on Exchange"] - totalCost;
      const netProfitPerHour = netProfit * product["Units Per Hour"];
  
      resultsHTML += `<tr>
                        <td>${product.Product}</td>
                        <td>${product["Price on Exchange"]}</td>
                        <td>${product["Units Per Hour"]}</td>
                        <td>${workerCost}</td>
                        <td>${adminCost}</td>
                        <td>${transportUnits}</td>
                        <td>${product.Ingredients}</td>
                        <td>${ingredientCost.toFixed(2)}</td>
                        <td>${totalCost.toFixed(2)}</td>
                        <td>${netProfit.toFixed(2)}</td>
                        <td>${netProfitPerHour.toFixed(2)}</td>
                      </tr>`;
    }
  
    document.getElementById("resultsBody").innerHTML = resultsHTML;
}
// function to handle sort 
function handleSort(event) {
    const keyToSortBy = event.target.id.replace("Header", ""); 
    isAscending = !isAscending; // Toggle sort direction
  
    // Calculate Ingredient Cost, Total Cost, Net Profit, and Net Profit per Hour for each product
    for (const product of productData) {
      const workerCost = product["Per Unit Worker Cost"];
      const adminCost = product["Per Unit Admin Cost"];
      const transportUnits = product["Transport Units Required per Unit"];
      const transportCost = findProductCost("Transport");
      const ingredientCost = calculateIngredientCost(product.Ingredients);
      const totalCost = workerCost + adminCost + (transportUnits * transportCost) + ingredientCost;
      const netProfit = product["Price on Exchange"] - totalCost;
      const netProfitPerHour = netProfit * product["Units Per Hour"];
  
      // Add these as properties to the product objects
      product["Ingredient Cost"] = ingredientCost;
      product["Total Cost"] = totalCost;
      product["Net Profit"] = netProfit;
      product["Net Profit per Hour"] = netProfitPerHour;
    }
  
    // Replace the header names with the actual keys in productData if they don't match.
    const keyMapping = {
      'product': 'Product',
      'priceOnExchange': 'Price on Exchange',
      'unitsPerHour': 'Units Per Hour',
      'perUnitWorkerCost': 'Per Unit Worker Cost',
      'perUnitAdminCost': 'Per Unit Admin Cost',
      'transportUnitsRequired': 'Transport Units Required per Unit',
      'ingredients': 'Ingredients',
      'ingredientCost': 'Ingredient Cost',
      'totalCost': 'Total Cost',
      'netProfit': 'Net Profit',
      'netProfitPerHour': 'Net Profit per Hour'
    };
  
    const sortedData = sortArrayByKey(productData, keyMapping[keyToSortBy], isAscending);
  
    // Re-render the table with the sorted data
    renderTable(sortedData);
}
// Function to handle search
// Function to handle search
function searchProducts() {
  const searchTerm = document.getElementById("searchBar").value;
  let resultsHTML = "";

  for (const product of productData) {
    if (product.Product.toLowerCase().includes(searchTerm.toLowerCase())) {
      const workerCost = product["Per Unit Worker Cost"];
      const adminCost = product["Per Unit Admin Cost"];
      const transportUnits = product["Transport Units Required per Unit"];
      const transportCost = findProductCost("Transport"); // Replace with the actual product name for transport
      const ingredientCost = calculateIngredientCost(product.Ingredients);

      const totalCost = workerCost + adminCost + (transportUnits * transportCost) + ingredientCost;
      const netProfit = product["Price on Exchange"] - totalCost;
      const netProfitPerHour = netProfit * product["Units Per Hour"];

      resultsHTML += `<tr>
                        <td>${product.Product}</td>
                        <td>${product["Price on Exchange"]}</td>
                        <td>${product["Units Per Hour"]}</td>
                        <td>${workerCost}</td>
                        <td>${adminCost}</td>
                        <td>${transportUnits}</td>
                        <td>${product.Ingredients}</td>
                        <td>${ingredientCost.toFixed(2)}</td>
                        <td>${totalCost.toFixed(2)}</td>
                        <td>${netProfit.toFixed(2)}</td>
                        <td>${netProfitPerHour.toFixed(2)}</td>
                      </tr>`;
    }
  }

  document.getElementById("resultsBody").innerHTML = resultsHTML;
}
// Adding click event listeners to headers
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("searchBar").addEventListener("input", searchProducts);
  document.getElementById("productHeader").addEventListener("click", handleSort);
  document.getElementById("priceOnExchangeHeader").addEventListener("click", handleSort);
  document.getElementById("unitsPerHourHeader").addEventListener("click", handleSort);
  document.getElementById("perUnitWorkerCostHeader").addEventListener("click", handleSort);
  document.getElementById("perUnitAdminCostHeader").addEventListener("click", handleSort);
  document.getElementById("transportUnitsRequiredHeader").addEventListener("click", handleSort);
  document.getElementById("ingredientsHeader").addEventListener("click", handleSort);
  document.getElementById("ingredientCostHeader").addEventListener("click", handleSort);
  document.getElementById("netProfitHeader").addEventListener("click", handleSort);
  document.getElementById("totalCostHeader").addEventListener("click", handleSort);
  document.getElementById("netProfitPerHourHeader").addEventListener("click", handleSort);
});  // Add more event listeners for other headers

