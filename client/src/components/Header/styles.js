import styled from '@emotion/styled';

export const Styled = {};

Styled.HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2.5rem;
    align-items: center;

    ${(props) => props.theme.mq.tablet} {
        padding: 1rem 2rem;
        flex-direction: column;
        align-items: flex-start;
    }
`;

Styled.HeaderLogo = styled.div`
    width: 20%;

    img {
        width: 100%;
        height: 100%;
    }

    ${(props) => props.theme.mq.tablet} {
        width: 30%;
    }
`;

Styled.HeaderMenu = styled.nav`
    width: auto;
    margin-top: 0;

    ${(props) => props.theme.mq.tablet} {
        width: 100%;
        margin-top: 1rem;
    }
`;

Styled.HeaderMenuWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-content: flex-end;

    li {
        text-align: center;
        font-weight: bold;
        padding: 1rem;
    }

    li:hover a {
        color: ${(props) => props.theme.primaryColor};
    }

    ${(props) => props.theme.mq.tablet} {
        display: ${(props) => (props.menuStatus ? 'flex' : 'none')};
        flex-direction: column;
        align-content: flex-start;
    }
`;

Styled.MenuIcon = styled.div`
    display: none;

    ${(props) => props.theme.mq.tablet} {
        position: absolute;
        display: block;
        top: 1rem;
        right: 2rem;
    }
`;
