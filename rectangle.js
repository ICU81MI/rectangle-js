class Rectangle {
  constructor(width, height) {
    this.width = width;

    if (!!height) {
      this.height = height;
    } else {
      this.height = width;
    }
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * this.width + 2 * this.height;
  }
}
