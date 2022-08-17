import axios from "axios";

const backend = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//axios interceptors - attaches default authorization headers (JWT token) to all requests except Login/Signup post requests
backend.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) || ""

const signUp = async (data) => await backend.post("/auth/signup", data)

const login = (data) => backend.post("/auth/login", data)

const getUserByToken = async () => await backend.get("/profile/")

const getEvents = async () => await backend.get("/events")

const getEventById = async (id) => await backend.get(`/events/${id}`)

const createOrder = async (id) => await backend.get(`/events/createOrder/${id}`)

const Requests = { signUp, login, getUserByToken, getEvents, getEventById, createOrder }
export default Requests;