import styled from '@emotion/styled';

export const Styled = {};

Styled.SearchTotalContentsWrapper = styled.div`
    margin-top: 3rem;
    border-top: 1px solid gray;

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem 2.5rem;
        background-color: #80808017;
    }
`;

Styled.SearchOptionsWrapper = styled.div`
    padding: 1rem 2.5rem;

    ul {
        display: flex;
    }
`;

Styled.SearchOption = styled.li`
    font-size: 1.2rem;
    color: ${(props) => (props.active ? `${props.theme.primaryColor}` : 'black')};
    border-bottom: ${(props) =>
        props.active ? `1.4px solid ${props.theme.primaryColor}` : 'none'};
    padding: 0.5rem 1.5rem;
    text-align: center;
    cursor: pointer;
`;

Styled.SearchTotalSection = styled.section`
    padding: 1rem 2.5rem;
`;

Styled.AlbumList = styled.li`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #80808017;
    padding: 1.2rem 0;
    cursor: pointer;

    div {
        line-height: 1.4rem;
    }

    div:first-of-type {
        width: 100px;
        height: 100px;
        margin-right: 2rem;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

Styled.LoadButton = styled.button`
    border: 1px solid ${(props) => props.theme.primaryColor};
    display: block;
    width: 43%;
    height: 40px;
    margin: 2rem auto;
    background-color: white;
`;
