import axios from "axios";
import { GET_ALL_USERS} from "../constants/actionTypes";

export const getAllUsers = () => (dispatch) => {
  axios.get("/api/sport/")
    .then((res) => dispatch({ type: GET_ALL_USERS, payload: res.data }))
    .catch((err) => console.log(err));
};


export const deleteUser = (idUser) => (dispatch) => {
  axios
    .delete(`/api/sport/${idUser}`)
    .then((res) => dispatch(getAllUsers()))
    .catch((err) => console.log(err));
};
export const editUser = (idUser, editedUser) => (dispatch) => {
  axios
    .put(`/api/sport/${idUser}`, editedUser)
    .then((res) => dispatch(getAllUsers()))
    .catch((err) => console.log(err));
};