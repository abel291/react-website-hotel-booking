import axios from 'axios';
//let CancelToken = axios.CancelToken;
//let axiosSource = CancelToken.source();
const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: true,
    timeout:30000
    //cancelToken : axiosSource.token
}); 
export default apiClient;