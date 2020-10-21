import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


export default class App extends Component {
    //set state to be empty array if you assume it will eventually be an array, this gives access to array methods
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        //youtube is now a preconfigured instance of axios
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}
