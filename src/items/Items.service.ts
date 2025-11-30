import { Injectable } from '@nestjs/common';
import { ItemsManager } from './Items.manager';

@Injectable()
export class ItemsService {
  constructor(private manager: ItemsManager) {}
  getAll(): any {
    return this.manager.readAll();
  }

  getById(id: number): any {
    // // const items = this.manager.readAll();
    // // const found = items.find((item) => item.id === id);
    // if (!found) {
    //   throw new NotFoundException('Item not found !');
    // }
    // return found;
    return id;
  }
}
