import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '1e7adf1125msh21d5207fedcc1e3p1f0ac3jsn3a4afd13ff63',
    },
  });
    
  return data;
}