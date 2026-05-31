class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value < 0) throw new Error("Radius cannot be negative");

    this._radius = value;
  }

  get diameter() {
    return this._radius * 2;
  }

  getArea() {
    return Math.PI * this._radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

class Marker {
  constructor(color, inkLevel) {
    this._color = color;
    this._inkLevel = inkLevel;
  }

  print(text) {
    let printedText = "";
    for (let char of text) {
      if (char) {
        if (this._inkLevel <= 0) break;
        printedText += char;
        this._inkLevel -= 0.5;
      } else {
        printedText += char;
      }
    }
    return printedText;
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkLevel) {
    super(color, inkLevel);
  }

  refill(amount) {
    if (amount < 0) throw new Error("Refill amount cannot be negative");
    this._inkLevel = Math.min(this._inkLevel + amount, 100);
  }
}

class Employee {
  constructor(name, position) {
    this._name = name;
    this._position = position;
  }
}

class EmpTable {
  constructor(employees) {
    this._employees = employees;
  }

  getHtml() {
    let html = "<table><tr><th>Name</th><th>Position</th></tr>\n";
    for (const employee of this._employees) {
      html += `<tr><td>${employee._name}</td><td>${employee._position}</td></tr>\n`;
    }
    html += "</table>";
    return html;
  }
}

// Example usage:
const circle = new Circle(5);
console.log(circle.radius); // 5
console.log(circle.diameter); // 10
console.log(circle.getArea()); // 78.53981633974483
console.log(circle.getCircumference()); // 31.41592653589793
circle.radius = 10;
console.log(circle.radius); // 10
console.log(circle.diameter); // 20
console.log(circle.getArea()); // 314.1592653589793
console.log(circle.getCircumference()); // 62.83185307179586

const marker = new Marker("blue", 10);
console.log(marker.print("Hello, World!")); // "Hello, World!"
console.log(marker.print("This is a test.")); // "This is"
const refillableMarker = new RefillableMarker("red", 0);
console.log(refillableMarker.print("Hello, World!")); // "" (no ink left)
refillableMarker.refill(50);
console.log(refillableMarker.print("Hello, World!")); // "Hello, World!"
try {
  refillableMarker.refill(-10);
} catch (error) {
  console.error(error.message); // "Refill amount cannot be negative"
}

const employees = [
  new Employee("Alice", "Developer"),
  new Employee("Bob", "Designer"),
  new Employee("Charlie", "Manager"),
];
const empTable = new EmpTable(employees);
console.log(empTable.getHtml());
