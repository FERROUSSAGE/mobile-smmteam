const regexDictionary = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
    number: /^[0-9]+$/,
    text: /^[А-ЯЁа-яЁ A-Za-z]*$/,
    loginAndPassword: /^[A-Z-a-z0-9]*$/,
    link: /^http(s)?:\/\//,
    uid: /^[A-Za-z_0-9-#]*$/,
    empty: /^\s*$/,
};

const patternErrors = {
    email: 'Был введен не корректный E-mail',
    number: 'Был введен не числовой формат данных',
    text: 'Был введен не строковый формат данных',
    empty: 'Была передана пустая строка',
    loginAndPassword: 'Логин и пароль может содержать только латиницу',
    link: 'Была веден формат не в виде ссылки',
    uid: 'Был введен не коректный UUID'
};

const ValidateFields = (text) => {
    if(text == null || text.trim().length == 0)
        return false;
    return true;
}

const check = (array) => {
    const errors = [];

    array.forEach(element => {
        if(!ValidateFields(element[0])) return errors.push(patternErrors['empty']);

        for( let regDic in regexDictionary ){
            if(element[1] === regDic){
                const regex = regexDictionary[regDic].test(element[0]);
                if(!regex && regexDictionary['empty'].test(element[0])){
                    console.log(1);
                    errors.push(patternErrors[regDic]);
                }
                else if(element[1] === 'uid' && !regexDictionary['uid'].test(element[0])){
                    errors.push(patternErrors[regDic]);
                }
                else if(element[1] === 'email' && !regexDictionary['email'].test(element[0])){
                    errors.push(patternErrors['email']);
                }
            }
        }
    })

    return errors;
};

export {check};