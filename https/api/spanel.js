import { $host } from '../index';

export const balance = async () => await $host.get('api/spanel/balance');
export const create = async ( type, link, countOrdered ) => await $host.post('api/spanel/create', { type, link, countOrdered });
export const info = async ( idProject, countOrdered ) => await $host.post('api/spanel/info', { idProject, countOrdered });