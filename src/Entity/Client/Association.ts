import { Item } from '../Item/Item';
import { Renting } from '../Renting';
import { Client } from './Client';

export class Association extends Client implements Renting {
  constructor(
    name: string,
    rentalBudget: number,
    private representativeContact: string,
  ) {
    super(name, rentalBudget);
  }
  rent(item: Item): Item {
    if (!item.itemAvailability) {
      throw new Error('Item is not available anymore !');
    }

    item.renter = this;
    item.itemAvailability = false;

    return item;
  }
}
