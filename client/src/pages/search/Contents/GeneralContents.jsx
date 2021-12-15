import React, { useMemo } from 'react';

import Wordcloud from '../../../components/WordCloud/index';
import BarChart from '../../../components/BarChart/index';
import { Styled } from './styles';

function GeneralContents({ data, year }) {
    const top30Data = useMemo(
        () => (data?.length === 0 ? [] : data.words_and_freq.slice(0, 30)),
        [data],
    );
    const top10Data = useMemo(
        () => (data?.length === 0 ? [] : data.words_and_freq.slice(0, 10)),
        [data],
    );

    return (
        <>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>가사 속 표현 분석</Styled.SubTitle>
                <Styled.SubContentArea>
                    {top30Data[0] === null ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <Wordcloud
                            data={top30Data}
                            fontsize={year === false ? 1 : 10}
                            height={300}
                            width={1000}
                        />
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>노래 가사 TOP10</Styled.SubTitle>
                <Styled.SubContentArea>
                    {top10Data[0] === null ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <BarChart data={top10Data} />
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
        </>
    );
}

export default GeneralContents;
