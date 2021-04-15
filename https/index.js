import axios from 'axios';
import { RN_APP_API_URL } from '../utils/consts';

const $host = axios.create({
    baseURL: RN_APP_API_URL
});

export { $host };