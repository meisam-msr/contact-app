import axios from "axios";

// this EndPonit just for show data on demo
// main EndPoint is http://localhost:3001 (json server)
axios.defaults.baseURL = "https://my-json-server.typicode.com/meisam-msr/contacts-list-server-api/";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
