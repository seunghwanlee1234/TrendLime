import React from 'react';
import { css, jsx } from '@emotion/react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function BarChart({ data, width = '100%', height = '100%' }) {
    const values = data[0] === null ? [] : data.map((d) => parseFloat(d.freq));
    const labels = data[0] === null ? [] : data.map((d) => d.word);

    const backgroundColor = [];
    const borderColor = [];

    /* TODO: 한 줄로 바꾸기 */
    for (let i = 1; i <= 10; i++) {
        if (i <= 3) {
            backgroundColor.push('#00DD00');
            borderColor.push('#00DD00');
        } else {
            backgroundColor.push('#979797');
            borderColor.push('#97979752');
        }
    }

    const barData = {
        labels: labels,
        datasets: [
            {
                indexAxis: 'y',
                data: values,
                fill: false,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: false,
            },
        },
    };

    return (
        <div css={BarChartWrapper({ width: width, height: height })}>
            <Bar data={barData} options={options} />
        </div>
    );
}

const BarChartWrapper = ({ width, height }) => css`
    width: ${width};
    height: ${height};
    margin: 0 auto;
`;

export default BarChart;
