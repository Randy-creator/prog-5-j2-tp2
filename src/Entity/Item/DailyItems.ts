import { Client } from '../Client/Client';
import { Item } from './Item';

export class DailyItems implements Item {
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
    return 1;
  }
}
