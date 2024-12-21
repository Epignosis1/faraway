import { useState } from "react";

export default function Inputs({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    console.log(e);
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);

    console.log(newItem);
  }
  return (
    <div className="inputCom">
      <p>What do you need for your trip😍?</p>
      <form className="inputBtn" onSubmit={handleSubmit}>
        <select
          value={quantity}
          className="itemList input"
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map((arr) => (
            <option value={arr} key={arr}>
              {arr}
            </option>
          ))}
        </select>
        <input
          type="text"
          id="items"
          placeholder="items..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="addItemBtn">ADD</button>
      </form>
    </div>
  );
}
