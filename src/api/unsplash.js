import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID FmLRUvvTUHV6THahK6LU-MIAV_Ny0a9ZpVojHh82lqE'
  }  
})