import { Circle } from "./circle";
import { Point } from "./point";

describe('Circle', () => {
  it('should create a circle with the correct properties', () => {

    const center = new Point(0, 0);
    const radius = 5;
    const color = 'red';

    
    const circle = new Circle(center, radius, color);

    
    expect(circle.center).toEqual(center);
    expect(circle.radius).toEqual(radius);
    expect(circle.color).toEqual(color);
  });

  it('should move the circle correctly', () => {
   
    const center = new Point(0, 0);
    const radius = 5;
    const color = 'red';
    const circle = new Circle(center, radius, color);

    // Act
    circle.move(3, 3);

    
    expect(circle.center.x).toEqual(3);
    expect(circle.center.y).toEqual(3);
  });

  it('should resize the circle correctly', () => {
  
    const center = new Point(0, 0);
    const radius = 5;
    const color = 'red';
    const circle = new Circle(center, radius, color);

    circle.resize(2);

    expect(circle.radius).toEqual(10);
  });

  it('should set the color of the circle correctly', () => {

    const center = new Point(0, 0);
    const radius = 5;
    const color = 'red';
    const circle = new Circle(center, radius, color);


    circle.setColor('blue');


    expect(circle.color).toEqual('blue');
  });
});
