import { Client } from './Client';

export class Enterprise extends Client {
  constructor(
    name: string,
    rentalBudget: number,
    private nif: string,
  ) {
    super(name, rentalBudget);
  }
}
