import { ChangeEvent, useState } from "react";
import { Ifunc } from "./interfaces";
export default function Form({ onAdd }: Ifunc) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log(typeof e);
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);
    onAdd(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Enter the items you need.</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
