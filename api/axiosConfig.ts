import axios from 'axios';

export const API_URL = 'https://api.spacetraders.io/v2';

axios.interceptors.request.use((request) => {
    request.baseURL = API_URL;
    request.headers.Accept = 'application/json';
    if (request.method === 'post' || request.method === 'patch') {
        request.headers['Content-Type'] = 'application/json';
    }
    return request;
});

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log('error response', error);
        return error;
    }
);

export function useToken(token: string): void {
    axios.interceptors.request.use((request) => {
        request.headers.Authorization = `Bearer ${token}`;
        return request;
    });
}
