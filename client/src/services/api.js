import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://localhost:8888/`,
        headers: {
            "Content-type": "application/json",
            
        }
    })
}