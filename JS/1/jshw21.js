// Створіть клас Користувач, який має наступні властивості:

// - ім'я (рядок) - ім'я користувача
// - вік (число) - вік користувача
// - місто (рядок) - місто проживання користувача

// Наслідуйте користувача класом AdvancedUser, додайте поля `location`, `email`

// Cтворіть 2-3 методи для користувача та препепишіть один з них для AdvancedUser після наслідування
class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}
const user1 = new User("Artem", 26, "Horishni Plavni");
console.log(user1);

class AdvancedUser extends User {
  constructor(name, age, city, location, email) {
    super(name, age, city);
    this.location = location;
    this.email = email;
  }
}
const user12 = new AdvancedUser(
  "Artem",
  26,
  "Horishni Plavni",
  "Ferrotrans",
  "artemflashsharapov@gmail.com"
);
const user2 = new AdvancedUser(
  "Max",
  23,
  "Kremenchuk",
  "Roshen",
  "max2001@ukr.net"
);
const user3 = new AdvancedUser(
  "Maclover",
  17,
  "USA",
  "Supermarket",
  "maclover69@gmail.com"
);
console.log(user12, user2, user3);