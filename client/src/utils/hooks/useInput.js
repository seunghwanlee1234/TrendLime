import { useState, useCallback } from 'react';

export const useInput = (init) => {
    const [input, setInput] = useState(init);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInput((input) => ({ ...input, [name]: value }));
    }, []);

    const reset = useCallback(() => setInput(init), [init]);
    return [input, onChange, reset];
};

export default useInput;
