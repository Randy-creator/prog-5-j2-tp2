import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ClientManager {
  private path = 'src/data/Clients.json';

  readAll(): any {
    const buffer = fs.readFileSync(this.path, 'utf8');
    return JSON.parse(buffer);
  }
}
