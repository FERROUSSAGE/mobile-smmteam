import { $host } from '../index';

export const uploadTable = async (name) => await $host.post('google/spreadsheet', { name });