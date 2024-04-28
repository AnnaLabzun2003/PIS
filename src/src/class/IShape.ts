export interface IShape {
    move(dx: number, dy: number): void;
    resize(factor: number): void;
    rotate(angle: number): void;
    setColor(color: string): void;
  }
  