import { Controller, Get } from '@nestjs/common';

@Controller()
export class RentalController {
  @Get()
  getItems(): void {}
}
