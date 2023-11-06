// Assuming productData is imported from productData.js
import productData from './productData.js';

window.onload = function() {
    displayProducts();
};

function displayProducts(products = productData) {
  const resultsBody = document.getElementById('resultsBody');
  resultsBody.innerHTML = ''; 

  products.forEach(product => {
      const row = document.createElement('tr');
      
      // Product Cell
      const productCell = document.createElement('td');
      productCell.textContent = product.Product;
      row.appendChild(productCell);

      // Building Cell
      const buildingCell = document.createElement('td');
      buildingCell.textContent = product.Building;
      row.appendChild(buildingCell);

      
      // Profit Per Unit Cell
      const ingredientCostDetails = calculateIngredientCost(product);
      const profitPerUnit = calculateProfitPerUnit(product, ingredientCostDetails.totalCost);
      const profitCell = document.createElement('td');
      profitCell.textContent = profitPerUnit.toFixed(2);
      row.appendChild(profitCell);

      // Profit Per Hour Cell
      const profitPerHour = profitPerUnit * product["Units Per Hour"];
      const profitPerHourCell = document.createElement('td');
      profitPerHourCell.textContent = profitPerHour.toFixed(2);
      row.appendChild(profitPerHourCell);

      // Profit Per Day Cell
      const profitPerDay = profitPerHour * 24; // Assuming a full 24-hour production cycle
      const profitPerDayCell = document.createElement('td');
      profitPerDayCell.textContent = profitPerDay.toFixed(2);
      row.appendChild(profitPerDayCell);

      resultsBody.appendChild(row);

      // Event listeners for modals
      profitCell.addEventListener('click', function() {
        displayProfitBreakdownModal(product);
      });
      profitPerHourCell.addEventListener('click', function() {
        displayProfitPerHourBreakdown(product, profitPerUnit);
      });
      // Add an event listener for profitPerDayCell if needed
  });
}

function calculateIngredientCost(product) {
  let ingredientBreakdown = '';
  let totalIngredientCost = 0;
  const ingredients = product.Ingredients.split(',');

  ingredients.forEach(ingredient => {
      const matches = ingredient.match(/^([\d.]+)([A-Za-z\s-]+)$/);
      if (matches) {
          const [_, qty, ingredientName] = matches;  // Note the use of _ to skip the full match
          const ingredientProduct = productData.find(p => p.Product.trim() === ingredientName.trim());
          if (!ingredientProduct) {
              console.error(`Product ${ingredientName} not found in productData.`);
          } else {
              const individualCost = ingredientProduct["Price on Exchange"] * parseFloat(qty);
              totalIngredientCost += individualCost;
              ingredientBreakdown += `${ingredientName} x ${qty} x ${ingredientProduct["Price on Exchange"].toFixed(2)} = ${individualCost.toFixed(2)}<br>`;
          }
      }
  });

  return {
      totalCost: totalIngredientCost,
      breakdown: ingredientBreakdown
  };
}

function displayProfitBreakdownModal(product) {
  const modal = document.getElementById('costModal');
  const costDetails = document.getElementById('costDetails');
  const ingredientCostDetails = calculateIngredientCost(product);

  costDetails.innerHTML = `
      Exchange Price: ${product["Price on Exchange"].toFixed(2)}<br>
      Unit Worker Cost: ${product["Per Unit Worker Cost"].toFixed(2)}<br>
      Unit Admin Cost: ${product["Per Unit Admin Cost"].toFixed(2)}<br>
      ${ingredientCostDetails.breakdown}
      Ingredient Cost: ${ingredientCostDetails.totalCost.toFixed(2)}<br>
      Profit Per Unit: ${calculateProfitPerUnit(product, ingredientCostDetails.totalCost).toFixed(2)}<br>  `;

  modal.style.display = 'block';  // Show the modal

  // Close the modal when the close button is clicked
  const closeButton = modal.querySelector('.close-btn');
  closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
  });
}

function calculateProfitPerUnit(product, ingredientCost) {
  console.log("Exchange Price:", product["Price on Exchange"]);
  console.log("Worker Cost:", product["Per Unit Worker Cost"]);
  console.log("Admin Cost:", product["Per Unit Admin Cost"]);
  console.log("Ingredient Cost:", ingredientCost);
  
  const profit = product["Price on Exchange"] - product["Per Unit Worker Cost"] - product["Per Unit Admin Cost"] - ingredientCost;
  console.log("Calculated Profit:", profit);
  
  return profit;
}

function displayProfitPerHourBreakdown(product, profitPerUnit) {
  const modalContent = `
      Profit Per Unit: ${profitPerUnit.toFixed(2)}<br>
      Units Per Hour: ${product["Units Per Hour"]}<br>
      Profit Per Hour: ${(profitPerUnit * product["Units Per Hour"]).toFixed(2)}
  `;

  // You can use the same 'costModal' or create a new modal for this purpose
  const modal = document.getElementById('costModal');
  const costDetails = document.getElementById('costDetails');
  costDetails.innerHTML = modalContent;

  modal.style.display = 'block';

  // Close the modal when the close button is clicked
  const closeButton = modal.querySelector('.close-btn');
  closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
  });
}

const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', function() {
    const query = searchBar.value.toLowerCase();
    displayFilteredProducts(query);
});

function displayFilteredProducts(query) {
    const filteredProducts = productData.filter(product => product.Product.toLowerCase().includes(query));
    displayProducts(filteredProducts);
}

let currentSortColumn = null;
let ascendingOrder = true;

function sortProducts(column) {
    if (currentSortColumn === column) {
        ascendingOrder = !ascendingOrder; // Toggle sort order
    } else {
        ascendingOrder = true;
    }
    currentSortColumn = column;

    productData.sort((a, b) => {
        let aValue, bValue;

        switch (column) {
            case "Building":
                aValue = a.Building;
                bValue = b.Building;
                break;
            case "Product":
                aValue = a.Product;
                bValue = b.Product;
                break;
            case "ProfitPerUnit":
                aValue = calculateProfitPerUnit(a, calculateIngredientCost(a).totalCost);
                bValue = calculateProfitPerUnit(b, calculateIngredientCost(b).totalCost);
                break;
            case "ProfitPerHour":
                aValue = calculateProfitPerUnit(a, calculateIngredientCost(a).totalCost) * a["Units Per Hour"];
                bValue = calculateProfitPerUnit(b, calculateIngredientCost(b).totalCost) * b["Units Per Hour"];
                break;
            case "ProfitPerDay":
                aValue = calculateProfitPerUnit(a, calculateIngredientCost(a).totalCost) * a["Units Per Hour"] * 24;
                bValue = calculateProfitPerUnit(b, calculateIngredientCost(b).totalCost) * b["Units Per Hour"] * 24;
                break;
        }

        return ascendingOrder ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
    });

    displayProducts(); // Re-render the table with sorted data
}
document.getElementById('productHeader').addEventListener('click', () => sortProducts("Product"));
document.getElementById('buildingHeader').addEventListener('click', () => sortProducts("Building"));

document.getElementById('profitPerUnitHeader').addEventListener('click', () => sortProducts("ProfitPerUnit"));
document.getElementById('profitPerHourHeader').addEventListener('click', () => sortProducts("ProfitPerHour"));
document.getElementById('profitPerDayHeader').addEventListener('click', () => sortProducts("ProfitPerDay"));

