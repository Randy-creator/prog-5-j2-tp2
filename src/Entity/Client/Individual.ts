import { Client } from './Client';

export class Individual extends Client {
  constructor(name: string, rentalBudget: number) {
    super(name, rentalBudget);
  }
}
