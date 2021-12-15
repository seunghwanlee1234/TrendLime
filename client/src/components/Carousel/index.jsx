import React, { useRef, useState } from 'react';
import { Styled } from './styles';

import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';

function Carousel({ slideList }) {
    const [slideIdx, setSlideIdx] = useState(0);
    const [firstElemIntersect, setFirstElemIntersect] = useState(true);
    const [lastElemIntersect, setLastElemIntersect] = useState(false);

    const slideWrapperRef = useRef(null);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (lastElemIntersect) {
            return;
        }
        setSlideIdx(slideIdx + 1);
        slideRef.current.scrollLeft += slideWrapperRef.current.clientWidth;
    };

    const prevSlide = () => {
        if (firstElemIntersect) {
            return;
        }
        setSlideIdx(slideIdx - 1);
        slideRef.current.scrollLeft -= slideWrapperRef.current.clientWidth;
    };

    /* 성능 측정 TEST 용 */
    // const onScrollTest = (e) => {
    //     if (e.target.scrollLeft === 0) {
    //         /* 스크롤이 맨 왼쪽에 위치함 */
    //         setFirstElemIntersect(true);
    //     } else if (e.target.scrollWidth <= e.target.scrollLeft + e.target.offsetWidth) {
    //         /* 스크롤이 맨 오른쪽에 위치함 */
    //         setLastElemIntersect(true);
    //     } else {
    //         /* 스크롤이 가운데에 위치하는 경우 */
    //         setFirstElemIntersect(false);
    //         setLastElemIntersect(false);
    //     }
    // };

    /*
     * Arguments : cb (스크롤 시, 발생할 이벤트)
     * requestAnimationFrame : 브라우저가 렌더링 할 수 있는 ‘능력’에 맞춰 이벤트를 트리거함
     * tick : 브라우저가 렌더링 할 수 있는 능력 이상의 cb 함수 호출을 막음
     */
    const onScrollActiveBtn = (cb) => {
        let tick = false;
        return function trigger() {
            if (tick) {
                return;
            }

            tick = true;

            return requestAnimationFrame(function task() {
                tick = false;
                return cb();
            });
        };
    };

    const onScroll = (e) => {
        if (e.target.scrollLeft === 0) {
            /* 스크롤이 맨 왼쪽에 위치함 */
            setFirstElemIntersect(true);
        } else if (e.target.scrollWidth <= e.target.scrollLeft + e.target.offsetWidth) {
            /* 스크롤이 맨 오른쪽에 위치함 */
            setLastElemIntersect(true);
        } else {
            /* 스크롤이 가운데에 위치하는 경우 */
            setFirstElemIntersect(false);
            setLastElemIntersect(false);
        }
    };

    return (
        <Styled.AlbumListCarousel>
            <Styled.SliderContainer ref={slideWrapperRef}>
                <Styled.SliderWrapper
                    ref={slideRef}
                    onScroll={(e) => onScrollActiveBtn(onScroll(e))}
                    // onScroll={(e) => onScrollTest(e)}
                >
                    {slideList.map((item, index) => (
                        <Styled.Slide>{item}</Styled.Slide>
                    ))}
                </Styled.SliderWrapper>
            </Styled.SliderContainer>
            <Styled.PrevBtn onClick={prevSlide} firstElemIntersect={firstElemIntersect}>
                <CaretLeftFilled />
                <span className="visually-hidden">이전</span>
            </Styled.PrevBtn>
            <Styled.NextBtn onClick={nextSlide} lastElemIntersect={lastElemIntersect}>
                <CaretRightFilled />
                <span className="visually-hidden">다음</span>
            </Styled.NextBtn>
        </Styled.AlbumListCarousel>
    );
}

export default Carousel;
