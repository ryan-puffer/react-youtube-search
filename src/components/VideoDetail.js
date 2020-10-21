import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <p>Loading...</p>;
    }

    return <div>{video.snippet.title}</div>;
}

export default VideoDetail;