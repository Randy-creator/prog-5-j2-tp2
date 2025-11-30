import { Injectable } from '@nestjs/common';
import { ItemsManager } from './Items.manager';

@Injectable()
export class ItemsService {
  constructor(private manager: ItemsManager) {}
  getAll(): any {
    return this.manager.readAll();
  }
}
