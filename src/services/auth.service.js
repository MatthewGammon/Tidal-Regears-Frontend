import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

const API_URL = `${baseUrl}/api/auth/`;

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    });
}

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem("user");
    window.location.replace("/home");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}
export default AuthService;