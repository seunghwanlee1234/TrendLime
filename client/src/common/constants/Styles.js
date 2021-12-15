export const size = {
    large: '64em', // 1024px
    medium: '48em', // 768px
    small: '20em', // 320px
};

export const theme = {
    primaryColor: '#00DD00',
    secondaryColor: '#445580',
    mq: {
        laptop: `@media only screen and (max-width: ${size.large})`,
        tablet: `@media only screen and (max-width: ${size.medium})`,
        mobile: `@media only screen and (min-width: ${size.small})`,
    },
};
