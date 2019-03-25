import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://192.168.0.101:80/'
export default axios
