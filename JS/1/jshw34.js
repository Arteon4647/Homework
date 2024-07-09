// Завдання: Використовуючи один з принципів SOLID навести приклад його використання (до та після), вкажіть коментарем, який принцип ви застосували

// Interface Segregation

// class Printer {
//     print(document) {
//       console.log("Printing document:", document);
//     }

//     fax(document) {
//       console.log("Faxing document:", document);
//     }

//     scan(document) {
//       console.log("Scanning document:", document);
//     }
//   }

//   const printer = new Printer();
//   printer.print("Document 1");
//   printer.fax("Document 2");
//   printer.scan("Document 3");

class Printer {
  print(document) {
    console.log("Printing document:", document);
  }
}

class Fax {
  fax(document) {
    console.log("Faxing document:", document);
  }
}

class Scanner {
  scan(document) {
    console.log("Scanning document:", document);
  }
}

const printer = new Printer();
const fax = new Fax();
const scanner = new Scanner();

printer.print("Document 1");
fax.fax("Document 2");
scanner.scan("Document 3");
