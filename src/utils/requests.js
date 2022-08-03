import axios from "axios";

const backend = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//axios interceptors - attaches default authorization headers (JWT token) to all requests except Login/Signup post requests
backend.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(process.env.REACT_APP_LOGIN_ID) || ""  // JWT token should not be used in params - https://community.auth0.com/t/can-i-securely-pass-a-jwt-in-the-url-query-parameters-of-a-get-request/65678

const signUp = async (data) => await backend.post("/auth/signup", data)

const login = (data) => backend.post("/auth/login", data);

//! Remain to be created at backend
const getUserByToken = async () => await backend.get("/auth/token")
//!

const Requests = { signUp, login, getUserByToken }
export default Requests;