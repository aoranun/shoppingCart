import axios from 'axios';

class ApiClient {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add a request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  async get(url, config = {}) {
    const res = await this.axiosInstance.get(url, config);
      return res.data;
  }

  async post(url, data = {}, config = {}) {
    const res = await this.axiosInstance.post(url, data, config);
      return res.data;
  }

  async put(url, data = {}, config = {}) {
    const res = await this.axiosInstance.put(url, data, config);
      return res.data;
  }

  async delete(url, config = {}) {
    const res = await this.axiosInstance.delete(url, config);
      return res.data;
  }
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiClient = new ApiClient(baseURL);

export default apiClient;
