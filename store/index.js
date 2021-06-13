import { makeAutoObservable } from 'mobx';
import { getResellers as httpGetResellers, getTypes as httpGetTypes } from '../https/reseller';
import { getOrders as httpGetOrders } from '../https/order';
import { getMessages as httpGetMessages } from '../https/telegram';
import { balanceAdcore, balanceSpanel, balanceVktarget, balanceSmmok } from '../https/api';
import { Alert } from 'react-native';

class Store {

    user = {};
    orders = [];
    resellers = [];
    resellerTypes = [];
    balances = {
        adcore: 0,
        smmok: 0,
        spanel: 0,
        vktarget: 0
    };
    messages = [];
    payments = [
        { label: 'RK', value: 'RK' },
        { label: 'UP', value: 'UP' },
        { label: 'WM', value: 'WM' },
        { label: 'PP', value: 'PP' },
        { label: 'ИК', value: 'ИК' },
        { label: 'FK', value: 'FK' }
    ];
    totalCount = 0;
    socket = null;


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

    async fetchMessages() {
        try {
            const { data: messages } = await httpGetMessages();
            if(messages.status)
                this.messages = messages.response;
        } catch (e) { Alert.alert('Произошла ошибка при получении сообщений') }
    }

    async fetchBalances(){
        try {

            const { data: adcoreBalance } = await balanceAdcore();
            const { data: smmokBalance } = await balanceSmmok();
            const { data: spanelBalance } = await balanceSpanel();
            const { data: vktargetBalance } = await balanceVktarget();

            if(adcoreBalance.status) this.balances.adcore = adcoreBalance.response.balance;
            if(smmokBalance.status) this.balances.smmok = smmokBalance.response.balance;
            if(spanelBalance.status) this.balances.spanel = spanelBalance.response.balance;
            if(vktargetBalance.status) this.balances.vktarget = vktargetBalance.response.balance;

        } catch (e) { Alert.alert('Произошла ошибка при получении баланса реселлеров!') }
    }
}

export default new Store;