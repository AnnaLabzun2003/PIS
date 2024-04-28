import { IShape } from "./IShape";

export class Point implements IShape {
    constructor(public x: number, public y: number) {}
  
    move(dx: number, dy: number): void {
      this.x += dx;
      this.y += dy;
    }
  
    resize(factor: number): void {
      // Точка залишається незмінною при зміні розмірів
    }
  
    rotate(angle: number): void {
      // Точка залишається незмінною при обертанні
    }
  
    setColor(color: string): void {
      // Колір не застосовується до точки
    }
  }
  