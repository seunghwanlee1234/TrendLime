import { Fade } from 'react-awesome-reveal';
import { Styled } from '../styles';

const LeftContentBlock = ({ title, content, src }) => {
    return (
        <Styled.ContentSection>
            <Styled.Row top={false}>
                <Fade direction="left">
                    <Styled.ContentWrapper>
                        <Styled.LeftImagContent>
                            <img src={src} alt="이미지 영역" />
                        </Styled.LeftImagContent>
                    </Styled.ContentWrapper>
                    <Styled.ContentWrapper>
                        <h3>{title}</h3>
                        <Styled.LeftContent>{content}</Styled.LeftContent>
                    </Styled.ContentWrapper>
                </Fade>
            </Styled.Row>
        </Styled.ContentSection>
    );
};

export default LeftContentBlock;
