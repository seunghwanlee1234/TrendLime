import React from 'react';
import { css, jsx } from '@emotion/react';

import route from '../../routers/routeConstants';
import Banner from '../../components/Banner/index';

function Section1() {
    return (
        <Banner
            title="트렌드 라임,"
            subtitle="가사 트렌드를 분석해드립니다."
            button={{ text: '서비스 소개', link: route.ABOUT }}
        />
    );
}

export default Section1;
