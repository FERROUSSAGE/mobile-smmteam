import { checkOrder as httpCheckOrder } from '../../https/order';

export async function checkOrder(id){
    try {
        const { data: order } = await httpCheckOrder(id);
        if(order.status)
            return false;
        return order.response.msg;
    } catch (e) { }
}