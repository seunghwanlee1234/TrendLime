import React, { useMemo, useContext } from 'react';
import { Styled } from './styles';
import { useQuery } from 'react-query';

import { fetchSearchKey } from '../../../utils/api/queryKeys';
import { useQueryFetch } from '../../../utils/hooks/useQueryFetch';

import { SearchOptionContext } from '../SearchPage';

import Carousel from '../../../components/Carousel/index';
import AlbumList from '../../../components/Carousel/AlbumList';
import TrendContents from './TrendContents';
import GeneralContents from './GeneralContents';

function Test({ searchOption }) {
    const { data } = useQuery([fetchSearchKey, searchOption], useQueryFetch, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        suspense: true,
    });
    const songs = useMemo(() => (typeof data === undefined ? [] : data.songs.slice(0, 30)), [data]);

    return (
        <div>
            {
                <>
                    {searchOption.tag === '트렌드' ? (
                        <TrendContents data={data} />
                    ) : (
                        <GeneralContents
                            data={data}
                            year={searchOption.category === '트렌드/연도'}
                        />
                    )}
                    <Styled.SubContentsWrapper>
                        <>
                            <Styled.SubTitle>대표곡</Styled.SubTitle>
                            <Carousel slideList={AlbumList({ songs: songs })} />
                        </>
                    </Styled.SubContentsWrapper>
                </>
            }
        </div>
    );
}

function SearchContents() {
    const { searchOption } = useContext(SearchOptionContext);

    return useMemo(() => {
        return <Test searchOption={searchOption} />;
    }, [searchOption]);
}

export default React.memo(SearchContents);
