import { Renting } from 'src/renting/entities/Renting';
import { Client } from './Client';
import { Item } from 'src/items/entities/Item';

export class Enterprise extends Client implements Renting {
  constructor(
    public id: number,
    name: string,
    rentalBudget: number,
    private nif: string,
  ) {
    super(id, name, rentalBudget);
  }

  rent(item: Item): Item {
    if (!item.itemAvailability) {
      throw new Error('Item unavailable');
    }

    item.renter = this;
    item.itemAvailability = false;

    return item;
  }
}
