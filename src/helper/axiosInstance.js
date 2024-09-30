import axios from 'axios';

function createAxiosInstance() {
    const axiosInstance = axios.create({
        baseURL: 'https://hey-buddy-backend-sable.vercel.app/',  // Replace with your base URL
        timeout: 10000,                      // Set request timeout (in ms)
        headers: {
            'Content-Type': 'application/json',  // Default headers
            // 'Authorization': 'Bearer your_token' // Optional auth header
        }
    });

    // Optionally, you can add interceptors for request or response
    axiosInstance.interceptors.request.use(
        (config) => {
            // You can modify the request here if needed (e.g., add tokens dynamically)
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            // Handle the response data here if needed
            return response;
        },
        (error) => {
            // Handle the error here (e.g., show notifications)
            return Promise.reject(error);
        }
    );

    return axiosInstance;
}

export default createAxiosInstance;
