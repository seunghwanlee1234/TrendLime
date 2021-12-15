import React from 'react';
import { css, jsx } from '@emotion/react';
import { useQuery } from 'react-query';

import { fetchSearchKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';

import ContentBlock from '../../components/ContentBlock/index';
import Carousel from '../../components/Carousel/index';
import AlbumList from '../../components/Carousel/AlbumList';
import BarChart from '../../components/BarChart/index';

function Section3() {
    const { data, isFetching, error } = useQuery(
        [fetchSearchKey, { category: '트렌드/연도', tag: '트렌드' }],
        useQueryFetch,
        {
            initialData: [],
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );

    return (
        <div css={Section3Wrapper}>
            <ContentBlock
                type="top"
                contents={['최신 TOP10 가요에서 많이 사용하고 있는 표현을 살펴보세요!']}
            >
                {isFetching ? (
                    <div>loading...</div>
                ) : data?.songs.length === 0 ? (
                    <div>데이터가 없습니다. </div>
                ) : (
                    data?.songs && (
                        <>
                            <Carousel
                                slideList={AlbumList({
                                    songs: data.songs.slice(0, 10),
                                    rankShown: true,
                                })}
                            />
                            <div css={BarChartSection}>
                                <BarChart
                                    data={data?.words_and_freq.slice(1)}
                                    width="70%"
                                    height="40%"
                                />
                            </div>
                        </>
                    )
                )}
            </ContentBlock>
        </div>
    );
}

const Section3Wrapper = css`
    padding: 8rem 2rem;
`;

const BarChartSection = css`
    margin-top: 3rem;
`;

export default Section3;
