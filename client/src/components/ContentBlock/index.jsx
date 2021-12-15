import LeftContentBlock from './Left/index';
import RightContentBlock from './Right/index';
import TopContentBlock from './Top/index';

function ContentBlock(props) {
    if (props.type === 'left') return <LeftContentBlock {...props} />;
    if (props.type === 'right') return <RightContentBlock {...props} />;
    if (props.type === 'top') return <TopContentBlock {...props} />;
}

export default ContentBlock;
