import { css, jsx } from '@emotion/react';
import Button from '../../common/Button/index';

import { Styled } from './styles';
import WaveBackground from '../../assets/images/layered-waves-haikei.svg';

const Banner = ({ title, subtitle, button = false }) => {
    return (
        <div css={BannerImage({ WaveBackground })}>
            <Styled.BannerWrapper>
                <Styled.BannerTitle>
                    {title} <br /> {subtitle}
                </Styled.BannerTitle>
                {button && <Button link={button.link} text={button.text} />}
            </Styled.BannerWrapper>
        </div>
    );
};

const BannerImage = (props) => css`
    background-image: url(${props.WaveBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-size: cover;
    background-position-y: bottom;
    height: 540px;
`;

export default Banner;
