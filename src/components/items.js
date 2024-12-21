import { useState } from "react";

export default function Items({
  itemName,
  onDeleteItem,
  onHandleChecked,
  handleClearList,
}) {
  // const itemList = [
  //   { id: 1, description: "Passports", quantity: 2, packed: false },
  //   { id: 2, description: "Socks", quantity: 12, packed: true },
  //   { id: 3, description: "Charger", quantity: 3, packed: false },
  // ];

  const [sortItems, setSortItems] = useState("input");
  let sortedItems;
  if (sortItems === "input") sortedItems = itemName;
  if (sortItems === "description")
    sortedItems = itemName
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortItems === "packed")
    sortedItems = itemName
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="item">
      <ul className="listItem">
        {sortedItems.map((item) => (
          <List
            item={item}
            onDeleteItem={onDeleteItem}
            onHandleChecked={onHandleChecked}
            key={item.id}
          />
        ))}
      </ul>

      <div className="sort">
        <select
          className="sortList"
          value={sortItems}
          onChange={(e) => setSortItems(e.target.value)}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button className="claim" onClick={handleClearList}>
          Clear list
        </button>
      </div>
    </div>
  );
}

function List({ item, onDeleteItem, onHandleChecked }) {
  return (
    <li className="dataItems">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onHandleChecked(item.id)}
      />
      <p
        className="dataItem"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity}
        {item.description}
      </p>
      <button className="test" onClick={() => onDeleteItem(item.id)}>
        &times;
      </button>
    </li>
  );
}
