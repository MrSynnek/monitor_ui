import axios from 'axios'

export function callRandomUser(){
    let newController = {
        "feature": "replatform",
        "function": "transfer",
        "flag": "1",
        "is_flutter": "1"  
    }
    return fetch("https://randomuser.me/api/").then(resp => resp.json());
}

export function callRandomCat(){
    return axios.get('https://aws.random.cat/meow')
}

