import React from 'react';

export const useInput = (init) => {
    const [value, setValue] = React.useState(init);

    const onChangeText = text => setValue(text);

    return { value, onChangeText };
}