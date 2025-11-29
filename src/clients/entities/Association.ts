import { Renting } from 'src/renting/entities/Renting';
import { Item } from '../../items/entities/Item';
import { Client } from './Client';

export class Association extends Client implements Renting {
  constructor(
    public id: number,
    name: string,
    rentalBudget: number,
    private representativeContact: string,
  ) {
    super(id, name, rentalBudget);
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
