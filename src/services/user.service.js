import axios from 'axios';
import authHeader from './auth-header';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const API_URL = "http://localhost:8080";

export async function getRegears(){
    const url = `${API_URL}/regears`;
    const options = {
        method: 'GET',
        headers: authHeader(),
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.status >= 400 && response.status < 600){
            throw new Error(`Bad Response From Server: ${response.text}`);
        }
        return data;
    } catch (error) {
        throw error;
    }
}


const getCreateBuild = () => {
    return axios.get(API_URL + "builds/new", {
        headers: authHeader()
    });
}


const UserService = {
    getCreateBuild
};

export default UserService;