/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Item } from './Item';

export class DailyItems extends Item {
  constructor(
    public itemName: string,
    public rentPrice: number,
    public itemAvailability: boolean = false,
  ) {
    super(null, itemName, rentPrice, itemAvailability);
  }

  getMinRentDays(): number {
    return 1;
  }
}
