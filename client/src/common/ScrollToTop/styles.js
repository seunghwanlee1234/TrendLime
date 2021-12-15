import styled from '@emotion/styled';

export const Styled = {};

Styled.ScrollUpBox = styled.div`
    padding: 10px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
    background-color: rgb(241, 242, 243);
    text-align: center;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
    z-index: 1;

    &:hover,
    &:active,
    &:focus {
        background-color: rgb(224, 224, 224);
    }
`;
