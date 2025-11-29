import { Item } from './Item/Item';

export interface Renting {
  rent(item: Item): Item;
}
