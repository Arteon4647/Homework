const data1 = {
  users: [{ email: "email1@gmai.com" }, { email: "email2@gmail.com" }],
  addUser: function (user) {
    // допишіть логіку додавання користувача
    this.users.push(user);
  },
};
data1.addUser({ email: "email3@gmail.com" });
console.log(data1);

const data2 = {
  users: [],
};

// "Навчіть" data2 додавати користувачів 3 способами (bind, call, apply)

// data2.addUser = data1.addUser.bind(data2);
// data2.addUser({email: "email4@gmail.com"});
// console.log(data2);

// data2.addUser = data1.addUser.call(data2, { email: "email5@gmail.com" });
// console.log(data2);

data2.addUser = data1.addUser.apply(data2, [{ email: "email6@gmail.com" }]);
console.log(data2);
