import axios from "axios";
import { API_URL } from "../helpers/APIRequest";


// RegisterAPI

const registerAPI = async (userData) => {
  const response = await axios.post(API_URL + '/users/register', userData);
  return response.data;
};

// loginAPI

const loginAPI = async (userData) => {
  const response = await axios.post(API_URL + '/users/login', userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  registerAPI,
  loginAPI,
  logout,
};

export default authService;
