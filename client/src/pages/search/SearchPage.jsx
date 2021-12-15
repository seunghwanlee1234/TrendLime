import React, { useState, useEffect, Suspense, createContext } from 'react';
import { css, jsx } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import SearchBar from '../../common/SearchBar/index';
import Spinner from '../../common/Spinner/index';
import ScrollToTop from '../../common/ScrollToTop/index';

import FilterItems from './Filter/FilterItems';
import SearchContents from './Contents/SearchContents';

const queryClient = new QueryClient();
export const SearchOptionContext = createContext(null);

function SearchPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchOption, setSearchOption] = useState({
        q: '',
        category: '트렌드/연도',
        tag: '트렌드',
    });

    return (
        <QueryClientProvider client={queryClient}>
            <ScrollToTop />
            <SearchBar inputValue="" />
            <SearchOptionContext.Provider
                value={{ searchOption: searchOption, setSearchOption: setSearchOption }}
            >
                <div css={CategoryWrapper}>
                    <Suspense fallback={<Spinner />}>
                        <FilterItems />
                    </Suspense>
                </div>

                <Suspense fallback={<Spinner />}>
                    <SearchContents />
                </Suspense>
            </SearchOptionContext.Provider>
        </QueryClientProvider>
    );
}

const CategoryWrapper = css`
    padding-bottom: 2.3rem;
    border-bottom: 1px solid #0000001c;
`;

export default SearchPage;
