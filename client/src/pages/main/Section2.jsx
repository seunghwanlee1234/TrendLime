import React from 'react';
import { css, jsx } from '@emotion/react';
import { AttentionSeeker } from 'react-awesome-reveal';

import ContentBlock from '../../components/ContentBlock/index';
import tag1 from '../../assets/images/tag1.png';
import tag2 from '../../assets/images/tag2.png';
import tag3 from '../../assets/images/tag3.png';
import tag4 from '../../assets/images/tag4.png';

function Section2() {
    return (
        <div css={Section2Wrapper}>
            <AttentionSeeker effect="pulse" css={labelsBackground}>
                <div>
                    <img src={tag1} alt="태그 백그라운드1" />
                    <img src={tag2} alt="태그 백그라운드2" />
                    <img src={tag3} alt="태그 백그라운드3" />
                    <img src={tag4} alt="태그 백그라운드4" />
                </div>
            </AttentionSeeker>
            <ContentBlock
                type="top"
                contents={[
                    '최신 국내 가요부터 테마별 / 연도별 가요까지,',
                    '모든 가사의 트렌드와 핵심 소재를 분석해드려요.',
                ]}
            />
        </div>
    );
}

const Section2Wrapper = css`
    height: 400px;
    line-height: 2rem;
    text-align: center;
    background-color: #8080800a;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const labelsBackground = css`
    img {
        width: 8%;
        position: absolute;
    }

    img:nth-of-type(1) {
        top: 0;
        right: 10%;
    }

    img:nth-of-type(2) {
        top: 0;
        left: 10%;
    }

    img:nth-of-type(3) {
        bottom: 10%;
        right: 20%;
    }

    img:nth-of-type(4) {
        bottom: 10%;
        left: 20%;
    }
`;

export default Section2;
