import api from "./axios";

const API = {
    Login:(body) => {
        return api.post('/signIn', body)
    },
    register:(body) => {
        return api.post('/signUp', body)
    },
    getProfile:() => {
        return api.get('/')
    }
}

export default API;