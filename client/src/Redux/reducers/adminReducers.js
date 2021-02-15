  import {GET_ALL_USERS} from '../constants/actionTypes'

const initState = {
  users: [],
};

 const adminReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload
      };
    default:
      return state;
  }
};
 export default adminReducers