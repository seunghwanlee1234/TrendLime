import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { css, jsx } from '@emotion/react';
import route from '../../routers/routeConstants';
import Banner from '../../components/Banner/index';
import Container from '../../components/Container/index';

import Lime from '../../assets/images/lime.png';

function AboutPage() {
    return (
        <Container>
            <Banner
                title="트렌드 라임,"
                subtitle="가사 트렌드를 분석해드립니다."
                button={{ text: '곡 검색하기', link: route.SEARCH }}
            />
            <div>
                <div css={IntroduceHeader}>
                    <img src={Lime} alt="트렌드 라임 로고" />
                    <h3> 트렌드 라임은, </h3>
                </div>
                <div css={IntroduceContents}>
                    <Fade direction="top">
                        <div>
                            <p>
                                <b>'트렌드' (Trend)</b>와 <b>'라임(Rhyme, Lime)'</b>을 합친 말로,
                            </p>
                            <div css={WordDescribe}>
                                <p>
                                    트렌드: 가사 데이터 분석으로 얻을 수 있는 핵심 정보 <br />
                                    라임: 가사에서 '운'을 나타내는 중요한 요소
                                </p>
                            </div>
                            <p>
                                가사 데이터 분석 서비스를 제공해서 <br />
                                유저들에게 “라임”과 같은 역할을 하겠다는 목표를 가지고 있습니다.
                            </p>
                        </div>
                    </Fade>
                    <ol>
                        <Fade direction="top">
                            <li>
                                <p css={Service}>
                                    <span>1.</span> 국내 가요 가사 데이터를 인공지능 기술로
                                    분석하여, <b>트렌드 / 핵심 소재 / 감정 분석 결과</b>를
                                    제공합니다.
                                </p>
                            </li>
                        </Fade>
                        <Fade direction="top">
                            <li>
                                <p css={Service}>
                                    <span>2.</span> 국내 가사의 변화 흐름이 궁금한{' '}
                                    <b>작사가와 대중</b>에게 유용한 정보를 제공할 수 있도록
                                    노력합니다.
                                </p>
                            </li>
                        </Fade>
                        <Fade direction="top">
                            <li>
                                <p css={Service}>
                                    <span>3.</span> 70개의 카테고리로 분류된 국내 가요 검색을 손쉽게
                                    해보고, 인사이트를 탐색해보세요.
                                </p>
                            </li>
                        </Fade>
                    </ol>
                </div>
            </div>
        </Container>
    );
}

const IntroduceHeader = css`
    width: 60%;
    margin: 0 auto;
    text-align: center;
    padding: 4rem 0;

    img {
        width: 58px;
        vertical-align: middle;
        margin-right: 1rem;
    }

    h3 {
        display: inline-block;
        font-size: 2rem;
        font-weight: bold;
        vertical-align: middle;
        text-align: center;
        text-decoration-line: underline;
        text-decoration-color: #00dd00;
    }
`;

const IntroduceContents = css`
    width: 60%;
    margin: 0 auto;
    padding: 0 2rem;
    font-size: 1.2rem;
    line-height: 1.8rem;

    b {
        font-weight: bold;
    }

    div {
        text-align: center;
    }
`;

const WordDescribe = css`
    font-size: 0.8rem;
    color: gray;
    border: 1px solid #00dd00;
    margin: 2rem 0;
`;

const Service = css`
    padding: 2rem;
    box-shadow: 2px 2px 6px 2px #8080804f;
    border-radius: 10px;
    font-size: 1.2rem;
    margin: 3rem 0;

    span {
        color: #00dd00;
        font-weight: bold;
        font-size: 2rem;
        margin-right: 0.3rem;
    }
`;

export default AboutPage;
