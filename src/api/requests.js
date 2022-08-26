import axios from "axios";

const backend = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

backend.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) || null;

const signUp = async (data) => await backend.post("/auth/signup", data);

const login = (data) => backend.post("/auth/login", data);

const refreshToken = async () => await backend.get("/auth/refresh");

const getUserProfile = async () => await backend.get("/auth/profile");

const getUserParticipations = async () => await backend.get("/participant/by-user");

const registerEvent = async (event) => await backend.post("/participant", event);

const createTeam = async (data) => await backend.post("/participant/team", data);

const joinTeam = async (data) => await backend.put("/participant/jointeam", data);

const getEvents = async () => await backend.get("/events");

const getEventById = async (id) => await backend.get(`/events/${id}`);

const getSideEvents = async () => await backend.get("/side-events");

const createOrder = async (data) => await backend.post("/razorpay", data);

// const verifyPayment = async (data) => await backend.post("/razorpay/verification", data); //! Admin Route, moving to isolated file

const sendContactUsMessage = async (message) => await backend.post("https://xenia-mailer.herokuapp.com/api/contact-us", message)

const Requests = {
  signUp,
  login,
  refreshToken,
  getUserProfile,
  getUserParticipations,
  registerEvent,
  createTeam,
  joinTeam,
  getEvents,
  getEventById,
  getSideEvents,
  createOrder,
  // verifyPayment,
  sendContactUsMessage
};
export default Requests;
