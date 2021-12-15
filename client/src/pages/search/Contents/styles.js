import styled from '@emotion/styled';
export const Styled = {};

Styled.SubContentsWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 5rem;
`;

Styled.SubContentArea = styled.div`
    margin-top: 5rem;
`;

Styled.SubTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 4rem;
`;

Styled.TopicList = styled.div`
    border: 1px solid rgb(225 225 225);
    border-radius: 0.7rem;
    box-shadow: -2px 7px 4px 2px #0000001c;
    margin: 2rem 0;
    padding: 1.2rem;

    h4 {
        text-decoration: underline;
        text-decoration-color: #00dd00;
        font-weight: bold;
        font-size: 1rem;
        line-height: 2rem;
        margin-bottom: 0.8rem;
    }
`;

Styled.WordCloudList = styled.div`
    display: flex;
`;

Styled.SongInfo = styled.div`
    margin-top: 10px;
    p {
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: normal;
        overflow: hidden;
        max-width: 9rem;
    }

    p:first-of-type {
        font-size: 1rem;
        margin-bottom: 5px;
    }

    p:last-of-type {
        color: #0000009e;
        font-size: 0.8rem;
    }
`;
