import axios from "axios";

const API = "https://youtube-v31.p.rapidapi.com";

const options = {
    url: API,
    params: {
        maxResults: "50",
    },
    headers: {
        "x-rapidapi-key": "f214c279d6mshc2f01148c7ee0b7p1d5292jsn056ddd1a4d8e",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${API}/${url}`, options);

    return data;
};
