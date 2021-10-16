import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item): number {
        if (first.value < second.value) {
            return 1;
        } else if (first.value > second.value) {
            return -1;
        } else {
            return first.compareTo(first)
        }
    }
}
