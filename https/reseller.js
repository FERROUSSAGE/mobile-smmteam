import { $host } from './index';

export const getResellers = async () => await $host.get('reseller');
export const getTypes = async () => await $host.get('type');