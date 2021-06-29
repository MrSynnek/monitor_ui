import axios from 'axios'

export function callRandomUser(){
    return fetch("https://randomuser.me/api/").then(resp => resp.json());
}

export function callRandomCat(){
    return axios.get('https://aws.random.cat/meow')
}

