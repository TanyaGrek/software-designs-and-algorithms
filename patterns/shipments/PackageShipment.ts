import { IShipment, Shipment } from './Shipment';

export class PackageShipment extends Shipment implements IShipment {
  type: 'package';
  constructor(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks) {
    super(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks);
  }

  ship(): string {
    return super.ship(this.type);
  }
}
