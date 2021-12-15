import React from 'react';
import { Styled } from './styles';

function Container({ children }) {
    return <Styled.Container>{children}</Styled.Container>;
}

export default Container;
