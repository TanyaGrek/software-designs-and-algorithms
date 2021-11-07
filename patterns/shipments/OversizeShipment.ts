import { IShipment, Shipment } from './Shipment';

export class OversizeShipment extends Shipment implements IShipment {
  type: 'oversize'

  constructor(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks) {
    super(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks);
  }

  ship(): string {
    return super.ship(this.type);
  }
}