import axios from 'axios';

const apiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  // baseURL: process.env.VUE_APP_BACKEND_URL,
  // baseURL: 'http://localhost:5173/src/',
  baseURL: 'https://dummyjson.com',
  // baseURL: 'https://jsonplaceholder.typicode.com/',
});

// axios.defaults.withCredentials = true
apiClient.interceptors.request.use((request) => {
  // request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    const { response } = error;
    if (response.status !== 200) {
      console.error(error.message);
      throw error;
      // Rethrow the error to propagate it further
    }
  }
);

export default apiClient;
