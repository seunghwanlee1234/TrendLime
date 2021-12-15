import styled from '@emotion/styled';

export const Styled = {};

Styled.Button = styled.button`
    background-color: ${(props) => (props.type === 'fill' ? '#00DD00' : '#fff')};
    color: ${(props) => (props.type === 'fill' ? '#fff' : '#00DD00')};
    font-size: 1rem;
    font-weight: 700;
    width: 300px;
    border: 1px solid rgb(237, 243, 245);
    border-radius: 4px;
    padding: 13px 0px;
    cursor: pointer;
    margin: 3rem 0;
    max-width: 180px;
    transition: box-shadow 0.3s ease-in-out 0s;
    box-shadow: rgb(114 114 114 / 20%) 0px 16px 30px;

    &:hover {
        box-shadow: rgb(114 114 114 / 51%) 0px 16px 30px 4px;
    }
`;
