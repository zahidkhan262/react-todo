import axios from "axios";
import { API_URL } from "../helpers/APIRequest";

// create post api response
const createGoal = async (usergoal, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL + '/goals', usergoal, config);
  return response.data
}
// delete post api response
const deleteGoal = async (goalId, token) => {
  console.log(goalId)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.delete(API_URL + '/goals/' + goalId, config);
  return response.data
}

const goalService = {
  createGoal,
  deleteGoal
}
export default goalService