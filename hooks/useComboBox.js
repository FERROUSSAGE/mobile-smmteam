import React from 'react';

export const useComboBox = (init) => {
    const [value, setValue] = React.useState(init);

    const onChangeItem = item => setValue(item.value);

    return { value, onChangeItem };
}