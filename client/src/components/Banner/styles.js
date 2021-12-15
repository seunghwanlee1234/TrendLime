import styled from '@emotion/styled';
export const Styled = {};

Styled.BannerWrapper = styled.div`
    height: 70%;
    text-align: center;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;

    @media only screen and (max-width: 768px) {
        text-align: left;
        padding: 2rem;
    }
`;

Styled.BannerTitle = styled.h2`
    font-weight: bold;
    font-size: 4rem;
    line-height: 5rem;

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;
