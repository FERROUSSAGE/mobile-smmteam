import { $host } from './index';

export const checkOrder = async(id) => await $host.get('order/check/' + id );
export const getOrders = async (page) => await $host.get('order', { params: { page } });
export const getOrder = async (id) => await $host.get('order/' + id);
export const getOrderByText = async (text) => await $host.post('order/text/', { text });
export const createOrder = async(args) => await $host.post('order', args);
export const deleteOrder = async(id) => await $host.delete('order/' + id);