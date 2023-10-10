import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <Link to={`/categories/${cat._id}`}>
      <div className="category" style={{backgroundImage: `url(${cat.img})`, backgroundSize: 'cover'}}>
        <div className="text-container"><h3>{cat.title}</h3></div>
      </div>
    </Link>
  ))
  return (<div className="CategoriesPage">{categoriesList}</div>)
}