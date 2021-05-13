import { $host } from './index';

export const getMessages = async () => await $host.get('telegram');