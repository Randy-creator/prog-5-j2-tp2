import { Module } from '@nestjs/common';
import { ClientController } from './Clients.controller';
import { ClientService } from './Clients.service';
import { ClientManager } from './Clients.manager';

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientManager],
  exports: [ClientService],
})
export class ClientsModule {}
