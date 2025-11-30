import { Item } from 'src/items/entities/Item';
import { Client } from './Client';
import { Renting } from 'src/renting/entities/Renting';

export class Individual extends Client implements Renting {
  constructor(
    public id: number,
    public name: string,
    public rentalBudget: number,
  ) {
    super(id, name, rentalBudget);
  }

  rent(item: Item): Item {
    const deposit = item.rentPrice * 0.2;

    if (!item.itemAvailability) {
      throw new Error('Item unavailable');
    }
    if (this.rentalBudget < item.rentPrice + deposit) {
      throw new Error('Not enough money for item + deposit');
    }

    this.rentalBudget -= item.rentPrice + deposit;
    item.renter = this;
    item.itemAvailability = false;

    return item;
  }
}
