interface Iitem {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}
////////////////////////////////////////////////////////////////////////////////////////////////
interface Iprops {
  items: any[];
  onDelete: (i: number) => void;
  onToggle: (i: number) => void;
  onClear: () => void;
}
interface Ifunc {
  onAdd: (i: Iitem) => void;
}
interface Inew {
  item: Iitem;
  key: number;
  onDelete: (i: number) => void;
  onToggle: (i: number) => void;
}
export type { Iitem, Iprops, Ifunc, Inew };
