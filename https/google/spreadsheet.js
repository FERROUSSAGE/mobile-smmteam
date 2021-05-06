import { $host } from '../index';

export const uploadTable = async (name) => await $host.post('spreadsheet', { name });