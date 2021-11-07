//represent the controlling object that will interact with the GUI when it is available

import { PackageShipment } from './shipments/PackageShipment';
import { LetterShipment } from './shipments/LetterShipment';
import { OversizeShipment } from './shipments/OversizeShipment';

export class Client {
  private static client: Client;
  private constructor() {}

  public static getInstance(): Client {
    if (!Client.client) {
      Client.client = new Client();
    }
    return Client.client;
  }

  onShipPackage(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks = []) {
    const shipment = new PackageShipment(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks);

    console.log(shipment);
  }
  onShipLetter(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks = []) {
    const shipment = new LetterShipment(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks);
    console.log(shipment);
  }
  onShipOversizePackage(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks = []) {
    const shipment = new OversizeShipment(fromAddress, fromZipCode, shipmentId, toAddress, toZipCode, weight, marks);
    console.log(shipment);
  }
};
