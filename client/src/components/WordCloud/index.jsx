import React, { useCallback, useMemo } from 'react';
import { css, jsx } from '@emotion/react';
import WordCloud from 'react-d3-cloud';
import { scaleLinear } from 'd3-scale';

function Wordcloud({ data, height = 200, width = 600, fontsize = 15, fontValue = 5 }) {
    const FilteredData = useMemo(
        () => data.map((d) => ({ text: d.word, value: Math.floor(parseFloat(d.freq) * 10) })),
        [data],
    );

    const FilteredValue = FilteredData.map((fd) => fd.value);

    let sum = FilteredData.reduce((a, b) => a + b.value, 0);
    let avg = sum / FilteredData.length;
    let maxValue = Math.max(...FilteredValue);
    let minValue = Math.min(...FilteredValue);

    let color = scaleLinear().domain([minValue, maxValue]).range(['#d1bd06', '#009c4e']);

    /* avg가 바뀔때마다 갱신 */
    const fontSize = useCallback(
        (word) => {
            const size = Math.log2(word.value) * fontValue;
            return size;
        },
        [avg],
    );
    const fontWeight = useCallback((word) => (word.value > avg ? 'bold' : 'normal'), [avg]);
    const fill = useCallback(
        (word) => {
            return color(word.value);
        },
        [avg],
    );

    return (
        <div css={WordCloudWrapper({ width: width, height: height })}>
            <WordCloud
                width={width}
                height={height}
                data={FilteredData}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fill={fill}
                rotate={0}
                padding={10}
                font="Noto Sans KR"
            />
        </div>
    );
}

const WordCloudWrapper = ({ width, height }) => css`
    background-color: #f5f8fc;
    border: 1px solid #cecece;
    border-radius: 8px;
    width: ${width}px;
    height: ${height}px;
`;

export default Wordcloud;
