import axios from 'axios';
import { formatDateTimeToString, formatStringToDateTime } from './util';

export const API_URL = 'https://api.spacetraders.io/v2';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.interceptors.request.use(
    (request) => {
        if (request.data) {
            request.data = formatDateTimeToString(request.data);
        }
        return request;
    }
);

axios.interceptors.response.use(
    (response) => {
        response.data = formatStringToDateTime(response.data);
        return response;
    },
    (error) => {
        console.log('error response', error);
        return error;
    }
);

export function useToken(token: string | undefined): void {
    axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : undefined;
}
