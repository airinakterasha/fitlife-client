import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import useAuth from './useAuth';

export const axiosSecure = axios.create({
    baseURL: 'https://fitlife-server.vercel.app'
    //baseURL: 'http://localhost:5555/'
})
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logout} = useAuth();
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token');
    //console.log('request stopped by interceptors', token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function(error){
    return Promise.reject(error);
  });

  // Add a response interceptor
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    //console.log('status error', status);
    if(status === 401 || status === 403){
      await logout();
      navigate('/login');
    }
    return Promise.reject(error);
  });

  return axiosSecure;
};

export default useAxiosSecure;
