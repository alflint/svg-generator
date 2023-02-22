import {describe, expect, test} from '@jest/globals';

const { Circle, Square, Triangle } = require('./shape.js');

describe('Rendering Circle', () => {
  const shape = new Circle("blue", "red", "HEY")

  test('Builds proper polygon component', () => {
    expect(shape.polygon).toBe('<circle cx="150" cy="100" r="80" fill="blue" />')
  })

  test('Builds proper text component', () => {
    expect(shape.text).toBe('<text x="50%" y ="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="red">HEY</text>')
  })

  test('Creates a full svg of our circle, ready to be saved.', () => {
    expect(shape.render()).toBe('<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="50%" y ="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="red">HEY</text></svg>');
  });
});

describe('Rendering Square', () => {
  const shape = new Square("blue", "red", "HEY")

  test('Builds proper polygon component', () => {
    expect(shape.polygon).toBe('<rect x="75" y="25" width="150" height="150" fill="blue" />')
  })

  test('Builds proper text component', () => {
    expect(shape.text).toBe('<text x="50%" y ="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="red">HEY</text>')
  })

  test('Creates a full svg of our square, ready to be saved.', () => {
    expect(shape.render()).toBe('<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="25" width="150" height="150" fill="blue" /><text x="50%" y ="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="red">HEY</text></svg>');
  });
});

describe('Rendering Triangle', () => {
  const shape = new Triangle("blue", "red", "HEY")

  test('Builds proper polygon component', () => {
    expect(shape.polygon).toBe('<polygon points="150 0, 275 200, 25 200" fill="blue"/>')
  })

  test('Builds proper text component', () => {
    expect(shape.text).toBe('<text x="50%" y ="60%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="red">HEY</text>')
  })

  test('Creates a full svg of our triangle, ready to be saved.', () => {
    expect(shape.render()).toBe('<svg version="1.1" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 275 200, 25 200" fill="blue"/><text x="50%" y ="60%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="red">HEY</text></svg>');
  });
});