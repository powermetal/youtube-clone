import React from 'react';
import UserData from './UserData';
import './SearchResult.css';

const SearchResults = (props) => {
    const randomNumber = (min, max) => {
        return min + Math.floor((max - min) * Math.random());
    };

    const onResultClicked = () => {
        props.onClick(props.videoId)
    };

    return (
        <div className="searchResults" onClick={onResultClicked}>
            <img src={props.thumbnail}/>
            <div className="searchResults__resultData">
                <h3>{props.title}</h3>
                <UserData channel={props.channel} subtitle={`${randomNumber(100, 5000)} views`}/>
                <p style={{fontSize: '12px'}}>{props.publishTime}</p>
            </div>
        </div>
    );
};

export default SearchResults;