import { Client } from '../Client/Client';

export abstract class Item {
  constructor(
    public renter: Client | null,
    public itemName: string,
    public rentPrice: number,
    public itemAvailability: boolean,
  ) {}

  abstract getMinRentDays(item: Item): number;
}
