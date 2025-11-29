export abstract class Client {
  constructor(
    protected id: number,
    protected name: string,
    protected rentalBudget: number,
  ) {}
}
