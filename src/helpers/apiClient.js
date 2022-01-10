import axios from 'axios';
//let CancelToken = axios.CancelToken;
//let axiosSource = CancelToken.source();
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL+'/api',
    withCredentials: true,
    timeout:30000
    //cancelToken : axiosSource.token
}); 
export default apiClient;