import { Item } from './Item';

export class PropertyItems extends Item {
  constructor(
    public id: number,
    public itemName: string,
    public rentPrice: number,
    public itemAvailability: boolean = false,
  ) {
    super(id, null, itemName, rentPrice, itemAvailability);
  }

  getMinRentDays(): number {
    return 30;
  }
}
