import { $host } from './index';

export const startStream = async (uuid, threads, service, timer) => await $host.post('streambooster/start', { uuid, threads, service, timer });