export function nameSurnameAbbreviation(string){
    let result = '';
    string.split(' ').forEach((item) => result += item[0]);
    return result;
} 