import { $host } from './index';

export const login = async (login, password) => await $host.post('user/login', { login, password });
