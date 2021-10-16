import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class Inventory {
  protected items: Item[];

  constructor() {}

  public sort(comparator: ItemComparator): void {
  // public sort()
    if (comparator) {
      this.items.sort((a: Item, b: Item) => a.weight > b.weight && 1 || -1)
    } else {
      this.items.sort((a: Item, b: Item) => a.value > b.value && 1 || -1)
    }

  }

  public toString(): string {
    return this.items.join(',');
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }
}
