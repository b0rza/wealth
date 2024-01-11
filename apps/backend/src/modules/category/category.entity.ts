import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Category {
  constructor(name: string) {
    this.name = name;
  }

  @PrimaryKey()
  id: number;

  @Property()
  name: string;
}
