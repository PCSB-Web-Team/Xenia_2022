import axios from "axios";

const backend = axios.create({
  baseURL: "https://xenia-2022/herokuapp.com/api",
});

const signUp = (data) => backend.post("/auth/signup", data);

const login = (data) => backend.post("/auth/login", data);

//! Remain to be created at backend
const getUserByToken = async (token) =>
  await backend.get("/auth/token", {
    headers: { Authorization: "Bearer" + token }, // JWT token should not be used in params - https://community.auth0.com/t/can-i-securely-pass-a-jwt-in-the-url-query-parameters-of-a-get-request/65678
  });
//!

export default { signUp, login, getUserByToken };