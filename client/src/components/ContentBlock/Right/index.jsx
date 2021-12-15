import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Styled } from '../styles';
import MainButton from '../../../common/Button/index';

const RightContentBlock = ({ title, content, button, src = false }) => {
    return (
        <Styled.ContentSection>
            <Styled.Row top={false}>
                <Fade direction="right">
                    <Styled.ContentWrapper>
                        <div>
                            <Styled.Title>{title}</Styled.Title>
                            <Styled.Content>{content}</Styled.Content>
                        </div>
                        <div>{button && <MainButton link={button.link} text={button.text} />}</div>
                    </Styled.ContentWrapper>

                    <div>
                        {src && (
                            <Styled.ContentWrapper>
                                <img src={src} alt="이미지 영역" />
                            </Styled.ContentWrapper>
                        )}
                    </div>
                </Fade>
            </Styled.Row>
        </Styled.ContentSection>
    );
};

RightContentBlock.prototype = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    button: PropTypes.object,
    src: PropTypes.string,
};

export default RightContentBlock;
