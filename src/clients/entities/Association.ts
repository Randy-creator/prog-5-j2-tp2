import { Renting } from 'src/renting/entities/Renting';
import { Item } from '../../items/entities/Item';
import { Client } from './Client';

export class Association extends Client implements Renting {
  constructor(
    public id: number,
    name: string,
    rentalBudget: number,
    public representativeContact: string,
  ) {
    super(id, name, rentalBudget);
  }
  rent(item: Item): Item {
    if (!item.itemAvailability) {
      throw new Error('Item is not available anymore !');
    } else if (this.rentalBudget < item.rentPrice) {
      throw new Error('Action failed, insufficient balance !');
    }

    item.renter = this;
    this.rentalBudget -= item.rentPrice;
    item.itemAvailability = false;

    return item;
  }
}

// comment on va differencier le rend pour :
// une personne, un entreprise et une association
