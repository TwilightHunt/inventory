import { Item } from "./item";

export interface Element {
  item: Item;
  amount: number;
  id: number;
  coordinates: { i: number; j: number };
}
