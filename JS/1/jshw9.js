const data = {
	a: 100,
  b: 300,
  c: 400,
	d: 500,
	e: 600,
	f: 700,
	g: 800
};

const lowData = {}; // до 300 (включно)
const bigData = {}; // після 300

// За допомогою циклу опрацюйте данні так, щоб менші значення були у lowData,
// більші у bigData

function dataManagement(data, border = 300) {
    const lowData = {};
    const bigData = {};
  
    for (const key in data) {
      const value = data[key];
  
      if (value <= border) {
        lowData[key] = value;
      } else {
        bigData[key] = value;
      }
    }
  
    console.log(lowData, bigData);
    return { lowData, bigData };
  }
  
  console.log(dataManagement(data));