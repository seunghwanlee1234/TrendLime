import React from 'react';
import { useParams } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import SearchTotalContents from './SearchTotalContents';

const queryClient = new QueryClient();

function SearchTotalPage() {
    let { searchKeyword } = useParams();

    return (
        <QueryClientProvider client={queryClient}>
            <SearchTotalContents searchKeyword={searchKeyword} />
        </QueryClientProvider>
    );
}

export default SearchTotalPage;
