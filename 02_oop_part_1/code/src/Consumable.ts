import { Item } from './Item';

export abstract class Consumable extends Item {
  protected consumed: boolean;
  protected spoiled: boolean;

  // your code goes here
  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.consumed = false;
    this.spoiled = spoiled;
  }

  use(): string {
    if (this.name === 'bread') {
      if (this.consumed) return 'There is nothing left of the bread to consume.';
      if (this.spoiled) return 'You feel sick.';
    }

    if (!this.consumed && !this.spoiled) return this.eat();


  }

  abstract eat(): string

}
