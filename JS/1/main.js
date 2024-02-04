// Дано:

function task1() {
	const str1 = "String number one";
	const str2 = "String number two";

    const str1number = str1.length;
    const str2number = str2.length;

    if (str1number > str2number) {
        console.log(str1);
    } else {
        console.log(str2);
     }

// виведіть найдовшу строку (if)
}

task1();


// Дано: 

function task2() {
	const str = "JavaScript";
	const repeatTimes = 12; 

    const repeatStr = str.repeat (12);
    
    if (repeatStr.length > 100) {
        console.log(repeatStr);
    }
	
// "Повторіть" (repeat) строку str [repeatTimes] разів. 
// Виведіть її у консоль тільки якщо після repeat довжина строки стала більшою за 100
}

task2();