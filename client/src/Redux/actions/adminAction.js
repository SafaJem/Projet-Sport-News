import axios from "axios";
import { GET_ALL_USERS} from "../constants/actionTypes";

// Admin get all users
export const getAllUsers = () => (dispatch) => {
  axios.get("/api/sport/")
    .then((res) => dispatch({ type: GET_ALL_USERS, payload: res.data }))
    .catch((err) => console.log(err));
};


// Admin add user
export const addUser = (formData) => (dispatch) => {
  axios.post("/api/sport/add",formData)
    .then((res) =>  dispatch(getAllUsers()))
    .catch((err) => console.log(err));
};

// Admin delete user
export const deleteUser = (idUser) => (dispatch) => {
  axios
    .delete(`/api/sport/${idUser}`)
    .then((res) => dispatch(getAllUsers()))
    .catch((err) => console.log(err));
};

// Admin edit user
export const editUser = (idUser, editedUser) => (dispatch) => {
  axios
    .put(`/api/sport/${idUser}`, editedUser)
    .then((res) => dispatch(getAllUsers()))
    .catch((err) => console.log(err));
};