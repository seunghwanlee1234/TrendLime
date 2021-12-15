import { useReducer, useEffect } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            return {
                loading: false,
                data: null,
                error: action.error,
            };
    }
}

function useAsync(callbackFunc, deps = []) {
    console.log(typeof callbackFunc);

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false,
    });

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callbackFunc();
            dispatch({ type: 'SUCCESS', data });
        } catch (error) {
            dispatch({ type: 'ERROR', error: error });
        }
    };

    useEffect(() => {
        fetchData();
    }, deps);

    return [state, fetchData];
}

export default useAsync;
