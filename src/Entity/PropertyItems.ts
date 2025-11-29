import { Client } from './Client';
import { Item } from './Item';

export class PropertyItems implements Item {
  renter: Client | null;
  itemAvailability: boolean;

  constructor(
    public itemName: string,
    public rentPrice: number,
    available: boolean = false,
  ) {
    this.renter = null;
    this.itemAvailability = available;
  }
  getMinRentDays(): number {
    return 30;
  }
}
