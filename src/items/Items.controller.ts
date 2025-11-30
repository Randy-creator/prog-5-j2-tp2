import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './Items.service';

@Controller('items')
export class ItemsController {
  constructor(private service: ItemsService) {}

  @Get()
  getAll(): any {
    return this.service.getAll();
  }
}
