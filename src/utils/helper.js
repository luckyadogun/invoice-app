import axios from 'axios'

const authtoken = localStorage.getItem('token')

var userToken = axios.defaults.headers.common['Authorization'] = 'Token ' + authtoken 

export default userToken