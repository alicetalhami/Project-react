import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3900'


const httpService = {
    get: axios.get,
    post: axios.post,
    patch: axios.put,
    delete: axios.delete,
};


export default httpService;
