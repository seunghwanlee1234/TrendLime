import styled from '@emotion/styled';

export const Styled = {};

Styled.AlbumListCarousel = styled.div`
    position: relative;

    button {
        border-radius: 100%;
        background-color: #c5c5c5db;
        border: none;

        &:hover {
            background-color: #726f6fdb;
        }
    }
`;

Styled.SliderContainer = styled.div`
    /* max-width: ${(props) => props.items * 190}px; */
    margin: 0 auto;
    overflow: hidden;

    /* @media only screen and (max-width: 768px) {
        max-width: ${(props) => props.items * 160}px;
    } */
`;

Styled.SliderWrapper = styled.ul`
    width: 100%;
    display: flex;
    gap: 1.3rem;
    overflow-x: scroll;
    scroll-behavior: smooth;
    white-space: nowrap;

    &::-webkit-scrollbar {
        background-color: rgb(241 242 243);
        height: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #80808061;
    }
`;

Styled.Slide = styled.li`
    padding: 10px;
`;

Styled.Rank = styled.div`
    margin-bottom: 10px;
    color: #00dd00;
    border-radius: 50%;
    font-weight: bold;
    font-size: 1.6rem;
`;

Styled.AlbumCover = styled.div`
    width: 160px;
    height: 160px;

    img {
        height: 100%;
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        width: 135px;
        height: 135px;
    }
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

Styled.PrevBtn = styled.button`
    display: ${(props) => (props.firstElemIntersect ? 'none' : 'block')};
    position: absolute;
    top: 40%;
    z-index: 1;
    left: -15px;
    padding: 10px;
`;

Styled.NextBtn = styled.button`
    display: ${(props) => (props.lastElemIntersect ? 'none' : 'block')};
    position: absolute;
    top: 40%;
    z-index: 1;
    right: -15px;
    padding: 10px;
`;
