import axios from 'axios'

const backend = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const signUp = async (data) => await backend.post("/auth/signup", data)

const login = async (data) => await backend.post("/auth/login", data)

//! Remain to be created at backend
const getUserByToken = async (token) => await backend.get("/auth/token", {
    headers: { Authorization: 'Bearer' + token }  // JWT token should not be used in params - https://community.auth0.com/t/can-i-securely-pass-a-jwt-in-the-url-query-parameters-of-a-get-request/65678
})
//!

const Requests = { signUp, login, getUserByToken };
export default Requests;