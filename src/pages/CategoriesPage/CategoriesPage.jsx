import { useState, useEffect } from "react";
import * as categoriesAPI from "../../utilities/categories-api"
import "./CategoriesPage.css"


export default function CategoriesPage({user}) {
  const [categories, setCategories] = useState([]);

  useEffect(function() {
    async function getCategories() {
      const categories = await categoriesAPI.getAll();
      setCategories(categories);
    }
    getCategories();
  }, []);
  const categoriesList = categories.map((cat, idx) => (
    <div className="category" style={{backgroundImage: `url(${cat.img})`, backgroundSize: 'cover'}}>
      <div className="text-container"><h3>{cat.title}</h3></div>
    </div>
  ))
  return (<div className="CategoriesPage">{categoriesList}</div>)
}