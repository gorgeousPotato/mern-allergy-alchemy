import { useState, useEffect } from "react";
import * as itemsAPI from "../../utilities/items-api"
import "./ItemsPage.css"

export default function ItemsPage({user}) {
  const [items, setItems] = useState([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setItems(items);
    }
    getItems();
  }, []);

  const itemsList = items.map((item, idx) => (<h5>{item.item}</h5>))

  return (
    <div className="ItemsPage">
      <h1>Dear {user.name} here is your shopping list:</h1>
      {itemsList}
    </div>
  );
}