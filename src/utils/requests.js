import axios from 'axios'

const backend = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const signUp = async (data) => await backend.post(data)

const login = async (data) => await backend.post(data)

const Requests = { signUp, login };
export default Requests;