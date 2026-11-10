import axios from "axios";

const api=axios.create({
   
  
  baseURL: 'https://yt-api.p.rapidapi.com',
  params: {geo: 'TR',lang: 'tr',},
  headers: {
    'x-rapidapi-key':import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  }


})

export default api