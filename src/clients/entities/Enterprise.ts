import { Client } from './Client';

export class Enterprise extends Client {
  constructor(
    public id: number,
    name: string,
    rentalBudget: number,
    private nif: string,
  ) {
    super(id, name, rentalBudget);
  }
}
