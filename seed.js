require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {title: 'Breakfast'},
    {title: 'Lunch'},
    {title: 'Dinner'},
    {title: 'Soups'},
    {title: 'Salads'},
    {title: 'Snacks'},
    {title: 'Desserts'},
    {title: 'Beverages'},    
  ]);

  process.exit();

})();