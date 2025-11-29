import { Item } from './Item';

export class DailyItems extends Item {
  constructor(
    public id: number,
    public itemName: string,
    public rentPrice: number,
    public itemAvailability: boolean = false,
  ) {
    super(id, null, itemName, rentPrice, itemAvailability);
  }

  getMinRentDays(): number {
    return 1;
  }
}
