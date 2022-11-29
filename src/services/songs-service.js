import axios from "axios";
const ITUNES_API ='https://itunes.apple.com/search';

export const findSongs = async (song) => {
    const request = `${ITUNES_API}?term=${song}&media=music&entity=song`;
    const response = await axios.get(request);
    return response.data.results;
}