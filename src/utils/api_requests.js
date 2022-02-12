import * as axios from 'axios'
const SERVER_API_START_URL = "http://84.201.141.26/api/"

export default SERVER_API_START_URL

export function getApiRequest(apiUrl, token=false, goodResponseHandler = standartGoodResponseHandler, badResponseHandler = standartErrorResponseHandler) {
    console.log(`Send get response: ${apiUrl}`)
    const option = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (token){
        option["Authorization"] = `Token ${token}`
        console.log(`With token: ${token}`)
    }
    
    axios.get(apiUrl, {headers: option}).then(response => {
        console.log(response.data)
        goodResponseHandler(response.data)
        
    }).catch(err => {
        console.log(err)
        badResponseHandler()

    })
}

export function postApiRequest(apiUrl, data, goodResponseHandler = standartGoodResponseHandler, badResponseHandler = standartErrorResponseHandler, token=false) {
    console.log(`Send post request: ${apiUrl}`)
    const option = {
        "Content-type": "application/json; charset=UTF-8"
    }
    if (token){
        option["Authorization"] = `Token ${token}`
        console.log(`With token: ${token}`)
    }
    axios({
        method: 'post',
        url: apiUrl,
        data: data,
        headers: option
      }).then(response => {
        goodResponseHandler(response)
    }).catch((err) =>{
        badResponseHandler(err)
    })
    
}

export function standartGoodResponseHandler(response) {
    console.log(response)
}

export function standartErrorResponseHandler(err) {
    if (err?.response) {
        // Request made and server responded
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
    } else if (err?.request) {
        // The request was made but no response was received
        console.log(err.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err?.message);
    }
}

