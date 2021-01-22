const lsToken = 'my_app_token';

function setToken(request){
    const isAuthUrl = request.url.includes('auth');
    if(!isAuthUrl) {
        const token = localStorage.getItem(lsToken);
        request.headers['x-access-token'] = token;
    }
    return request;
}

function setTokenOnLogin(response){
    const isLoginUrl = response.config.url.includes('login');

    if(isLoginUrl){
        const token = response.data.token;
        localStorage.setItem(lsToken, token);
    }
    
    return response;
}

function getClearResponse(response){
    return response.data;
}

function onError(error) {
    return Promise.reject(error);
}

export default function (axios){
    axios.interceptors.request.use(setToken);
    axios.interceptors.response.use(setTokenOnLogin);
    axios.interceptors.response.use(getClearResponse, OnError);
}
