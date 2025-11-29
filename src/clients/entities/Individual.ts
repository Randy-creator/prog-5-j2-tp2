import { Client } from './entities/Client';

export class Individual extends Client {
  constructor(
    public id: number,
    public name: string,
    public rentalBudget: number,
  ) {
    super(id, name, rentalBudget);
  }
}
