import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ItemsManager {
  private path = 'src/data/Items.json';

  readAll(): any {
    const buffer = fs.readFileSync(this.path, 'utf8');
    return JSON.parse(buffer);
  }
}
