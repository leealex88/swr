import axios from 'axios'

const AXIOS_CONFIG = {
    baseURL: process.env.API_BASE_URL
}

const http = axios.create(AXIOS_CONFIX)

export default http

//custom instance create()