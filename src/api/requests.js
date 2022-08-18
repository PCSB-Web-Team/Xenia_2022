import axios from "axios";

const backend = axios.create({
  baseURL: 'https://xenia-2022.herokuapp.com/api',
});

//axios interceptors - attaches default authorization headers (JWT token) to all requests except Login/Signup post requests
backend.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) || ""

const signUp = async (data) => await backend.post("/auth/signup", data)

const login = (data) => backend.post("/auth/login", data)

const getUserByToken = async () => await backend.get("/auth/profile")  //! not sending res.data.data.token in /auth/profile/ route that's keeps localStorage outdated when site is refreshed

const getUserParticipations = async (userId="62f2a9ed2963089d93d01a9b") => await backend.get(`/participant/by-user/${userId}`)  //! hard coded userId in params, will remove after middleware is developed

const getEvents = async () => await backend.get("/events")

const getEventById = async (id) => await backend.get(`/events/${id}`)

const createOrder = async (data) => await backend.post("/razorpay", data)

const verifyPayment = async (data) => await backend.post("/razorpay/verification", data)

const Requests = { signUp, login, getUserByToken, getUserParticipations, getEvents, getEventById, createOrder, verifyPayment }
export default Requests;