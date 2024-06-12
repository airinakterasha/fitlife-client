import axios from 'axios';

export const axiosPublic = axios.create({
    baseURL: 'http://localhost:5555'
    //baseURL: 'https://fitlife-server.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;