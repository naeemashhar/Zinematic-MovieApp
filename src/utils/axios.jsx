import axios from "axios";

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2FmNzBkMGI1MGQxMDRmYWZiMzI1OGM3MDgwYzA4NyIsIm5iZiI6MTc0ODM1NTQwMC41NDU5OTk4LCJzdWIiOiI2ODM1Yzk0OGZhN2E3OWI4MTI4Mzg0YWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KdMh6S6jOitkGvuKSrkyFbFlVWTxNuTUAW69nwbG5OM'
  }
});


export default instance;