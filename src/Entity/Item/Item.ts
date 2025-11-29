import { Client } from '../Client/Client';

export abstract class Item {
  constructor(
    public id: number,
    public renter: Client | null,
    public itemName: string,
    public rentPrice: number,
    public itemAvailability: boolean,
  ) {}

  abstract getMinRentDays(): number;
}
