import { Item } from './Item';

export class PropertyItems extends Item {
  constructor(
    public itemName: string,
    public rentPrice: number,
    public itemAvailability: boolean = false,
  ) {
    super(null, itemName, rentPrice, itemAvailability);
  }

  getMinRentDays(): number {
    return 30;
  }
}
