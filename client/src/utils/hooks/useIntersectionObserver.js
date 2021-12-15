import { useState, useEffect } from 'react';

/**
 * Arguments:
 * - ref:  intersectionObserver를 걸어줄 요소 ref
 * - option: threshold 같은 Intersection Observer 옵션 반환
 */

const useIntersectionObserver = (ref, option = { threshold: 0 }) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        option,
    );

    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
            return () => {
                observer.disconnect();
            };
        }
    }, []);

    return isIntersecting;
};

export default useIntersectionObserver;
