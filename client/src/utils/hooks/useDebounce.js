import react, { useState, useEffect } from 'react';

function Debounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const debounceHandler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(debounceHandler);
        };
    }, [value, delay]);
    return debouncedValue;
}

export default Debounce;
