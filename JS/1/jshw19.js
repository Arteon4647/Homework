// Завдання:
// Створіть свій шаблон Person за допомогою функції конструктора
// Опишіть поля name, age, skills (масив строк)
// Опишіть методи learn(skillName) - додає до навичок новий скілл, forget(skillName) - видаляэ з масиву навичок скілл
// Створіть декілька екземплярів та  перевірте правильність роботи методів)

function Person(name, age, skills = []) {
  this.name = name;
  this.age = age;
  this.skills = skills;

  this.learn = function (skillName) {
    this.skills.push(skillName);
  };

  this.forget = function (skillName) {
    this.skills = this.skills.filter((skills) => skills !== skillName);
  };
}
const me = new Person("Artem", 26, ["HTML"]);
console.log(me);

me.learn("CSS");
console.log(me);

me.forget("CSS");
console.log(me);