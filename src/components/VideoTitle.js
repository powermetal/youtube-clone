import React from 'react';
import './VideoTitle.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import RedoIcon from '@material-ui/icons/Redo';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const VideoTitle = (props) => {
    return (
        <div className="videoTitle">
            <h2>{props.title}</h2>
            <div className="videoTitle__stats">
                <p>545456 views • 11 sept. 2020</p>
                <div className="videoTitle__actions">
                    <ThumbUpIcon />
                    <p>145</p>
                    <ThumbDownIcon />
                    <p>245</p>
                    <RedoIcon />
                    <p>SHARE</p>
                    <SaveAltIcon />
                    <p>SAVE</p>
                    <MoreHorizIcon />
                </div>
            </div>
        </div>
    );
};

export default VideoTitle;

