export const clearFields = (array) => array.forEach(item => "value" in item ? item.setValue('') : '');
