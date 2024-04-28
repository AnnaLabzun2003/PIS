import { Point } from "./point";
import { IShape } from "./IShape";

export class Torus implements IShape {
    constructor(public center: Point, public majorRadius: number, public minorRadius: number, public color: string) {}
  
    move(dx: number, dy: number): void {
      this.center.move(dx, dy);
    }
  
    resize(factor: number): void {
      this.majorRadius *= factor;
      this.minorRadius *= factor;
    }
  
    rotate(angle: number): void {
      // Тор не обертається
    }
  
    setColor(color: string): void {
      this.color = color;
    }
  }