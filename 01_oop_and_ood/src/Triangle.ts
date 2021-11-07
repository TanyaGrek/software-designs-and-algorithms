import { Shape } from './Shape';
import { Point } from './Point';

const pointsDefault = [new Point(0, 0), new Point(0, 3), new Point(4, 3)]

export class Triangle extends Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(point1 = pointsDefault[0], point2 = pointsDefault[1], point3 = pointsDefault[2], color= 'green', filled = true) {
    super();
    this.color = color;
    this.filled = filled;
    this.points = [point1, point2, point3];
  }

  toString(): string {
    let i = 0;
    const pointsText: string = this.points.reduce((prev: string, cur: Point) => {
      i++;

      return prev + `v${i}=${cur}${i === this.points.length ? '' : ','}`
    }, '');

    return `Triangle[${pointsText}]`;
  };

  getType(): string {
    const distance1  = parseFloat(String(this.points[0].distance(this.points[1]))).toFixed(2);
    const distance2 = parseFloat(String(this.points[1].distance(this.points[2]))).toFixed(2);
    const distance3 = parseFloat(String(this.points[2].distance(this.points[0]))).toFixed(2);

    if ((distance1 === distance2) && (distance1 === distance3)) {
      return 'equilateral triangle';
    }
    if ((distance1 === distance2) || (distance1 === distance3) || (distance2 === distance3)) {
      return 'isosceles triangle';
    }

    return 'scalene triangle';
  }
}
