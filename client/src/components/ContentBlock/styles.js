import styled from '@emotion/styled';

export const Styled = {};

Styled.ContentSection = styled.section`
    font-size: 1.3rem;
`;

Styled.Row = styled.div`
    ${(props) =>
        !props.top &&
        `align-items: center;
        display: flex;
        justify-content: space-between;`}
`;

Styled.ContentWrapper = styled.div`
    position: relative;

    @media only screen and (max-width: 575px) {
        padding-top: 4rem;
    }
`;

Styled.Title = styled.h3`
    margin: 1rem 0;
    font-size: 3rem;
    font-weight: bold;
`;

Styled.Content = styled.p`
    margin: 1rem 0 3rem 0;
    font-weight: 600;
    font-size: 1.3rem;
    text-align: center;
    line-height: 1.8rem;
`;

Styled.LeftContent = styled.p`
    margin: 1rem 0 3rem 0;
    font-weight: 600;
    font-size: 1.3rem;
    text-align: left;
    line-height: 1.8rem;
`;

Styled.LeftImagContent = styled.div`
    width: 68%;

    img {
        width: 100%;
        height: 100%;
    }
`;
