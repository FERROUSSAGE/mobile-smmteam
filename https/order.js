import { $host } from './index';

export const getOrders = async (limit, page) => await $host.get('order', { params: { limit, page } });
export const getOrder = async (id) => await $host.get('order' + id);
export const createOrder = async(args) => await $host.post('order', args);
export const updateOrder = async(args) => await $host.patch('order', args);
export const deleteOrder = async(id) => await $host.delete('order/' + id);