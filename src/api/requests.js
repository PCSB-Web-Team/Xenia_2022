import axios from "axios";

const backend = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//axios interceptors - attaches default authorization headers (JWT token) to all requests except Login/Signup post requests
backend.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) || null

const signUp = async (data) => await backend.post("/auth/signup", data)

const login = (data) => backend.post("/auth/login", data)

const refreshToken = async () => await backend.get("/auth/refresh")

const getUserParticipations = async () => await backend.get("/participant/by-user")

const joinTeam = async (data) => await backend.put("/participant/jointeam", data)

const getEvents = async () => await backend.get("/events")

const getEventById = async (id) => await backend.get(`/events/${id}`)

const getSideEvents = async () => await backend.get("/side-events")

const createOrder = async (data) => await backend.post("/razorpay", data)

const verifyPayment = async (data) => await backend.post("/razorpay/verification", data)

const Requests = { signUp, login, refreshToken, getUserParticipations, joinTeam, getEvents, getEventById, getSideEvents, createOrder, verifyPayment }
export default Requests;