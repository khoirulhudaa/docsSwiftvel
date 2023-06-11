import axios from "axios";

const API_URL = "https://api-dragme.vercel.app/api/users";

// Set default base URL for axios
axios.defaults.baseURL = API_URL;

// axios.defaults.withCredentials = true;


// Set default headers for axios)
axios.defaults.headers.common["Accept"] = "application/json";

const sessionToken = Cookies.get('access_token')    

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `${sessionToken}`,
    }
});

// Add request interceptor
api.interceptors.request.use(
    (config) => {    
        // Add auth token to request headers
        const authToken = Cookies.get("access_token");
        if (authToken) {
            config.headers.Authorization = `${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error.response);
    }
);

export default api;
