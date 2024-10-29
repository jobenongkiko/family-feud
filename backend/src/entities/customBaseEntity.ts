import { v4 } from 'uuid';
import { PrimaryKey, Property } from '@mikro-orm/core';
import dayjs, { Dayjs } from 'dayjs';

export abstract class CustomBaseEntity {
  @PrimaryKey()
  uuid: string = v4();

  @Property()
  createdAt: Dayjs = dayjs();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Dayjs = dayjs();
}
