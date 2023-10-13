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

  async function handleDelete() {
    await itemsAPI.deleteAll();
    setItems([]);
  }

  const itemsList = items.map((item, idx) => (<p>{item.item}</p>))

  return (
    <div className="ItemsPage">
      <div>
        <h1>Dear {user.name} here is your shopping list:</h1>
        <div className="items-container">
          {itemsList.length ? itemsList : <p>Nothing here yet</p>}
        </div>
      </div>
      <button onClick={handleDelete} className="delete-all-btn">Clean the shopping list</button>
    </div>
  );
}