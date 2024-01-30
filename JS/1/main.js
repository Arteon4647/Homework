// Дано 
const str1 = "Hello";
// Зробіть останню літеру строки str1 великою, а першу - маленькою

// Дано 
const str2 = "artem";
// напишіть ваше їм'я з великої літери (регістр першої літери)

// Дано
const n = 12.6436;
// Залишіть 2 символи після коми, додайте символ $ на початок та кінець

const str3 = "H!el*l000o";
// Порахуйте кількість літер у str3 (саме літер)

console.log(str1.slice(0, 1).toLowerCase(),str1.slice(1, 4),str1.slice(4).toUpperCase()); 
// почему-то с пробелами 
const h = str1.slice(0, 1).toLowerCase();
const ell = str1.slice(1,4);
const o = str1.slice (4).toUpperCase();
console.log(h + ell + o);

console.log(str2.replace("a", "A"));

console.log("$" + n.toFixed(2).concat("$"));

console.log(str3.replaceAll("!", "").replaceAll("*", "").replaceAll("0", "").length);