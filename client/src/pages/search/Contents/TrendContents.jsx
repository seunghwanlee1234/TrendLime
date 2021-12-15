import React, { useCallback, useMemo } from 'react';

import Wordcloud from '../../../components/WordCloud/index';
import BarChart from '../../../components/BarChart/index';
import Carousel from '../../../components/Carousel/index';
import { Styled } from './styles';

function TrendContents({ data }) {
    const topics = useMemo(() => data.topics, [data]);
    const top10Data = useMemo(() => data.words_and_freq.slice(0, 10), [data]);

    const wordCloudList = useCallback(
        ({ topics }) => {
            const items = topics.map((topic, index) => (
                <Styled.TopicList>
                    <h4>
                        주제#{index + 1}
                        <br />
                        {topic.label_name}
                    </h4>
                    <Wordcloud
                        data={topic.words_and_freq}
                        height={200}
                        width={650}
                        fontsize={3}
                        fontValue={2}
                    />
                </Styled.TopicList>
            ));
            return items;
        },
        [topics],
    );

    return (
        <>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>2000년대 ‘좋아요👍’가 많았던 곡들의 주제</Styled.SubTitle>
                <Styled.SubContentArea>
                    {topics === undefined || topics.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <Carousel slideList={wordCloudList({ topics: topics })} />
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>2000년대 '좋아요👍'가 많았던 곡들의 가사 TOP10</Styled.SubTitle>
                <Styled.SubContentArea>
                    {top10Data === undefined || top10Data.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <BarChart data={top10Data} />
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
        </>
    );
}

export default TrendContents;
