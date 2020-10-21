import axios from 'axios';
import config from './config';

const accessKey = config.KEY;


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: accessKey
    }
})