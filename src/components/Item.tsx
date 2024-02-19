import { Inew } from "./interfaces";
export default function Item({ item, onDelete, onToggle }: Inew) {
  return (
    <li>
      <input
        type="checkbox"
        value={String(item.packed)}
        onChange={() => {
          onToggle(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
