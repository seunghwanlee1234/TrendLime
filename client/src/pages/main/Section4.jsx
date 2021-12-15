import React from 'react';
import { css, jsx } from '@emotion/react';

import ContentBlock from '../../components/ContentBlock/index';

import Button from '../../common/Button/index';
import route from '../../routers/routeConstants';

function Section4() {
    return (
        <div css={Section4Wrapper}>
            <ContentBlock type="top" contents={['더  다양한 곡들의 가사 트렌드를 확인해보세요!']}>
                {<Button text="곡 검색하기" link={route.SEARCH} />}
            </ContentBlock>
        </div>
    );
}

const Section4Wrapper = css`
    height: 300px;
    text-align: center;
`;
export default Section4;
