import { Point } from "./point";
import { IShape } from "./IShape";
export class Sphere implements IShape {
    constructor(public center: Point, public radius: number, public color: string) {}
  
    move(dx: number, dy: number): void {
      this.center.move(dx, dy);
    }
  
    resize(factor: number): void {
      this.radius *= factor;
    }
  
    rotate(angle: number): void {
      // Сфера не обертається
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  }
  