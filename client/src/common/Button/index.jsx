import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';

function Button({ type = 'outline', link, text }) {
    return (
        <Link to={link}>
            <Styled.Button type={type}>{text}</Styled.Button>
        </Link>
    );
}

export default Button;
