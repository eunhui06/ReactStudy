import axios from 'axios';

const API_KEY = '778d39dccd8c4b0ca031240064db72e6';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (category = '') => {
  const response = await axios.get(BASE_URL, {
    params: {
      country: 'us',
      category,
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};
