import React from 'react';
import Loader from 'react-loader-spinner';

const PreLoader = () => {
    const style = { textAlign: 'center' };
    return (
        <div style={style}>
            <Loader
                type="Rings"
                color="blue"
                height={100}
                width={100}
            />
        </div>
    )
}

export default PreLoader;