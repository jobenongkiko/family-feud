import { Entity, Property } from '@mikro-orm/core';
import { CustomBaseEntity } from './customBaseEntity';

@Entity()
export class Question extends CustomBaseEntity {
  @Property()
  question!: string;

  @Property()
  category!: string;

  constructor(question: string, category: string) {
    super();
    this.question = question;
    this.category = category;
  }
}
