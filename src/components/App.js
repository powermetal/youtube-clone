import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoTitle from './VideoTitle';
import VideoDescription from './VideoDescription';
import SearchResult from './SearchResult';
import youtube from '../apis/youtube';
import Divider from '@material-ui/core/Divider';

class App extends React.Component {
    state = {
        results: [],
        videoId: ''
    }

    searchVideo = async (term) => {
        const searchResult = await youtube.get('/search', {params: {q: term}})
        this.setState({
            results: searchResult.data.items
        });
        console.log(this.state.results);
    };

    getVideoData = (videos, videoId) => {
        const videoData = videos.filter((video) => video.id.videoId === videoId)
            .map((video) => {
                return {
                    title: video.snippet.title,
                    channel: video.snippet.channelTitle,
                    description: video.snippet.description
                }
            });
        if (videoData.length > 0)
            return videoData[0]
        else
            return {}
    }

    videoContainer = () => {
        const videoData = this.getVideoData(this.state.results, this.state.videoId)

        if (this.state.videoId !== '')
            return (
                <div className="app__video">
                    <VideoPlayer videoId={this.state.videoId}/>
                    <div className="app__videoData">
                        <VideoTitle title={videoData.title}/>
                        <Divider/>
                        <VideoDescription
                            channel={videoData.channel}
                            description={videoData.description}/>
                    </div>
                </div>
            )
    }

    render() {
        return (
            <div className="app">
                <div className="app__searchBar">
                    <SearchBar onSearch={this.searchVideo}/>
                </div>
                <div className="app__content">
                    {this.videoContainer()}
                    <div className="app__searchResults">
                        {this.state.results.map(result =>
                            <SearchResult
                                onClick={(id) => this.setState({videoId: id})}
                                thumbnail={result.snippet.thumbnails.medium.url}
                                title={result.snippet.title}
                                channel={result.snippet.channelTitle}
                                publishTime={result.snippet.publishTime}
                                key={result.id.videoId}
                                videoId={result.id.videoId}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    };
}

export default App;

