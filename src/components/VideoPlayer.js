import React from 'react';
import './VideoPlayer.css';

const videoPlayer = (props) => {
    const videoSrc = `https://www.youtube.com/embed/${props.videoId}`

    return (
        <div className="videoPlayer">
            <iframe src={videoSrc} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default videoPlayer;