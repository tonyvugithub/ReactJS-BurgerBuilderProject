import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://react-burger-builder-a2dd3.firebaseio.com/"
});

export default axiosInstance;