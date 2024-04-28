import { Point } from "./point";
import { Sphere } from "./sphere";
import { IShape } from "./IShape";

describe('Sphere', () => {
  it('should create a sphere with the correct properties', () => {

    const center = new Point(0, 0);
    const radius = 5;
    const color = 'red';


    const sphere = new Sphere(center, radius, color);


    expect(sphere.center).toEqual(center);
    expect(sphere.radius).toEqual(radius);
    expect(sphere.color).toEqual(color);
  });

  it('should move the sphere correctly', () => {
 
    const center = new Point(0, 0);
    const radius = 5;
    const color = 'red';
    const sphere = new Sphere(center, radius, color);

    sphere.move(3, 3);

    expect(sphere.center.x).toEqual(3);
    expect(sphere.center.y).toEqual(3);
  });

  it('should resize the sphere correctly', () => {

    const center = new Point(0, 0);
    const radius = 5;
    const color = 'red';
    const sphere = new Sphere(center, radius, color);


    sphere.resize(2);


    expect(sphere.radius).toEqual(10);
  });

  it('should set the color of the sphere correctly', () => {
  
    const center = new Point(0, 0);
    const radius = 5;
    const color = 'red';
    const sphere = new Sphere(center, radius, color);

    sphere.setColor('blue');


    expect(sphere.color).toEqual('blue');
  });
});
