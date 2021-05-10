import { makeAutoObservable } from 'mobx';
import { getResellers as httpGetResellers, getTypes as httpGetTypes } from '../https/reseller';
import { getOrders as httpGetOrders } from '../https/order';
import { Alert } from 'react-native';

class Store {

    user = {};
    orders = [];
    resellers = [];
    resellerTypes = [];
    payments = [
        { label: 'RK', value: 'RK' },
        { label: 'UP', value: 'UP' },
        { label: 'WM', value: 'WM' },
        { label: 'PP', value: 'PP' },
        { label: 'ИК', value: 'ИК' },
        { label: 'FK', value: 'FK' }
    ];
    totalCount = 0;


    constructor(){
        makeAutoObservable(this);
    }

    async fetchOrders(page) {
        try {
            const { data: orders } = await httpGetOrders(page);
            if(orders.status){
                this.orders = orders.response;
                this.totalCount = orders.response.count;
            }
                
        } catch (e) { Alert.alert('Произошла ошибка при получении списка заказов!') }
    }

    async fetchResellers() {
        try {
            const { data: resellers } = await httpGetResellers();
            if(resellers.status)
                this.resellers = resellers.response;
        } catch (e) { Alert.alert('Произошла ошибка при получении списка реселлеров!') }
    }

    async fetchResellerTypes() {
        try {
            const { data: types } = await httpGetTypes();
            if(types.status)
                this.resellerTypes = types.response;
        } catch (e) { Alert.alert('Произошла ошибка при получении списка типов ресселеров') }
    }
}

export default new Store;