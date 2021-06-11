import { $host } from '../index';

export const balance = async () => await $host.get('api/adcore/balance');
export const create = async ( type, link, countOrdered, price ) => await $host.post('api/adcore/create', { type, link, countOrdered, price });
export const info = async ( idProject, countOrdered ) => await $host.post('api/adcore/info', { idProject, countOrdered });