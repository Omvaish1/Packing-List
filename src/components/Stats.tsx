import { Iitem } from "./interfaces";

interface Istats {
  items: Iitem[];
}
export default function Stats({ items }: Istats) {
  if (!items.length) {
    return <p className="stats">Start packing some things champ!</p>;
  }
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {percentage === 100
        ? "You have packed all the items, you are ready to go 🚀"
        : `You have ${totalItems} items in your packing list and you have already
        packed ${packedItems} items.(${percentage}%)`}
    </footer>
  );
}
