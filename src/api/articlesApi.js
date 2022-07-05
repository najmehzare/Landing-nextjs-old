import axios from 'axios';

const innstance = axios.create({
    baseURL : 'https://62938cc54e324aacf6dc89d4.endapi.io/articles',
    timeout : 5000
});


innstance.interceptors.request.use(function(config){
    return config;
},function(err){
    //handle error
    return Promise.reject(err)
})


innstance.interceptors.response.use(function(response){
    return response;
},function(err){
    //System log
    return Promise.reject(err)
})


export default innstance;