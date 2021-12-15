import styled from '@emotion/styled';
export const Styled = {};

Styled.SummaryInfo = styled.section`
    background-color: #00000036;
    height: 330px;
    overflow: hidden;
`;

Styled.SummaryInfoWrapper = styled.div`
    height: 330px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    margin-left: 2.5rem;
    padding: 0;
    z-index: 1;
    text-align: center;
    gap: 3rem;

    ${(props) => props.theme.mq.tablet} {
        flex-direction: column;
        width: 100%;
        padding: 2rem 0;
        margin: 0;
        gap: 0;
    }
`;

Styled.AlbumCover = styled.div`
    text-align: left;

    img {
        width: 200px;
        height: 200px;
    }

    ${(props) => props.theme.mq.tablet} {
        text-align: center;
    }
`;

Styled.SongInfo = styled.div`
    text-align: left;

    h2 {
        font-size: 1.7rem;
        font-weight: bold;
        margin: 1rem 0;
    }

    p {
        font-size: 1.2rem;
        text-align: left;
    }
    ${(props) => props.theme.mq.tablet} {
        text-align: center;
    }
`;

Styled.MainInfo = styled.section`
    position: relative;
    background-color: #f9f9f9;
    padding: 3rem 2.5rem;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;

    h3 {
        font-size: 1.3rem;
        font-weight: bold;
        color: black;
        padding-bottom: 1rem;
        line-height: 2.2rem;

        span {
            color: ${(props) => props.theme.primaryColor};
        }
    }

    p {
        font-size: 1.2rem;
    }

    ${(props) => props.theme.mq.tablet} {
        padding: 2rem 1.2rem;
        flex-direction: column-reverse;
    }
`;

Styled.LeftInfo = styled.div`
    width: 62%;
    ${(props) => props.theme.mq.tablet} {
        width: 100%;
    }
`;

Styled.RightInfo = styled.div`
    width: 33%;
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
    position: sticky;
    right: 0;
    top: 0;

    button {
        width: 100%;
        text-align: center;
        border: none;
        background-color: #fff;
        padding-top: 1rem;
        font-size: 1rem;
    }

    ${(props) => props.theme.mq.tablet} {
        width: 100%;
        position: relative;
    }
`;

Styled.LyricsWrapper = styled.div`
    p {
        max-height: ${(props) => (props.open ? 'none' : '32rem')};
        -webkit-line-clamp: ${(props) => (props.open ? 'unset' : '21')};
        line-height: 2rem;
        overflow: hidden;
        text-align: center;
        font-size: 1rem;

        ${(props) => props.theme.mq.tablet} {
            max-height: ${(props) => (props.open ? 'none' : '20rem')};
        }
    }
`;

Styled.Emotion = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
`;

Styled.Topic = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
    ${(props) => props.theme.mq.tablet} {
        width: 100%;
    }
`;

Styled.RecommendSong = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
`;

Styled.TopicWordCloud = styled.div`
    margin-bottom: 2rem;
`;

Styled.TopicSongs = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;

    ${(props) => props.theme.mq.tablet} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

Styled.TopicSongList = styled.li`
    border-top: 1px solid #c5c5c580;
    padding: 0.3rem 0;

    &:hover {
        background-color: #c5c5c580;
        p,
        span {
            color: ${(props) => props.theme.primaryColor};
        }
    }

    /* 마지막에서 2개의 요소 선택 */
    &:nth-last-of-type(-n + 2) {
        border-bottom: 1px solid #c5c5c580;
    }

    div {
        display: inline-block;
        vertical-align: middle;
        line-height: 1.4rem;

        img {
            vertical-align: middle;
        }
    }

    div:first-of-type {
        width: 15%;
        height: 15%;
        margin-right: 15px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    div:last-of-type {
        width: 70%;
    }

    p {
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: normal;
        overflow: hidden;
        font-size: 1rem;
        width: 100%;

        span {
            display: block;
            font-size: 0.8rem;
            color: #0000009c;
        }
    }
`;
