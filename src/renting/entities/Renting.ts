import { Item } from 'src/items/entities/Item';

export interface Renting {
  rent(item: Item);
}
