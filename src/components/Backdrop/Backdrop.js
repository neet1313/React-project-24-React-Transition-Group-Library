import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    return <div className={`${props.show ? 'Backdrop BackdropOpen' : 'Backdrop BackdropClose'}`}></div>
};

export default backdrop;
