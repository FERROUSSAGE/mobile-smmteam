import { $host } from '../index';

export const balance = async () => await $host.get('api/vktarget/balance');
export const create = async ( type, link, countOrdered, idSmmcraft ) => await $host.post('api/vktarget/create', { type, link, countOrdered, idSmmcraft });
export const info = async ( idProject ) => await $host.post('api/vktarget/info', { idProject });