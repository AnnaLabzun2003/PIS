import { Point } from "./point";
import { IShape } from "./IShape";

export class Circle implements IShape {
    constructor(public center: Point, public radius: number, public color: string) {}
  
    move(dx: number, dy: number): void {
      this.center.move(dx, dy);
    }
  
    resize(factor: number): void {
      this.radius *= factor;
    }
  
    rotate(angle: number): void {
      // Коло не обертається
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  }