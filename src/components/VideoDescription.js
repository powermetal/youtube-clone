import React from 'react';
import './VideoDescription.css';
import UserData from './UserData';
import Avatar from '@material-ui/core/Avatar';

const VideoDescription = (props) => {
    return (
        <div className="videoDescription">
            <div className="videoDescription__uploaderData">
                <Avatar/>
                <div className="videoDescription__userData">
                    <UserData channel={props.channel} subtitle="25,8M Subscribers"/>
                    <p className="videoDescription__description">{props.description}</p>
                </div>
                <button className="videoDescription__subButton">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default VideoDescription;