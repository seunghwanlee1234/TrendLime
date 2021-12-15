import styled from '@emotion/styled';

export const Styled = {};

Styled.SearchArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

Styled.SearchBar = styled.div`
    width: 50%;
    height: 40px;
    margin: 0 auto;
    padding: 5px 20px;
    box-sizing: border-box;
    border-radius: 18px;
    /* border-bottom: 2px solid #cecece; */
    border: 2px solid ${(props) => props.theme.primaryColor};
    border-bottom-left-radius: ${(props) => (props.onFocusStatus ? '0' : 'none')};
    border-bottom-right-radius: ${(props) => (props.onFocusStatus ? '0' : 'none')};
    box-shadow: ${(props) => (props.onFocusStatus ? '0 4px 6px 0 #17171724' : 'none')};
`;

Styled.Input = styled.span`
    width: 90%;
    display: inline-block;
    box-sizing: border-box;

    input {
        width: 100%;
        overflow: scroll;
        margin-top: -1px;
        display: block;
        padding: 5px 0;
        border: 0;
        overflow-x: scroll;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        border-radius: 4px;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.3px;
        caret-color: ${(props) => props.theme.primaryColor};
    }
`;

Styled.SearchBtn = styled.span`
    width: 10%;
    display: inline-block;
    text-align: center;
    font-size: 17px;
    cursor: pointer;
`;

Styled.AutoCompleteArea = styled.div`
    width: 50%;
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
    display: ${(props) => (props.onFocusStatus ? 'block' : 'none')};
    position: absolute;
    background-color: gray;
    top: 39px;
    border: 2px solid #00dd00;
    background-color: white;
    border-radius: 0 0 24px 24px;
    box-shadow: 0 4px 6px 0 #17171724;
    border-top: 0;
    box-sizing: border-box;
`;

Styled.AutoCompleteResult = styled.div`
    padding: 10px;

    div {
        padding: 14px 0;
        p {
            font-weight: bold;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-wrap: normal;
            overflow: hidden;
            max-width: 20rem;
        }
    }
`;

Styled.AutoCompleteItem = styled.li`
    div {
        display: inline-block;
    }

    div:first-of-type {
        height: 44px;
        width: 44px;
        vertical-align: middle;
        margin-right: 10px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &:hover {
        background-color: #80808012;
    }
`;
