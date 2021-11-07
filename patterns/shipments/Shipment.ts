//represent the object being shipped

import { PacificParcelShipper } from '../shippers/PacificParcelShipper';
import { ChicagoSprintShipper } from '../shippers/ChicagoSprintShipper';
import { AirEastShipper } from '../shippers/AirEastShipper';

export interface IShipment {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];

}

let count = 0

export class Shipment implements IShipment {
  fromAddress: string;
  fromZipCode: string;
  shipmentId: number;
  toAddress: string;
  toZipCode: string;
  weight: number;
  marks?: string[];
  id: string;

  constructor(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks) {
    this.fromAddress = fromAddress;
    this.fromZipCode = fromZipCode;
    this.shipmentId = shipmentId;
    this.toAddress = toAddress;
    this.toZipCode = toZipCode;
    this.weight = weight;
    this.marks = marks;
  }

  getShipmentId(): string {
    this.id = (count++).toString();
    count++;

    return this.id;
  }

  ship(type): string {
    let shipper;
    switch (this.fromZipCode[0]) {
      case ('7' || '8' || '9'):
        shipper = new PacificParcelShipper(type);
        break;
      case ('4' || '5' || '6'):
        shipper = new ChicagoSprintShipper(type);
        break;
      case ('1' || '2' || '3'):
      default:
        shipper = new AirEastShipper(type);
        break;
    }

    const cost = shipper.getCost(this.weight);

    let shipMsg = `Shipment with the ID ${this.id} will be picked up from ${this.fromAddress}, 
    ${this.fromZipCode} and shipped to ${this.toAddress}, ${this.toZipCode}\n
    Cost = ${cost}`;

    this.marks.forEach(mark => {
      shipMsg += `** ${mark} **\n`
    })

    return shipMsg;
  }
}
