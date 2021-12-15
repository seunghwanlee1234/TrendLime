import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Spinner = () => {
    const antIcon = (
        <LoadingOutlined style={{ fontSize: 35, color: '#00DD00', padding: '3rem' }} spin />
    );
    return (
        <div style={{ textAlign: 'center', boxSizing: 'border-box' }}>
            <Spin indicator={antIcon} />
        </div>
    );
};

export default Spinner;
