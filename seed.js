require('dotenv').config();
require('./config/database');

// const Category = require('./models/category');
const Recipe = require('./models/recipe');

// IIFE
// Immediately Invoked Function Expression
// (async function() {
//   await Category.deleteMany({});
//   const categories = await Category.create([
//     {title: 'Breakfast', img:'https://i.imgur.com/1CchK5a.jpg'},
//     {title: 'Lunch', img:"https://i.imgur.com/WWzbons.jpg"},
//     {title: 'Dinner', img: "https://i.imgur.com/0JcMRBj.jpg"},
//     {title: 'Soups', img: "https://i.imgur.com/Df4QpQ2.jpg"},
//     {title: 'Salads', img: "https://i.imgur.com/oWneQMP.jpg"},
//     {title: 'Snacks', img: "https://i.imgur.com/Kqx2Tws.jpg"},
//     {title: 'Desserts', img: "https://i.imgur.com/d9zwqde.jpg"},
//     {title: 'Beverages', img: "https://i.imgur.com/YYPNSnz.jpg"},    
//   ]);

//   process.exit();

// })();
(async function() {
  await Recipe.deleteMany({});
  const recipes = await Recipe.create([
    {title: 'Falafel',
     prepTime: 10,
     cookTime: 10,
     difficulty: 1,
     user: '65225a64d88188ca9546acf1',
     category: '652388937129526f5cfa372b',
     glutenFree: true,
     dairyFree: true,
     eggFree: true,
    },
    {title: 'Hummus',
     prepTime: 10,
     cookTime: 10,
     difficulty: 1,
     user: '65225a64d88188ca9546acf1',
     category: '652388937129526f5cfa372b',
     glutenFree: true,
     dairyFree: true,
     eggFree: true,
    },
    {title: 'Gata',
     prepTime: 10,
     cookTime: 10,
     difficulty: 1,
     user: '65225a64d88188ca9546acf1',
     category: '652388937129526f5cfa372b',
     glutenFree: true,
     dairyFree: true,
     eggFree: true,
    },
  ]);

  process.exit();

})();