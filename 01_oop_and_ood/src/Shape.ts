import { Point } from './Point';

interface IShape {
  color: string;
  filled: boolean;
  points: Point[];
}
const pointsDefault = [new Point(0, 0), new Point(0, 3), new Point(4, 3)]

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points = pointsDefault, color= 'green', filled = true) {
    if (points.length < 3) throw new Error('Not enough points')
    this.color = color;
    this.filled = filled;
    this.points = points;
  }

  abstract getType(): string;

  toString(): string {
    return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points}.`;
  }

  getPerimeter(): number {
    let per = 0;
    let i = 0;
    while (i < this.points.length - 1) {
      const p1 = this.points[i];
      const p2 = this.points[i + 1];
      per = per + p1.distance(p2)
      i++;
    }

    return per + this.points[0].distance(this.points[this.points.length -1]);
  }
}
