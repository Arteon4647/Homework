function Figure(sides, p, s) {
  if (sides.length === 4 && sides.every((side) => side === sides[0])) {
    return new Square(sides, p, s);
  }

  if (sides.length === 4) {
    return new Rectangle(sides, p, s);
  }

  if (sides.length === 3) {
    return new Triangle(sides, p, s);
  }

  if (sides.length === 5) {
    return new Pentagon(sides, p, s);
  }

  if (sides.length === 6) {
    return new Hexagon(sides, p, s);
  }
}

function Triangle(sides, p, s) {
  this.sides = sides;
  this.p = p;
  this.s = s;

  this.isTriangle = function () {
    return this.sides.length === 3;
  };
}

function Square(sides, p, s) {
  this.sides = sides;
  this.p = p;
  this.s = s;

  this.isSquare = function () {
    return (
      this.sides.length === 4 &&
      this.sides.every((side) => side === this.sides[0])
    );
  };
}

function Rectangle(sides, p, s) {
  this.sides = sides;
  this.p = p;
  this.s = s;

  this.isRectangle = function () {
    return this.sides.length === 4;
  };
}

function Pentagon(sides, p, s) {
  this.sides = sides;
  this.p = p;
  this.s = s;

  this.isPentagon = function () {
    return this.sides.length === 5;
  };
}

function Hexagon(sides, p, s) {
  this.sides = sides;
  this.p = p;
  this.s = s;

  this.isHexagon = function () {
    return this.sides.length === 6;
  };
}

const square = new Figure([1, 1, 1, 1], 16, 16);
const triangle = new Figure([3, 3, 4], 16, 12);
const rectangle = new Figure([2, 2, 4, 4], 15, 3);
const pentagon = new Figure([3, 3, 3, 3, 3], 15, 15);
const hexagon = new Figure([2, 2, 2, 2, 2, 2], 12, 12);

console.log(square.isSquare());
console.log(triangle.isTriangle());
console.log(rectangle.isRectangle());
console.log(pentagon.isPentagon());
console.log(hexagon.isHexagon());
