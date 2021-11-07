import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
  protected id: number;
  value: number;
  name: string;
  weight: number;

  protected constructor(name: string, value: number, weight: number) {
    this.id = id++;
    this.value = value;
    this.name = name;
    this.weight = weight;
    counter++;
  }

  abstract use(): void;

  public compareTo(other: Item): number {
    if (this.value === other.value) {
      return this.name.localeCompare(other.name)
    }
    return this.value > other.value ? 1 : -1;
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
  }

  private numberOfItems(): number {
    return counter;
  }

  private reset(): void {
    counter = 0;
  }
}
