import axios from 'axios'

export function getDashboardData(){
    let object={
        "deviceId":"mfmf",
        "userMode": "INDIVIDUAL",
        "configVersion":"8"
    }
    var data
    axios.post('v1/toggle/flags',object,{
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        console.log(response)
        data=response.data
        }
    )
    console.log(data)
    return data
}
