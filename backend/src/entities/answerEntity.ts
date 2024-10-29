import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { Question } from './questionEntity';

import { CustomBaseEntity } from './customBaseEntity';
@Entity()
export class Answer extends CustomBaseEntity {
  @ManyToOne(() => Question)
  question!: Question;

  @Property()
  answer!: string;

  @Property()
  points!: number;

  constructor(question: Question, answer: string, points: number) {
    super();
    this.question = question;
    this.answer = answer;
    this.points = points;
  }
}
