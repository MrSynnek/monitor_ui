import axios from 'axios'

export default async function getDashboardData(){
    let object={
        "deviceId":"mfmf",
        "userMode": "INDIVIDUAL",
        "configVersion":"8"
    }
    let response = await axios.post('v1/toggle/flags',object,{
        headers: {
            'Content-Type': 'application/json',
        }
    })
    console.log(response)
    return response.data.data
}
