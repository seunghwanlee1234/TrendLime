import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { featchRecommendSongKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';

import { Styled } from './styles';
import Carousel from '../../components/Carousel/index';
import AlbumList from '../../components/Carousel/AlbumList';

function RecommendSongSection({ songId }) {
    const { isLoading, error, data } = useQuery(
        [featchRecommendSongKey, { song_id: songId }],
        useQueryFetch,
        {
            initialData: [],
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );

    const recommendSongs = useMemo(
        () => (data.recommend_songs ? data.recommend_songs : []),
        [data],
    );

    return (
        <Styled.RecommendSong>
            <h3>가사의 표현과 유사한 곡</h3>
            {isLoading ? (
                <div>유사한 곡을 불러오는 중입니다. </div>
            ) : (
                <Carousel slideList={AlbumList({ songs: recommendSongs.slice(0, 40) })} />
            )}
        </Styled.RecommendSong>
    );
}

export default React.memo(RecommendSongSection);
