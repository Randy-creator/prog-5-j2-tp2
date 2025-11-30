import { Injectable } from '@nestjs/common';
import { ClientManager } from './Clients.manager';

@Injectable()
export class ClientService {
  constructor(private manager: ClientManager) {}
  getAll(): any {
    return this.manager.readAll();
  }
}
