export const getItems = (types, args) => {
    let items = [];
    types.forEach(item => items.push({ label: item[args[0]], value: item[args[1]], name: item[args[2]] }));
    return [...new Set(items.map(obj => JSON.stringify(obj)))].map(str => JSON.parse(str));
}