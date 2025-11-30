import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from '../clients/Clients.module';
import { ItemsModule } from '../items/Items.module';

@Module({
  imports: [ClientsModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
