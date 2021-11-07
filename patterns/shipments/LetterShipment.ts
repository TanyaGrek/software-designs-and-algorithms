import { IShipment, Shipment } from './Shipment';

export class LetterShipment extends Shipment implements IShipment {
  type: 'letter';

  constructor(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks) {
    super(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks);
  }

  ship(): string {
    return super.ship(this.type);
  }
}