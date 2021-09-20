interface IPoint {
  x: number;
  y: number;
}

export class Point {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(other: Point)
  public distance(x: number, y: number)
  public distance(xOrPoint, y?): number {
    let dx: number = 0 - this.x;
    let dy: number = 0 - this.y;

    if (xOrPoint instanceof Point) {
      dx = xOrPoint.x - this.x;
      dy = xOrPoint.y - this.y;
    } else if (typeof xOrPoint === 'number') {
      dx = xOrPoint - this.x;
      dy = y - this.y;
    }

    return Math.sqrt(dx * dx + dy * dy);
  }
}
