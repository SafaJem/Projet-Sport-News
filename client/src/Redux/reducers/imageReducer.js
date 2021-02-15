import { GET_IMAGE} from "../constants/actionTypes";

const initState = {
  contacts: [],
};

 const imageReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_IMAGE:
      return {
        ...state,
        images: payload,
      };
    default:
      return state;
  }
};

export default imageReducer