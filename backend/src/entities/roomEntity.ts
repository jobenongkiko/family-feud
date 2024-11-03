import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { CustomBaseEntity } from './customBaseEntity';
import { Question } from './questionEntity';

@Entity()
export class Room extends CustomBaseEntity {
  @Property()
  roomName!: string;

  @ManyToOne(() => Question)
  question!: Question;

  @Property()
  socketId!: string;

  constructor(roomName: string, question: Question, socketId: string) {
    super();
    this.socketId = socketId;
    this.question = question;
    this.roomName = roomName;
  }
}
