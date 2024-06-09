class API {
    constructor(baseURL, headers, timeout) {
      this.baseURL = baseURL;
      this.headers = headers;
      this.timeout = timeout;
  
      this.instance = axios.create({ baseURL, headers, timeout });
    }
  
    async get(path) {
      const { data } = await this.instance.get(path);
      return data;
    }
  
    async getOneProduct(id) {
      const { data } = await this.instance.get(`${id}`)
      return data;
    }
  
    async post(path, body) {
      const { data } = await this.instance.post(path, body);
      return data;
    }
  
    async patch(path, body) {
      const { data } = await this.instance.patch(path, body);
      return data;
    }
  
    async put(path, body) {
      const { data } = await this.instance.put(path, body);
      return data;
    }
  
    async delete(path) {
      const { data } = await this.instance.delete(path);
      return data;
    }
  }
  
  // H/W
  
  const api = new API(
    "https://jsonplaceholder.typicode.com",
    {
      "Content-Type": "Application/Json",
    },
    10000
  );
  
  // Just an example
  api.get("/users").then((users) => console.log("USERS FROM API", users));
  
  // H/W
  // Посилаючись на https://fakestoreapi.com/products/
  // Унаслiдувати клас API та розписати додактовi методи:
  // getOneProduct
  
  const apiHW = new API(
    "https://fakestoreapi.com/products/",
    {
      "Content-Type": "Application/Json",
    },
    5000
  );
  
  apiHW.getOneProduct(4).then((product) => console.log(product));