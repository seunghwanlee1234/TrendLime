import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { css, jsx } from '@emotion/react';
import { Styled } from './styles';

import { featchSongInfoKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';

import TopicSection from './TopicSection';
import EmotionSection from './EmotionSection';
import RecommendSongSection from './RecommendSongSection';
import Spinner from '../../common/Spinner/index';

const queryClient = new QueryClient();

function SongInfoPage() {
    const { songId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [songId]);

    return (
        <QueryClientProvider client={queryClient}>
            <SongInfoContents songId={songId} />
        </QueryClientProvider>
    );
}

function SongInfoContents({ songId }) {
    const [lyricsOpen, setLyricscOpen] = useState(false);

    const { data: album } = useQuery([featchSongInfoKey, { song_id: songId }], useQueryFetch, {
        initialData: [{ Lyric: '', cover_url: '', song_name: '', artist: '' }],
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
    });

    const slitedLyrics = useMemo(
        () =>
            album[0]?.Lyric
                ? album[0].Lyric.split('  ').filter((sentence) => sentence.length !== 0)
                : [],
        [album],
    );

    const { cover_url, song_name, artist } = album[0];

    return (
        <div>
            <Styled.SummaryInfo>
                <Styled.SummaryInfoWrapper>
                    <Styled.AlbumCover>
                        {(cover_url || cover_url?.length !== 0) && (
                            <img src={cover_url} alt={song_name} loading="lazy" />
                        )}
                    </Styled.AlbumCover>
                    <Styled.SongInfo>
                        <h2>{song_name}</h2>
                        <p>{artist}</p>
                    </Styled.SongInfo>
                </Styled.SummaryInfoWrapper>
                <div css={BackgroundWrapper({ cover_url: cover_url })}></div>
            </Styled.SummaryInfo>
            <Styled.MainInfo>
                <Suspense fallback={<Spinner />}>
                    <Styled.LeftInfo>
                        <TopicSection songId={songId} />
                        <EmotionSection songId={songId} />
                        <RecommendSongSection songId={songId} />
                    </Styled.LeftInfo>
                </Suspense>
                <Styled.RightInfo>
                    <Suspense fallback={<Spinner />}>
                        <h3>가사정보</h3>
                        <Styled.LyricsWrapper open={lyricsOpen}>
                            <p>
                                {slitedLyrics.map((sentence) => (
                                    <>
                                        {sentence}
                                        <br />
                                    </>
                                ))}
                            </p>
                        </Styled.LyricsWrapper>
                        <button onClick={() => setLyricscOpen(!lyricsOpen)}>
                            {lyricsOpen ? '접기' : '펼치기'}
                        </button>
                    </Suspense>
                </Styled.RightInfo>
            </Styled.MainInfo>
        </div>
    );
}

const BackgroundWrapper = (props) => css`
    background: url(${props.cover_url});
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(5px);
    opacity: 0.3;
    transform: scale(1.1);
`;

export default SongInfoPage;
