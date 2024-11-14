import axios from 'axios';


export const fetchAnime = async (page) => {
  const response = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`);
  return response.data.data || [];
};
