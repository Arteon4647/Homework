const obj = {
    key: "value",
	addValues: function (obj) {
		const {key, value} = obj;
		this[key] = value;
	}
};
obj.addValues({key: "a", value: 10}, {key: "b", value: 20});
console.log(obj);
// Допишіть функцію так, щоб всі аргументи що ви передасте у неїї записувалися у obj 
// передавати аргументи можна тільки так {key: "ключ", value: "значення"}