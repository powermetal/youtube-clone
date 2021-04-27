import React from 'react';
import './UserData.css';

const userData = (props) => {
    return (
        <div>
            <p>{props.channel}</p>
            <p className="userData__subtitle">{props.subtitle}</p>
        </div>
    );
};

export default userData;
