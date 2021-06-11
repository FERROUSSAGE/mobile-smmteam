import { $host } from '../index';

export const balance = async () => await $host.get('api/smmok/balance');
export const create = async ( type, link, countOrdered, idSmmcraft ) => await $host.post('api/smmok/create', { type, link, countOrdered, idSmmcraft });
export const info = async ( idProject ) => await $host.post('api/smmok/info', { idProject });