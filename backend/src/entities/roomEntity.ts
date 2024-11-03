import { Entity, Property } from '@mikro-orm/core';
import { CustomBaseEntity } from './customBaseEntity';

@Entity()
export class Room extends CustomBaseEntity {
  @Property()
  socketId!: string;

  constructor(socketId: string) {
    super();
    this.socketId = socketId;
  }
}
