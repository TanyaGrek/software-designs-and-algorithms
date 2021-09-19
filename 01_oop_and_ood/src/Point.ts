interface IPoint {
  x: number;
  y: number;
}

export class Point {
  private readonly x: number;
  private readonly y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(...args: any): number {
    let dx: number = 0 - Number(this.x);
    let dy: number = 0 - Number(this.y);

    if (args[0] instanceof Point) {
      dx = Number(args[0].x) - Number(this.x);
      dy = Number(args[0].y) - Number(this.y);
    } else if (args.length === 2) {
      dx = Number(args[0]) - Number(this.x);
      dy = Number(args[1]) - Number(this.y);
    }

    return Math.sqrt(dx * dx + dy * dy);
  }
}
