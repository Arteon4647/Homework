const prototype = {
    clone() {
      const cloneObj = Object.create(Object.getPrototypeOf(this));
      for (let prop in this) {
        if (this.hasOwnProperty(prop)) {
          cloneObj[prop] = typeof this[prop] === 'object' ? JSON.parse(JSON.stringify(this[prop])) : this[prop];
        }
      }
      return cloneObj;
    }
  };
  
  const prototype1 = Object.create(prototype);
  prototype1.value = "Hello It Step";
  
  const prototype2 = Object.create(prototype);
  prototype2.value = [1, 2, 3, 4, 5];
  
  const clone1 = prototype1.clone();
  const clone2 = prototype2.clone();
  
  console.log(clone1.value); 
  console.log(clone2.value); 
  