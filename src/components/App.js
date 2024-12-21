import Logo from "./logo.js";
import Inputs from "./inputs.js";
import Footer from "./footer.js";
import Items from "./items.js";
import { useState } from "react";

function App() {
  const [items, setItem] = useState([]);

  function handleAddItems(newItem) {
    setItem((items) => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleChecked(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItem([]);
  }
  return (
    <div className="App">
      <Logo />
      <Inputs onAddItem={handleAddItems} />
      <Items
        itemName={items}
        onDeleteItem={handleDeleteItem}
        onHandleChecked={handleChecked}
        handleClearList={handleClearList}
      />
      <Footer itemName={items} />
    </div>
  );
}

export default App;
