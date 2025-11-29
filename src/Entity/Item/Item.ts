import { Client } from '../Client/Client';

export interface Item {
  renter: Client | null;
  itemName: string;
  rentPrice: number;
  itemAvailability: boolean;

  getMinRentDays(): number;
}
