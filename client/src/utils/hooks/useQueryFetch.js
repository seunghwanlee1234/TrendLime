import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_DB_HOST,
});

export const useQueryFetch = async ({ queryKey }) => {
    const [key, params = {}] = queryKey;
    const { data } = await apiClient.get(key, {
        params: params,
    });
    return data;
};
