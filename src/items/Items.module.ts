import { Module } from '@nestjs/common';
import { ItemsController } from './Items.controller';
import { ItemsService } from './Items.service';
import { ItemsManager } from './Items.manager';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, ItemsManager],
  exports: [ItemsService],
})
export class ItemsModule {}
