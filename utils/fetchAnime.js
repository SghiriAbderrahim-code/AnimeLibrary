import axios from 'axios';

export const fetchAnime = async () => {
  const response = await axios.get('https://api.jikan.moe/v4/top/anime');
  return response.data.data || [];
};
