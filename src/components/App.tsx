import { useState } from "react";
import Stats from "./Stats";
import { Iitem } from "./interfaces";
import Form from "./Form";
import PackingList from "./PackingList";
import Logo from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAdd(item: Iitem) {
    setItems((items): any => [...items, item]);
  }
  function handleDelete(id: number) {
    setItems((items) => items.filter((item: Iitem) => item.id !== id));
  }
  function handleToggle(id: number) {
    setItems((items: any) =>
      items.map((item: Iitem) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the entire list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleAdd} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
