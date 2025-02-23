import axios from 'axios';


export const fetchTopAnime = async (page) => {
  const response = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
    params: {
      page: page,
      sfw: false
    },
  });
  return response.data;
};

export const fetchSearchAnime = async (page, query) => {
  const response = await axios.get(`https://api.jikan.moe/v4/anime`, {
    params: {
      q: query,
      page: page,
      sfw: false
    },
  });
  return response.data;
};
