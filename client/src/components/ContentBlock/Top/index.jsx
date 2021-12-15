import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Styled } from '../styles';

const TopContentBlock = ({ contents, children }) => {
    return (
        <Styled.ContentSection>
            <Styled.Row top={true}>
                <Fade direction="top">
                    <Styled.ContentWrapper>
                        <Styled.Content>
                            {contents.map((content) => (
                                <>
                                    {content} <br />
                                </>
                            ))}
                        </Styled.Content>
                        {children}
                    </Styled.ContentWrapper>
                </Fade>
            </Styled.Row>
        </Styled.ContentSection>
    );
};

export default TopContentBlock;
