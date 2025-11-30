import { Controller, Get } from '@nestjs/common';
import { ClientService } from './Clients.service';

@Controller('clients')
export class ClientController {
  constructor(private service: ClientService) {}

  @Get()
  getAll(): any {
    return this.service.getAll();
  }
}
