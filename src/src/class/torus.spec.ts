import { Point} from "./point";
import { Torus } from "./torus";
import { IShape } from "./IShape";

describe('Torus', () => {
  it('should create a torus with the correct properties', () => {

    const center = new Point(0, 0);
    const majorRadius = 5;
    const minorRadius = 2;
    const color = 'red';

    const torus = new Torus(center, majorRadius, minorRadius, color);

    expect(torus.center).toEqual(center);
    expect(torus.majorRadius).toEqual(majorRadius);
    expect(torus.minorRadius).toEqual(minorRadius);
    expect(torus.color).toEqual(color);
  });

  it('should move the torus correctly', () => {
  
    const center = new Point(0, 0);
    const majorRadius = 5;
    const minorRadius = 2;
    const color = 'red';
    const torus = new Torus(center, majorRadius, minorRadius, color);


    torus.move(3, 3);

   
    expect(torus.center.x).toEqual(3);
    expect(torus.center.y).toEqual(3);
  });

  it('should resize the torus correctly', () => {
   
    const center = new Point(0, 0);
    const majorRadius = 5;
    const minorRadius = 2;
    const color = 'red';
    const torus = new Torus(center, majorRadius, minorRadius, color);

    torus.resize(2);

    expect(torus.majorRadius).toEqual(10);
    expect(torus.minorRadius).toEqual(4);
  });

  it('should set the color of the torus correctly', () => {

    const center = new Point(0, 0);
    const majorRadius = 5;
    const minorRadius = 2;
    const color = 'red';
    const torus = new Torus(center, majorRadius, minorRadius, color);


    torus.setColor('blue');

    expect(torus.color).toEqual('blue');
  });
});
