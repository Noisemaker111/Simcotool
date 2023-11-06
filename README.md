README

This document contains a JavaScript file named productData.js. This file holds an array of objects, where each object represents a product with its associated data. The data includes properties such as product name, price on exchange, units per hour, per unit worker cost, transport units required per unit, per unit admin cost, building, and ingredients.
Usage

To use this data, you need to import the productData.js file into your JavaScript project. You can then access the productData array and use it as needed in your application.
Administration Overhead

The productData.js file uses a constant named adminOverhead which is set to 0.11 at the top of the file. This value represents the administration overhead for the products.

To get the most accurate administration overhead, you should visit the following URL: https://www.simcompanies.com/api/v2/companies/me/administration-overhead/

This URL will return a JSON object with the current administration overhead. You should subtract 1 from this value and replace the adminOverhead constant in the productData.js file with the updated value.
Data Structure

Each product object in the productData array has the following structure:
Note

Please ensure to update the adminOverhead constant regularly to keep your data accurate.
