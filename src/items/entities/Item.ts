import { Client } from '../../clients/entities/Client';

export abstract class Item {
  constructor(
    public id: number,
    public renter: Client | null,
    public itemName: string,
    public rentPrice: number,
    public itemAvailability: boolean,
  ) {
    if (this.itemAvailability) {
      this.renter = null;
    }
  }

  abstract getMinRentDays(): number;
}
