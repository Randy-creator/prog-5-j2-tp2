import { Client } from './Client';

export class Association extends Client {
  constructor(
    name: string,
    rentalBudget: number,
    private representativeContact: string,
  ) {
    super(name, rentalBudget);
  }
}
