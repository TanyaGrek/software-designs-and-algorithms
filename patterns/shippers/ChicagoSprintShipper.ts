import { companies } from '../constants';
import { Shipper } from './Shipper';

export class ChicagoSprintShipper implements Shipper {
  id: 2;
  type: string;

  constructor(type) {
    this.type = type
  }
  public getCost(weight): number {
    // @ts-ignore
    const shipperPrice = companies.find(({ id }) => id === this.id);
    return shipperPrice.price[this.type] * weight;
  }
}
